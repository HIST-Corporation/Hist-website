import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Lock } from "lucide-react";

const Login = () => {
   const [credentials, setCredentials] = useState({ email: "", password: "" });
   const [rememberMe, setRememberMe] = useState(false);
   const [error, setError] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      // Basic validation
      if (!credentials.email || !credentials.password) {
         setError("Please fill in all fields");
         return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(credentials.email)) {
         setError("Please enter a valid email address");
         return;
      }

      // Authentication logic would go here
      console.log("Login attempt with:", credentials);

      // Reset form on successful submission
      setCredentials({ email: "", password: "" });
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
         <div className="bg-white rounded-xl w-full max-w-md shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-8">
               {/* Logo and Header */}
               <div className="text-center mb-8">
                  <div className="mx-auto bg-hist-blue/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                     <User className="h-10 w-10 text-hist-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Member Login</h2>
                  <p className="text-gray-600 mt-2">Sign in to access your account</p>
               </div>

               {error && <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg text-center">{error}</div>}

               {/* Login Form */}
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hist-blue focus:border-transparent transition-all"
                        value={credentials.email}
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                     />
                  </div>

                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hist-blue focus:border-transparent transition-all"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                     />
                  </div>

                  <div className="flex items-center justify-between">
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           className="form-checkbox h-4 w-4 text-hist-blue rounded focus:ring-hist-blue"
                           checked={rememberMe}
                           onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span className="ml-2 text-gray-600">Remember me</span>
                     </label>
                     <a
                        href="#"
                        className="text-sm text-hist-blue hover:underline"
                        onClick={(e) => {
                           e.preventDefault();
                           alert(
                              "Ask your Admin or HR for password reset Link. Do not try to reset the password yourself."
                           );
                        }}
                     >
                        Forgot password?
                     </a>
                  </div>

                  <Button
                     type="submit"
                     className="w-full bg-hist-blue hover:bg-hist-blue-dark text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                     Sign In
                  </Button>
               </form>

               <div className="mt-8 text-center">
                  <p className="text-gray-600">
                     Don't have an account?{" "}
                     <a
                        href="#"
                        className="font-medium text-hist-blue hover:underline"
                        onClick={(e) => {
                           e.preventDefault();
                           alert(
                              "Please concern with Admin team or HR for credentials. Do not try to create an account."
                           );
                        }}
                     >
                        Create account
                     </a>
                  </p>
               </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
               <p className="text-gray-500 text-sm">© {new Date().getFullYear()} HIST. All rights reserved.</p>
            </div>
         </div>
      </div>
   );
};

export default Login;
