import { Search, Bell, UserCircle } from "lucide-react";

function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#1F2B44] bg-[#0B1526] px-6">

      {/* Search */}

      <div className="flex w-[420px] items-center gap-3 rounded-xl border border-[#1F2B44] bg-[#111E35] px-4 py-3">

        <Search
          size={18}
          className="text-gray-500"
        />

        <input
          type="text"
          placeholder="Search emails..."
          className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        <button className="relative rounded-xl bg-[#111E35] p-3 transition hover:bg-[#16243D]">

          <Bell
            size={20}
            className="text-gray-300"
          />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            size={36}
            className="text-[#B8C8FF]"
          />

          <div>

            <p className="font-semibold text-white">
              Bhuvan
            </p>

            <p className="text-xs text-gray-400">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;