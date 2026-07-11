import axios from "axios";

const EMAIL_API = "http://localhost:8080/api/emails";
const AI_API = "http://localhost:8080/api/ai";

export async function getEmails() {
    const response = await axios.get(EMAIL_API, {
        withCredentials: true,
    });

    return response.data;
}

export async function analyzeEmail(messageId) {
    const response = await axios.get(
        `${AI_API}/analyze/${messageId}`,
        {
            withCredentials: true,
        }
    );

    return response.data;
}