export default function GoogleButton() {

    const handleLogin = () => {
        window.location.href =
            "http://localhost:8080/oauth2/authorization/google";
    };

    return (
        <button
            onClick={handleLogin}
            className="w-full bg-white text-gray-800 font-semibold py-4 rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg flex items-center justify-center gap-3"
        >
            <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6"
            />

            Continue with Google
        </button>
    );
}