import {
  Search,
  CalendarDays,
  Mail,
  Command,
} from "lucide-react";

function CommandCenter() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      <div className="mx-auto max-w-4xl">

        {/* Command Card */}

        <div className="rounded-3xl border border-[#24314A] bg-[#0D1627] p-6 shadow-[0_0_60px_rgba(20,35,70,0.25)]">

          {/* Search */}

          <div className="flex items-center justify-between rounded-2xl border border-[#1F2B44] bg-[#08111F] px-5 py-4">

            <div className="flex items-center gap-3">

              <Search
                size={18}
                className="text-gray-500"
              />

              <span className="text-gray-500">
                Apply to Summer Internships...
              </span>

            </div>

            <div className="flex items-center gap-2">

              <div className="rounded-md border border-[#2A3A55] bg-[#111A31] px-2 py-1 text-xs text-gray-400">
                ⌘
              </div>

              <div className="rounded-md border border-[#2A3A55] bg-[#111A31] px-2 py-1 text-xs text-gray-400">
                K
              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="my-6 h-px bg-[#1D2941]" />

          {/* Tasks */}

          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <CalendarDays
                size={17}
                className="text-[#B8C8FF]"
              />

              <span className="text-gray-300">
                Schedule Study Session: Discrete Math
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Mail
                size={17}
                className="text-[#6EE7B7]"
              />

              <span className="text-gray-300">
                Draft follow-up to Google Recruiter
              </span>

            </div>

          </div>

        </div>

        {/* Caption */}

        <p className="mt-8 text-center text-gray-500">
          The power of a command center, built for students.
        </p>

      </div>

    </section>
  );
}

export default CommandCenter;