import EmailCard from "./EmailCard";

function EmailList({ emails }) {
  return (
    <div className="h-full overflow-y-auto">

      <div className="sticky top-0 z-10 border-b border-[#1F2B44] bg-[#0B1526] px-5 py-4">

        <h2 className="text-xl font-bold text-white">
          Inbox
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          {emails.length} Emails
        </p>

      </div>

      <div>
        {emails.map((email) => (
          <EmailCard
            key={email.id}
            email={email}
          />
        ))}
      </div>

    </div>
  );
}

export default EmailList;