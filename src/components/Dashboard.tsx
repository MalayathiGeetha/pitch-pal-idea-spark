
import { useState } from "react";
import { Mic, Library, Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreatePitch from "./CreatePitch";
import PitchLibrary from "./PitchLibrary";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Navigation */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
              <Mic size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Pitch Pal</h2>
              <p className="text-xs text-gray-400">Dashboard</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button
              variant={activeTab === "create" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "create" 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("create")}
            >
              <Plus size={18} className="mr-3" />
              Create
            </Button>
            
            <Button
              variant={activeTab === "library" ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === "library" 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("library")}
            >
              <Library size={18} className="mr-3" />
              Library
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === "create" && <CreatePitch />}
        {activeTab === "library" && <PitchLibrary />}
      </div>
    </div>
  );
};

export default Dashboard;
