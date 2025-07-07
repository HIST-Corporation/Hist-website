import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, User, Lock, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginFormProps {
   onLogin: (role: "admin" | "hr" | "employee") => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [rememberMe, setRememberMe] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setIsLoading(true);

      // Basic validation
      if (!formData.email || !formData.password) {
         setError("Please fill in all fields");
         setIsLoading(false);
         return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
         setError("Please enter a valid email address");
         setIsLoading(false);
         return;
      }

      try {
         // Simulate authentication
         await new Promise((resolve) => setTimeout(resolve, 1000));

         // Demo credentials (you can remove this in production)
         if (formData.email === "admin@company.com" && formData.password === "admin123") {
            onLogin("admin");
         } else if (formData.email === "hr@company.com" && formData.password === "hr123") {
            onLogin("hr");
         } else if (formData.email === "employee@company.com" && formData.password === "emp123") {
            onLogin("employee");
         } else {
            setError("Invalid email or password");
         }
      } catch (err) {
         setError("Login failed. Please try again.");
      }

      setIsLoading(false);
   };

   const handleOAuthLogin = (provider: string) => {
      alert(`In a real app, this would redirect to ${provider} authentication`);
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
         <Card className="w-full max-w-lg shadow-2xl border border-gray-100">
            <CardHeader className="text-center space-y-2">
               <div className="mx-auto bg-hist-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <User className="h-8 w-8 text-hist-blue" />
               </div>
               <CardTitle className="text-2xl font-bold text-gray-800">Member Login</CardTitle>
               <CardDescription className="text-gray-600 text-sm">Sign in to access your account</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
               {error && (
                  <Alert variant="destructive" className="animate-fade-in">
                     <AlertDescription>{error}</AlertDescription>
                  </Alert>
               )}

               <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                     <Label htmlFor="email" className="text-gray-700 text-sm">
                        Email Address
                     </Label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <User className="h-4 w-4 text-gray-400" />
                        </div>
                        <Input
                           id="email"
                           type="email"
                           placeholder="Enter your email"
                           className="pl-10 text-sm h-10"
                           value={formData.email}
                           onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                           required
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="password" className="text-gray-700 text-sm">
                        Password
                     </Label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Lock className="h-4 w-4 text-gray-400" />
                        </div>
                        <Input
                           id="password"
                           type={showPassword ? "text" : "password"}
                           placeholder="Enter your password"
                           className="pl-10 text-sm h-10"
                           value={formData.password}
                           onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                           required
                        />
                        <Button
                           type="button"
                           variant="ghost"
                           size="sm"
                           className="absolute right-0 top-0 h-full px-3 py-2"
                           onClick={() => setShowPassword(!showPassword)}
                        >
                           {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                     </div>
                  </div>

                  <div className="flex items-center justify-between">
                     <Label className="flex items-center space-x-2 text-sm">
                        <input
                           type="checkbox"
                           className="form-checkbox h-4 w-4 text-hist-blue rounded focus:ring-hist-blue"
                           checked={rememberMe}
                           onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span className="text-gray-600">Remember me</span>
                     </Label>
                     <Button
                        variant="link"
                        className="text-sm text-hist-blue hover:underline p-0 h-auto"
                        onClick={(e) => {
                           e.preventDefault();
                           alert(
                              "Ask your Admin or HR for password reset Link. Do not try to reset the password yourself."
                           );
                        }}
                     >
                        Forgot password?
                     </Button>
                  </div>

                  <Button
                     type="submit"
                     className="w-full bg-hist-blue hover:bg-hist-blue-dark text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                     disabled={isLoading}
                  >
                     {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
               </form>

               <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                     <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                     <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={() => handleOAuthLogin("google")} className="w-full text-sm h-9">
                     <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                           fill="currentColor"
                           d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                           fill="currentColor"
                           d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                           fill="currentColor"
                           d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                           fill="currentColor"
                           d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                     </svg>
                     Google
                  </Button>
                  <Button variant="outline" onClick={() => handleOAuthLogin("github")} className="w-full text-sm h-9">
                     <Github className="mr-2 h-4 w-4" />
                     GitHub
                  </Button>
               </div>

               <div className="text-center text-xs text-gray-600">
                  Don't have an account?{" "}
                  <Button
                     variant="link"
                     className="text-hist-blue hover:underline p-0 h-auto text-xs"
                     onClick={(e) => {
                        e.preventDefault();
                        alert("Please concern with Admin team or HR for credentials. Do not try to create an account.");
                     }}
                  >
                     Create account
                  </Button>
               </div>
            </CardContent>

            <div className="bg-gray-50 px-6 py-3 text-center border-t border-gray-100">
               <p className="text-gray-500 text-xs">© {new Date().getFullYear()} HIST. All rights reserved.</p>
            </div>
         </Card>
      </div>
   );
}
