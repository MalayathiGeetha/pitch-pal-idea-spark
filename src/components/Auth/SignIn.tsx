
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AuthLayout from "./AuthLayout";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Sign In Failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "You've successfully signed in.",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to continue creating pitches"
    >
      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-gray-300">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-900 border-gray-600 text-white focus:border-purple-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <Label htmlFor="password" className="text-gray-300">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-900 border-gray-600 text-white focus:border-purple-500"
            placeholder="Enter your password"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:text-purple-300">
            Sign up here
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
