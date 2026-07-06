import { useEffect, useState } from "react";
import { getEmails } from "../services/EmailService";

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
        return <h2>Loading Emails...</h2>;
    }

    return (
        <div style={{ padding: "30px" }}>
           <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
    📧 Gmail Inbox
</h1>

            {emails.map((email) => (

                <div
                    key={email.id}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "15px",
                        marginBottom: "20px"
                    }}
                >

                    <h3>{email.subject}</h3>

                    <p>
                        <strong>From:</strong> {email.from}
                    </p>

                    <p>{email.snippet}</p>

                    <small>{email.date}</small>

                </div>

            ))}

        </div>
    );
}

export default Dashboard;