import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Calendar } from "lucide-react";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      console.log("Form submitted:", formData);

      // Handle form submission logic here
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <section id="contact" className="py-20 bg-gradient-to-br from-sapphire-50 to-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Let's Build Something
                  <span className="text-gradient"> Amazing Together</span>
               </h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to transform your business with cutting-edge technology? Contact us today for a free
                  consultation and let's discuss your project.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               <Card className="hist-shadow animate-fade-in">
                  <CardContent className="p-8">
                     <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                           <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                 Full Name
                              </label>
                              <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 value={formData.name}
                                 onChange={handleChange}
                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-colors"
                                 required
                              />
                           </div>

                           <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                 Email Address
                              </label>
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-colors"
                                 required
                              />
                           </div>
                        </div>

                        <div>
                           <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                              Subject
                           </label>
                           <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-colors"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                              Message
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={6}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-colors resize-none"
                              required
                           ></textarea>
                        </div>

                        <Button
                           type="submit"
                           className="w-full bg-hist-gradient hover:shadow-lg transition-all duration-300"
                        >
                           Send Message
                        </Button>
                     </form>
                  </CardContent>
               </Card>

               {/* Contact Information */}
               <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  {/* Office Location */}
                  <Card className="hist-shadow">
                     <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-sapphire-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-6 h-6 text-sapphire-600" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
                              <p className="text-gray-600">
                                 Kritipur, Kathmandu, Nepal
                                 <br />
                                 House of Information Science and Technology
                              </p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="hist-shadow">
                     <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-sapphire-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Phone className="w-6 h-6 text-sapphire-600" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Phone & Email</h4>
                              <p className="text-gray-600">
                                 9860134076
                                 <br />
                                 info@hist.com.np
                                 <br />
                                 support@hist.com.np
                              </p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="hist-shadow">
                     <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-sapphire-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Calendar className="w-6 h-6 text-sapphire-600" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                              <p className="text-gray-600">
                                 Monday - Friday: 9:00 AM - 6:00 PM
                                 <br />
                                 Saturday - Sunday: Closed
                              </p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Map */}
                  <Card className="hist-shadow">
                     <CardContent className="p-0">
                        <div className="w-full h-64 bg-gray-200 rounded-lg">
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.620455514744!2d85.29522101515567!3d27.68474168281173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a3e6c2e5c1%3A0x83e3d6f7c42f1a33!2sHouse%20of%20Information%20Science%20and%20Technology!5e0!3m2!1sen!2snp!4v1633434444367!5m2!1sen!2snp"
                              className="w-full h-full"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                           ></iframe>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;