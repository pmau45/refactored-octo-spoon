import { ShieldCheck, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#030304] py-16 border-t border-[#1A2030]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#7A8B66] w-6 h-6" aria-hidden="true" />
          <span className="font-oswald text-xl font-bold tracking-widest text-[#C5C6C7] uppercase">
            Axiom Canine
          </span>
        </div>

        {/* Contact & Service Area */}
        <address className="text-center md:text-right not-italic">
          <p className="text-[#C5C6C7] text-sm uppercase tracking-widest font-bold mb-2">
            Serving Jacksonville · Ponte Vedra · Nocatee · St. Augustine · Nassau County
          </p>
          <a
            href="tel:9044587561"
            className="flex items-center gap-2 text-[#C5C6C7] hover:text-[#FF5E00] transition-colors text-sm uppercase tracking-widest font-bold justify-center md:justify-end mt-2"
            aria-label="Call Axiom Canine at (904) 458-7561"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            (904) 458-7561
          </a>
          <p className="text-[#C5C6C7]/50 text-xs tracking-wider mt-2">
            Clear communication. Mutual respect.
          </p>
        </address>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center border-t border-[#1A2030] pt-8">
        <p className="text-[#C5C6C7]/30 text-xs tracking-widest uppercase">
          &copy; {currentYear} Axiom Canine. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
