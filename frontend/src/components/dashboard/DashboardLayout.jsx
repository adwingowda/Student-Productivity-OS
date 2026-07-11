import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import EmailList from "./EmailList";
import AnalysisPanel from "./AnalysisPanel";

function DashboardLayout({
  emails,
  selectedEmail,
  setSelectedEmail,
}) {
  return (
    <div className="flex h-screen bg-[#08111F] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Topbar />

        <div className="flex flex-1 overflow-hidden">

          <div className="w-[380px] border-r border-[#1F2B44]">

            <EmailList
              emails={emails}
              selectedEmail={selectedEmail}
              setSelectedEmail={setSelectedEmail}
            />

          </div>

          <div className="flex-1">

            <AnalysisPanel
              email={selectedEmail}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;