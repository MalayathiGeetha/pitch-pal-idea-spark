
import { useState, useRef } from "react";
import { Mic, Square, RotateCcw, Sparkles, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface GeneratedPitch {
  oneLiner: string;
  pitchStructure: {
    title: string;
    content: string;
    imageDescription?: string;
  }[];
}

const CreatePitch = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [generatedPitch, setGeneratedPitch] = useState<GeneratedPitch | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Initialize speech recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: any) => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }
          if (finalTranscript) {
            setTranscript(prev => prev + finalTranscript + ' ');
          }
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          toast({
            title: "Recording Error",
            description: "There was an issue with speech recognition. Please try again.",
            variant: "destructive"
          });
        };

        recognitionRef.current.start();
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      setIsRecording(true);
      setTranscript("");
      setGeneratedPitch(null);
      
      mediaRecorder.start();
      
      toast({
        title: "Recording Started",
        description: "Speak about your startup idea. Click stop when you're done.",
      });
    } catch (error) {
      console.error('Error starting recording:', error);
      toast({
        title: "Recording Error",
        description: "Could not access microphone. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    
    setIsRecording(false);
    
    toast({
      title: "Recording Stopped",
      description: "Your recording has been transcribed. You can now generate your pitch!",
    });
  };

  const reRecord = () => {
    setTranscript("");
    setGeneratedPitch(null);
    toast({
      title: "Ready to Record",
      description: "Click the record button to start a new recording.",
    });
  };

  const generatePitch = async () => {
    if (!transcript.trim()) {
      toast({
        title: "No Content",
        description: "Please record your pitch first.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-pitch', {
        body: { transcript: transcript.trim() }
      });

      if (error) {
        console.error('Error generating pitch:', error);
        toast({
          title: "Generation Error",
          description: "Failed to generate pitch. Please try again.",
          variant: "destructive"
        });
        return;
      }

      setGeneratedPitch(data);
      
      toast({
        title: "Pitch Generated!",
        description: "Your AI-optimized pitch is ready. Review and save it to your library.",
      });
    } catch (error) {
      console.error('Error generating pitch:', error);
      toast({
        title: "Generation Error",
        description: "Failed to generate pitch. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const savePitch = async () => {
    if (!generatedPitch) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication Error",
          description: "Please sign in to save your pitch.",
          variant: "destructive"
        });
        return;
      }

      const { error } = await supabase
        .from('pitches')
        .insert({
          user_id: user.id,
          original_transcript: transcript,
          one_liner: generatedPitch.oneLiner,
          pitch_structure: generatedPitch.pitchStructure
        });

      if (error) {
        console.error('Error saving pitch:', error);
        toast({
          title: "Save Error",
          description: "Failed to save pitch. Please try again.",
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: "Pitch Saved!",
        description: "Your pitch has been saved to your library.",
      });
      
      // Reset form
      setTranscript("");
      setGeneratedPitch(null);
    } catch (error) {
      console.error('Error saving pitch:', error);
      toast({
        title: "Save Error",
        description: "Failed to save pitch. Please try again.",
        variant: "destructive"
      });
    }
  };

  const deletePitch = () => {
    setGeneratedPitch(null);
    toast({
      title: "Pitch Deleted",
      description: "The generated pitch has been removed.",
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create New Pitch</h1>
        <p className="text-gray-400">Record your startup idea and let AI create an optimized pitch deck</p>
      </div>

      {!generatedPitch ? (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Mic className="h-5 w-5" />
              Voice Recording
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Recording Button */}
            <div className="flex justify-center">
              {!isRecording && !transcript ? (
                <Button
                  onClick={startRecording}
                  size="lg"
                  className="h-32 w-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Mic size={48} />
                </Button>
              ) : isRecording ? (
                <Button
                  onClick={stopRecording}
                  size="lg"
                  className="h-32 w-32 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg animate-pulse"
                >
                  <Square size={48} />
                </Button>
              ) : null}
            </div>

            {/* Status */}
            <div className="text-center">
              {isRecording ? (
                <p className="text-red-400 font-medium">🔴 Recording in progress...</p>
              ) : transcript ? (
                <p className="text-green-400 font-medium">✅ Recording complete</p>
              ) : (
                <p className="text-gray-400">Click the record button to start</p>
              )}
            </div>

            {/* Transcript */}
            {transcript && (
              <div className="mt-6">
                <h3 className="text-white font-semibold mb-2">Transcript:</h3>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                  <p className="text-gray-300 whitespace-pre-wrap">{transcript}</p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {transcript && !isRecording && (
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={reRecord}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <RotateCcw size={18} className="mr-2" />
                  Re-record
                </Button>
                <Button
                  onClick={generatePitch}
                  disabled={isGenerating}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} className="mr-2" />
                      Generate Pitch
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Generated One-Liner */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">AI-Optimized One-Liner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg font-medium">{generatedPitch.oneLiner}</p>
            </CardContent>
          </Card>

          {/* Pitch Structure */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Guy Kawasaki's 10-Slide Pitch Deck</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {generatedPitch.pitchStructure.map((section, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                    <h4 className="text-purple-400 font-semibold mb-2">{index + 1}. {section.title}</h4>
                    <p className="text-gray-300 mb-2">{section.content}</p>
                    {section.imageDescription && (
                      <p className="text-gray-500 text-sm italic">💡 Image suggestion: {section.imageDescription}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={deletePitch}
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
            >
              <Trash2 size={18} className="mr-2" />
              Delete
            </Button>
            <Button
              onClick={savePitch}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Save size={18} className="mr-2" />
              Save to Library
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePitch;
