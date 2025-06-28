
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
              <Mic size={24} className="text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
          <p className="text-gray-400">{subtitle}</p>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
