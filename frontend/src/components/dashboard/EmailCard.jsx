function EmailCard({
  email,
  selected,
  onClick,
}) {

  const analysis = email.analysis || {
    category: "Unknown",
    priority: "Low",
    deadline: "—"
  };

  const categoryColor = {
    Placement: "bg-red-500/20 text-red-400",
    Internship: "bg-orange-500/20 text-orange-400",
    College: "bg-blue-500/20 text-blue-400",
    Assignment: "bg-yellow-500/20 text-yellow-400",
    Result: "bg-green-500/20 text-green-400",
    Promotion: "bg-emerald-500/20 text-emerald-400",
    Spam: "bg-gray-500/20 text-gray-300",
    Other: "bg-slate-500/20 text-slate-300",
    Unknown: "bg-slate-500/20 text-slate-300",
  };

  const priorityColor = {
    High: "text-red-400",
    Medium: "text-yellow-400",
    Low: "text-green-400",
  };

  const formattedDate = new Date(email.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border-b border-[#1F2B44] p-5 transition-all duration-200 ${
        selected
          ? "bg-[#162544] border-l-4 border-l-blue-500"
          : "hover:bg-[#111E35]"
      }`}
    >
      <div className="flex items-start justify-between">

        <h3 className="max-w-[220px] truncate font-semibold text-white">
          {email.subject}
        </h3>

        <span className="text-xs text-gray-500">
          {formattedDate}
        </span>

      </div>

      <p className="mt-2 truncate text-sm text-[#B8C8FF]">
        {email.from}
      </p>

      <div className="mt-3 flex items-center gap-2">

        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${
            categoryColor[analysis.category]
          }`}
        >
          {analysis.category}
        </span>

        <span
          className={`text-xs font-semibold ${
            priorityColor[analysis.priority]
          }`}
        >
          {analysis.priority}
        </span>

      </div>

      <p className="mt-3 line-clamp-2 text-sm text-gray-400">
        {email.snippet}
      </p>

    </div>
  );
}

export default EmailCard;