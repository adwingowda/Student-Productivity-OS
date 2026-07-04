import GoogleButton from "./GoogleButton";

function Login() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">

            <div className="bg-slate-900 p-12 rounded-3xl shadow-2xl text-center max-w-xl w-full border border-slate-800">

                <h1 className="text-5xl font-extrabold text-white">
                     Student Productivity <span className="text-blue-500">OS</span>
                </h1>

                <p className="text-slate-400 mt-5 text-lg">
                    AI Powered Email Productivity Platform
                </p>

                <p className="text-slate-500 mt-3">
                    Organize • Prioritize • Never Miss Deadlines
                </p>

                <div className="mt-10">
                    <GoogleButton />
                </div>

            </div>

        </div>
    );
}

export default Login;