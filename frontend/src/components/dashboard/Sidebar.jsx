import {
  Inbox,
  Star,
  CheckSquare,
  Bot,
  BarChart3,
  Settings,
  LogOut,
  SquareTerminal,
} from "lucide-react";

const menuItems = [
  { icon: Inbox, label: "Inbox", active: true },
  { icon: Star, label: "Important" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: Bot, label: "AI Assistant" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-[#1F2B44] bg-[#0B1526]">

      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-[#1F2B44] px-6 py-5">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#111E35]">
          <SquareTerminal className="text-[#B8C8FF]" size={20} />
        </div>

        <div>
          <h1 className="text-lg font-bold text-white">StudyOS</h1>
          <p className="text-xs text-gray-400">AI Productivity</p>
        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                item.active
                  ? "bg-[#16243D] text-white"
                  : "text-gray-400 hover:bg-[#111E35] hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}

      </nav>

      {/* Bottom */}
      <div className="border-t border-[#1F2B44] p-4">

        <div className="mb-4">
          <p className="font-semibold text-white">Bhuvan</p>
          <p className="text-sm text-gray-400">
            Student
          </p>
        </div>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-400 transition hover:bg-[#111E35] hover:text-white">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;