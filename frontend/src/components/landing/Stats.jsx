const stats = [
  {
    value: "98%",
    label: "TIME SAVED",
    color: "text-white",
  },
  {
    value: "4.9/5",
    label: "STUDENT RATING",
    color: "text-[#6EE7B7]",
  },
  {
    value: "1M+",
    label: "TASKS MANAGED",
    color: "text-[#D8B4FE]",
  },
  {
    value: "120+",
    label: "INTEGRATIONS",
    color: "text-[#B8C8FF]",
  },
];

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-10">
      <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <h2 className={`text-5xl font-bold ${item.color}`}>
              {item.value}
            </h2>

            <p className="mt-3 text-xs font-semibold tracking-[0.25em] text-gray-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;