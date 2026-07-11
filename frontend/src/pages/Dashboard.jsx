import { useEffect, useState } from "react";
import { getEmails } from "../services/EmailService";
import DashboardLayout from "../components/dashboard/DashboardLayout";

function Dashboard() {

  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Inbox");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchEmails() {

      try {

        const data = await getEmails();

        setEmails(data);

        if (data.length > 0) {
          setSelectedEmail(data[0]);
        }

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    fetchEmails();

  }, []);

  if (loading) {

    return (
      <div className="flex h-screen items-center justify-center bg-[#08111F] text-white">
        Loading Emails...
      </div>
    );

  }
  const filteredEmails =
    selectedCategory === "Inbox"
      ? emails
      : emails.filter(
          email => email.analysis?.category === selectedCategory
        );

  return (
    <DashboardLayout
      emails={filteredEmails}
      selectedEmail={selectedEmail}
      setSelectedEmail={setSelectedEmail}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );

}

export default Dashboard;