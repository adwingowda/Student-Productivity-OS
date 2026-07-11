import {
  Inbox,
  Briefcase,
  GraduationCap,
  FileText,
  BarChart3,
  ShieldAlert,
  Settings,
} from "lucide-react";

function Sidebar() {
  const items = [
    { icon: Inbox, label: "Inbox" },
    { icon: Briefcase, label: "Placements" },
    { icon: GraduationCap, label: "College" },
    { icon: FileText, label: "Assignments" },
    { icon: BarChart3, label: "Results" },
    { icon: ShieldAlert, label: "Spam" },
  ];

  return (
    <aside className="flex w-64 flex-col border-r border-[#1F2B44] bg-[#0B1526]">

      <div className="border-b border-[#1F2B44] p-6">

        <h1 className="text-2xl font-bold text-white">
          StudyOS
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          AI Student Assistant
        </p>

      </div>

      <nav className="flex-1 p-4">

        {items.map(({ icon: Icon, label }) => (

          <button
            key={label}
            className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all
              ${
                label === "Inbox"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-[#111E35] hover:text-white"
              }`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>

        ))}

      </nav>

      <div className="border-t border-[#1F2B44] p-4">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-400 transition hover:bg-[#111E35] hover:text-white">
          <Settings size={20} />
          <span>Settings</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;