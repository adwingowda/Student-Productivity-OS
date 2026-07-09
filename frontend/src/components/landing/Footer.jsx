import { Globe, Mail, SquareTerminal } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-24 border-t border-[#1F2B44] bg-[#08111F]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-8 py-10 md:flex-row">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2A3A55] bg-[#0F1B30]">
            <SquareTerminal
              size={18}
              className="text-[#B8C8FF]"
            />
          </div>

          <h2 className="text-2xl font-bold text-white">
            StudyOS
          </h2>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>

          <a href="#" className="transition hover:text-white">
            Terms
          </a>

          <a href="#" className="transition hover:text-white">
            Documentation
          </a>

          <a href="#" className="transition hover:text-white">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2A3A55] bg-[#0F1B30] transition hover:border-[#4B6CB7]"
          >
            <Globe
              size={18}
              className="text-gray-300"
            />
          </a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2A3A55] bg-[#0F1B30] transition hover:border-[#4B6CB7]"
          >
            <Mail
              size={18}
              className="text-gray-300"
            />
          </a>

        </div>
      </div>

      <div className="border-t border-[#1F2B44] py-6">
        <p className="text-center text-sm text-gray-500">
          © 2026 StudyOS. Built for the next generation of students.
        </p>
      </div>
    </footer>
  );
}

export default Footer;