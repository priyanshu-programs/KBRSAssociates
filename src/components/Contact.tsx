"use client";
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

/**
 * Render the Contact section with contact details and a message form.
 *
 * Renders a two-column contact area: left column with actionable contact methods (email, phone, address)
 * and right column with a styled contact form (name, email, message, privacy checkbox, submit button).
 * The form is static and does not include a submission handler.
 *
 * @returns A JSX element representing the complete contact section with contact actions and a non-functional contact form.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-brand-dark text-brand-lightest relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold uppercase text-brand-lightest tracking-tight">
                Contact Us
              </h2>
              <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
            </div>

            <p className="text-[clamp(14px,1.5vw,1.25rem)] text-brand-lightest/80 font-medium tracking-wide mb-12 max-w-md">
              Let's make an <span className="text-brand-accent font-bold">action plan</span>. Don't like the forms? Drop us a line via email or give us a call.
            </p>

            <div className="space-y-8">
              <a href="mailto:cakomalbajaj@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-lightest/10 rounded-full flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-lightest transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-brand-lightest/50 mb-1">Email us</p>
                  <p className="text-lg font-medium text-brand-lightest group-hover:text-brand-accent transition-colors">
                    cakomalbajaj@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+919876543210" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-lightest/10 rounded-full flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-lightest transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-brand-lightest/50 mb-1">Call us</p>
                  <p className="text-lg font-medium text-brand-lightest group-hover:text-brand-accent transition-colors">
                    +91-9876543210
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lightest/10 rounded-full flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-brand-lightest/50 mb-1">Visit us</p>
                  <p className="text-lg font-medium text-brand-lightest leading-relaxed max-w-xs">
                    123 Business Avenue, Suite 405,
                    Connaught Place, New Delhi 110001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-lightest rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl -z-10"></div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark/70 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark/70 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-5 h-5 rounded border-brand-dark/20 text-brand-accent focus:ring-brand-accent/50"
                />
                <label htmlFor="privacy" className="text-sm text-brand-dark/60">
                  I agree with the <a href="#" className="text-brand-accent hover-underline-animation">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-dark text-brand-lightest rounded-xl px-8 py-4 font-medium hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

