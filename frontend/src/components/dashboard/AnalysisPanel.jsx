function AnalysisPanel({ email }) {

  if (!email) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#08111F] px-8 text-center">

      <div className="mb-6 text-6xl">
        🤖
      </div>

      <h2 className="text-3xl font-bold text-white">
        AI Assistant
      </h2>

      <p className="mt-4 max-w-md text-gray-400 leading-7">
        Select an email from your inbox to view its AI-powered summary,
        priority, deadline and suggested action.
      </p>

    </div>
  );
}

  const analysis = email.analysis || {
    
    

    category: "Promotion",
    priority: "Low",
    deadline: "None",
    action: "None",
    summary: "No AI summary available."
  };

  const insights = {
  Placement:
    "🚀 Register as soon as possible to avoid missing this opportunity.",

  Internship:
    "💼 Check the eligibility and apply before the deadline.",

  College:
    "🎓 Review this announcement carefully for important updates.",

  Assignment:
    "📝 Complete this assignment before the due date.",

  Exam:
    "📚 Start preparing early and add the exam to your calendar.",

  Result:
    "📊 Review your result and download a copy if required.",

  Scholarship:
    "🎯 Check eligibility and submit your application on time.",

  Event:
    "📅 Add this event to your calendar if you plan to attend.",

  Promotion:
    "📩 Promotional email. You can safely read it later.",

  Spam:
    "🚫 This appears to be spam. No action is required.",

  Personal:
    "👤 Personal email. Read it whenever convenient.",

  Other:
    "ℹ️ Review this email to determine whether any action is needed.",
};

const insight =
  insights[analysis.category] ||
  "Review this email carefully.";



  return (
    <div className="h-full overflow-y-auto bg-[#08111F] p-8">

      <h1 className="text-3xl font-bold text-white">
        {email.subject}
      </h1>

      <p className="mt-2 text-[#9AB4E6]">
        {email.from}
      </p>


    <div className="mt-8">

  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

    <div className="rounded-xl bg-[#111E35] p-4">
      <p className="text-xs uppercase tracking-wider text-gray-400">
        🏷 Category
      </p>
      <p className="mt-2 font-semibold text-white">
        {analysis.category}
      </p>
    </div>

    <div className="rounded-xl bg-[#111E35] p-4">
      <p className="text-xs uppercase tracking-wider text-gray-400">
        🔥 Priority
      </p>
      <p className="mt-2 font-semibold text-white">
        {analysis.priority}
      </p>
    </div>

    <div className="rounded-xl bg-[#111E35] p-4">
      <p className="text-xs uppercase tracking-wider text-gray-400">
        ⚡ Action
      </p>
      <p className="mt-2 font-semibold text-white">
        {analysis.action}
      </p>
    </div>

    <div className="rounded-xl bg-[#111E35] p-4">
      <p className="text-xs uppercase tracking-wider text-gray-400">
        📅 Deadline
      </p>
      <p className="mt-2 font-semibold text-white">
        {analysis.deadline}
      </p>
    </div>

  </div>

  <div className="mt-8 border-t border-[#1F2B44] pt-6">

    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
      📝 AI Summary
    </h3>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
      {analysis.summary}
    </p>

    <div className="mt-8 border-t border-[#1F2B44] pt-6">

  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
    🤖 AI Insight
  </h3>

  <p className="mt-4 rounded-lg bg-[#111E35] p-4 text-base leading-7 text-[#B8C8FF]">
    {insight}
  </p>

</div>

  </div>

</div>

    </div>
  );
}

export default AnalysisPanel;