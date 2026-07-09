import { useEffect, useState } from "react";
import { getEmails } from "../services/EmailService";
import DashboardLayout from "../components/dashboard/DashboardLayout";

function Dashboard() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const data = await getEmails();
        setEmails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#08111F] text-white">
        Loading Emails...
      </div>
    );
  }

  return <DashboardLayout emails={emails} />;
}

export default Dashboard;