import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Calendar, Navigation, ExternalLink } from "lucide-react";

// Google Maps links for the office. To change the pin, copy a new embed link from
// Google Maps → Share → Embed a map, and paste its src below.
const MAP_EMBED_URL =
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.620455514744!2d85.29522101515567!3d27.68474168281173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a3e6c2e5c1%3A0x83e3d6f7c42f1a33!2sHouse%20of%20Information%20Science%20and%20Technology!5e0!3m2!1sen!2snp!4v1633434444367!5m2!1sen!2snp";
const MAP_QUERY = encodeURIComponent("House of Information Science and Technology, Kirtipur, Kathmandu");
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
const MAP_PLACE_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

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
      <section id="contact" className="py-20 bg-gradient-to-br from-hist-blue-50 to-white">
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

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
               {/* Left: form card — stretches to the same height as the right column */}
               <Card className="hist-shadow animate-fade-in h-full">
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                     <h3 className="text-2xl font-semibold text-gray-900 mb-5">Send us a Message</h3>

                     <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
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
                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hist-blue-500 focus:border-transparent transition-colors"
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
                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hist-blue-500 focus:border-transparent transition-colors"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hist-blue-500 focus:border-transparent transition-colors"
                              required
                           />
                        </div>

                        {/* Message grows/shrinks to fill the leftover space so the button lines up with the right column */}
                        <div className="flex-1 flex flex-col">
                           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                              Message
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={3}
                              className="flex-1 w-full min-h-[96px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hist-blue-500 focus:border-transparent transition-colors resize-none"
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

               {/* Right: contact info — the three cards share the column height equally */}
               <div className="flex flex-col gap-6 h-full animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  {/* Office Location */}
                  <Card className="hist-shadow flex-1 flex flex-col justify-center">
                     <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-hist-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-6 h-6 text-hist-blue-600" />
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
                  <Card className="hist-shadow flex-1 flex flex-col justify-center">
                     <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-hist-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Phone className="w-6 h-6 text-hist-blue-600" />
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
                  <Card className="hist-shadow flex-1 flex flex-col justify-center">
                     <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-hist-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Calendar className="w-6 h-6 text-hist-blue-600" />
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
               </div>
            </div>

            {/* Map — full-width band */}
            <div className="relative mt-12 rounded-3xl overflow-hidden border border-gray-200 shadow-[0_20px_40px_-24px_rgba(80,105,177,0.45)] bg-white animate-fade-in">
               <div className="relative h-[320px] md:h-[440px] bg-gray-100">
                  <iframe
                     title="HIST office location on Google Maps"
                     src={MAP_EMBED_URL}
                     className="absolute inset-0 w-full h-full"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>

               {/* Address card: sits over the map on tablet/desktop, below it on phones */}
               <div className="p-5 bg-white sm:absolute sm:left-6 sm:top-6 sm:max-w-sm sm:bg-white/95 sm:backdrop-blur sm:rounded-2xl sm:shadow-xl">
                  <p className="text-xs font-bold tracking-[0.15em] text-hist-blue-600 mb-1">FIND US</p>
                  <h4 className="text-lg font-semibold text-gray-900 leading-snug">
                     House of Information Science and Technology
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">Kritipur, Kathmandu, Nepal</p>
                  <div className="flex flex-wrap gap-2">
                     <a
                        href={MAP_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-hist-blue hover:bg-hist-blue-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                     >
                        <Navigation className="w-4 h-4" />
                        Get directions
                     </a>
                     <a
                        href={MAP_PLACE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-hist-blue-200 text-hist-blue-dark hover:bg-hist-blue-50 text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                     >
                        <ExternalLink className="w-4 h-4" />
                        Open in Google Maps
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;