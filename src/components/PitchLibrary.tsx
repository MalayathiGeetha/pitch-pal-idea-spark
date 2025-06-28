import { useState, useEffect } from "react";
import { Edit, Trash2, Calendar, Save, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface SavedPitch {
  id: string;
  created_at: string;
  original_transcript: string;
  one_liner: string;
  pitch_structure: {
    title: string;
    content: string;
    imageDescription?: string;
  }[];
}

const PitchLibrary = () => {
  const [pitches, setPitches] = useState<SavedPitch[]>([]);
  const [editingPitch, setEditingPitch] = useState<SavedPitch | null>(null);
  const [editedOneLiner, setEditedOneLiner] = useState("");
  const [editedStructure, setEditedStructure] = useState<{
    title: string;
    content: string;
    imageDescription?: string;
  }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadPitches();
  }, []);

  const loadPitches = async () => {
    try {
      const { data, error } = await supabase
        .from('pitches')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading pitches:', error);
        toast({
          title: "Load Error",
          description: "Failed to load pitches. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Type cast the pitch_structure from Json to the expected type
      const typedPitches = (data || []).map(pitch => ({
        ...pitch,
        pitch_structure: pitch.pitch_structure as {
          title: string;
          content: string;
          imageDescription?: string;
        }[]
      }));

      setPitches(typedPitches);
    } catch (error) {
      console.error('Error loading pitches:', error);
      toast({
        title: "Load Error",
        description: "Failed to load pitches. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deletePitch = async (id: string) => {
    try {
      const { error } = await supabase
        .from('pitches')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting pitch:', error);
        toast({
          title: "Delete Error",
          description: "Failed to delete pitch. Please try again.",
          variant: "destructive"
        });
        return;
      }

      setPitches(prev => prev.filter(pitch => pitch.id !== id));
      toast({
        title: "Pitch Deleted",
        description: "The pitch has been removed from your library."
      });
    } catch (error) {
      console.error('Error deleting pitch:', error);
      toast({
        title: "Delete Error",
        description: "Failed to delete pitch. Please try again.",
        variant: "destructive"
      });
    }
  };

  const startEditing = (pitch: SavedPitch) => {
    setEditingPitch(pitch);
    setEditedOneLiner(pitch.one_liner);
    setEditedStructure([...pitch.pitch_structure]);
  };

  const saveEdits = async () => {
    if (!editingPitch) return;

    try {
      const { error } = await supabase
        .from('pitches')
        .update({
          one_liner: editedOneLiner,
          pitch_structure: editedStructure
        })
        .eq('id', editingPitch.id);

      if (error) {
        console.error('Error updating pitch:', error);
        toast({
          title: "Update Error",
          description: "Failed to update pitch. Please try again.",
          variant: "destructive"
        });
        return;
      }

      setPitches(prev => prev.map(pitch => 
        pitch.id === editingPitch.id 
          ? { ...pitch, one_liner: editedOneLiner, pitch_structure: editedStructure }
          : pitch
      ));
      
      setEditingPitch(null);
      toast({
        title: "Pitch Updated",
        description: "Your changes have been saved successfully."
      });
    } catch (error) {
      console.error('Error updating pitch:', error);
      toast({
        title: "Update Error",
        description: "Failed to update pitch. Please try again.",
        variant: "destructive"
      });
    }
  };

  const cancelEditing = () => {
    setEditingPitch(null);
    setEditedOneLiner("");
    setEditedStructure([]);
  };

  const updateStructureSection = (index: number, field: 'title' | 'content', value: string) => {
    const updated = [...editedStructure];
    updated[index][field] = value;
    setEditedStructure(updated);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Sign Out Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive"
      });
    } else {
      navigate("/");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Pitch Library</h1>
          <p className="text-gray-400">
            {pitches.length === 0 ? "No pitches saved yet. Create your first pitch to get started!" : `${pitches.length} pitch${pitches.length !== 1 ? 'es' : ''} saved`}
          </p>
        </div>
        <Button
          onClick={handleSignOut}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          <LogOut size={16} className="mr-2" />
          Sign Out
        </Button>
      </div>

      {pitches.length === 0 ? (
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-12 text-center">
            <div className="text-gray-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No pitches yet</h3>
            <p className="text-gray-400">Start by creating your first pitch in the Create tab.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {pitches.map(pitch => (
            <Card key={pitch.id} className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{formatDate(pitch.created_at)}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => startEditing(pitch)}
                    size="sm"
                    variant="outline"
                    className="border-gray-600 hover:bg-gray-700 text-gray-300"
                  >
                    <Edit size={16} className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => deletePitch(pitch.id)}
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Delete
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">One-Liner</h4>
                    <p className="text-gray-300 font-medium">{pitch.one_liner}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Pitch Structure</h4>
                    <div className="grid gap-3">
                      {pitch.pitch_structure.slice(0, 3).map((section, index) => (
                        <div key={index} className="bg-gray-900 p-3 rounded-lg border border-gray-600">
                          <h5 className="text-pink-400 font-medium text-sm mb-1">{section.title}</h5>
                          <p className="text-gray-300 text-sm">{section.content}</p>
                          {section.imageDescription && (
                            <p className="text-gray-500 text-xs italic mt-1">💡 {section.imageDescription}</p>
                          )}
                        </div>
                      ))}
                      {pitch.pitch_structure.length > 3 && (
                        <p className="text-gray-400 text-sm italic">
                          +{pitch.pitch_structure.length - 3} more sections...
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editingPitch} onOpenChange={cancelEditing}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Edit Pitch</DialogTitle>
          </DialogHeader>
          
          {editingPitch && (
            <div className="space-y-6">
              {/* Edit One-Liner */}
              <div>
                <label className="block text-purple-400 font-semibold mb-2">One-Liner</label>
                <textarea
                  value={editedOneLiner}
                  onChange={(e) => setEditedOneLiner(e.target.value)}
                  className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:border-purple-500 focus:outline-none"
                  rows={3}
                />
              </div>

              {/* Edit Pitch Structure */}
              <div>
                <label className="block text-purple-400 font-semibold mb-2">Pitch Structure</label>
                <div className="space-y-4">
                  {editedStructure.map((section, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) => updateStructureSection(index, 'title', e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-pink-400 font-medium mb-2 focus:border-purple-500 focus:outline-none"
                        placeholder="Section Title"
                      />
                      <textarea
                        value={section.content}
                        onChange={(e) => updateStructureSection(index, 'content', e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-gray-300 focus:border-purple-500 focus:outline-none"
                        rows={3}
                        placeholder="Section Content"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-600">
                <Button
                  onClick={cancelEditing}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <X size={16} className="mr-1" />
                  Cancel
                </Button>
                <Button
                  onClick={saveEdits}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Save size={16} className="mr-1" />
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PitchLibrary;
