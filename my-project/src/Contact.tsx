import { useState, type ChangeEvent } from 'react';
import { Mail, MapPin, PhoneCall, UserRound, MessageSquare } from 'lucide-react';
import React from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "2349164288560";
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill all fields before sending ✅");
      return;
    }

    const fullMessage = `Hello Dali-Wears! 👋

You have a new message from your website:

Name: ${name}
Email: ${email}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <div className="mt-24 px-6 sm:mt-28 md:mt-32 lg:mt-36 lg:px-20 mb-20">
        <div className="text-base sm:text-lg font-semibold">
          Hi <span className="inline-block animate-wave origin-bottom-left">✋</span>
        </div>
        <p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-[#00DA6B]">
            Let’s talk fashion, art & frames 💚
        </p>
        <p className="text-sm sm:text-base lg:text-lg mt-2 font-semibold text-white">
          Got a question about our outfits or Pinterest frames? I’d love to hear from you — <br />whether it’s an order, a custom request, or just feedback. <br />
          Send a message, and I’ll get back to you soon!
        </p>

        <div className="flex flex-col gap-8 mt-16 lg:flex-row lg:justify-between lg:mt-24 font-semibold text-black dark:text-white">
          {/* Contact Info */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-[#00DA6B] sm:w-6 sm:h-6 lg:w-6 lg:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base lg:text-base">faithlawrence161@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-[#00DA6B] sm:w-6 sm:h-6 lg:w-6 lg:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base lg:text-base">Nigeria</p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall size={20} className="text-[#00DA6B] sm:w-6 sm:h-6 lg:w-6 lg:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base lg:text-base">+234 (0)916 428 8560</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSend}>
              {/* Name Input */}
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  placeholder="Name" 
                  onChange={handleChange}
                  className="bg-[#001218] p-3 pr-12 rounded-2xl border  border-[#00D471] w-full text-sm sm:text-base sm:p-4 sm:pr-14 focus:outline-none focus:ring-2 focus:[#00D471]"
                />
                <UserRound className="absolute right-4 top-1/2 -translate-y-1/2  dark:text-[#00D471] w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  placeholder="Email" 
                  onChange={handleChange}
                  className="bg-[#001218] p-3 pr-12 rounded-2xl border border-[#00D471] w-full text-sm sm:text-base sm:p-4 sm:pr-14 focus:outline-none focus:ring-2 focus:[#00D471]"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 dark:text-[#00D471] w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange} 
                  rows={6}
                  className="bg-[#001218] p-3 pr-12 rounded-2xl border border-[#00D471] w-full text-sm sm:text-base sm:p-4 sm:pr-14 resize-none focus:outline-none focus:ring-2 focus:[#00D471] sm:rows-8 lg:rows-8"
                />
                <MessageSquare className="absolute right-4 top-4 text-[#00D471] w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#00D471] hover:bg-[#1d9948] text-white font-semibold p-3 rounded-2xl transition-all duration-300 text-sm sm:text-base sm:p-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;



