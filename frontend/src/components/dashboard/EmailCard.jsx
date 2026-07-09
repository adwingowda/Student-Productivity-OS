function EmailCard({ email }) {
  return (
    <div className="cursor-pointer border-b border-[#1F2B44] p-5 transition hover:bg-[#111E35]">

      <div className="flex items-center justify-between">

        <h3 className="max-w-[220px] truncate font-semibold text-white">
          {email.subject || "(No Subject)"}
        </h3>

        <span className="text-xs text-gray-500">
          {email.date}
        </span>

      </div>

      <p className="mt-2 text-sm font-medium text-[#B8C8FF]">
        {email.from}
      </p>

      <p className="mt-2 line-clamp-2 text-sm text-gray-400">
        {email.snippet}
      </p>

    </div>
  );
}

export default EmailCard;