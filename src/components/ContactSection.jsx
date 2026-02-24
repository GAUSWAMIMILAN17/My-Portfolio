import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phonenumber: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    setIsSubmitting(true);
    console.log("SENDING DATA:", formData);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          phonenumber: formData.phonenumber,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // console.log("SUCCESS:", res);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        // ✅ FORM CLEAR
        setFormData({
          name: "",
          email: "",
          message: "",
          phonenumber: "",
        });

        // setIsSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
      })
      .finally(() => {
        // console.log("FINALLY CALLED");
        setIsSubmitting(false); // ✅ ALWAYS reset
      });
  };

  return (
    <section id="contact" className="pt-18 pb-10 px-5 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gauswamimilan17@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:9664709383"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 96647 09383
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Gandhinagar, Gujarat
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://linkedin.com/in/milangauswami17"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/GAUSWAMIMILAN17" target="_blank">
                  <Github />
                </a>
                {/* <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a> */}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card to-card/95 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-primary/10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              {/* Grouped Name and Email in row on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-background/60 border border-input/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-background/60 border border-input/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-background/60 border border-input/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  placeholder="10 digit number"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-background/60 border border-input/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
