function DashboardStats({ emails }) {

  const total = emails.length;

  const placements =
    emails.filter(e => e.analysis?.category === "Placement").length;

  const actions =
    emails.filter(e => e.analysis?.requiresAction).length;

  const deadlines =
    emails.filter(e => e.analysis?.deadline !== "None").length;

  const stats = [
    {
      title: "Emails",
      value: total,
      icon: "📨",
    },
    {
      title: "Placements",
      value: placements,
      icon: "💼",
    },
    {
      title: "Actions",
      value: actions,
      icon: "⚡",
    },
    {
      title: "Deadlines",
      value: deadlines,
      icon: "📅",
    },
  ];

  return (

    <div className="grid grid-cols-2 gap-3 p-4">

      {stats.map((item) => (

        <div
          key={item.title}
          className="rounded-xl border border-[#1F2B44] bg-[#111E35] p-4"
        >

          <div className="text-2xl">
            {item.icon}
          </div>

          <h2 className="mt-2 text-2xl font-bold text-white">
            {item.value}
          </h2>

          <p className="text-sm text-gray-400">
            {item.title}
          </p>

        </div>

      ))}

    </div>

  );

}

export default DashboardStats;