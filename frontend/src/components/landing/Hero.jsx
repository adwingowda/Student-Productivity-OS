
import { Sparkles, CheckCircle2, BookOpen } from "lucide-react";
import heroImage from "../../assets/images/hero-ai.png";

function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-60px)] w-full max-w-[1440px] items-center px-10">
      
      {/* Left */}
      <div className="w-full lg:w-1/2">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2A3A55] bg-[#0F1B30] px-4 py-2">

          <Sparkles
            size={14}
            className="text-emerald-400"
          />

          <span className="text-xs font-semibold tracking-wide text-emerald-400">
            GEN-AI PRODUCTIVITY HUB
          </span>

        </div>

        {/* Heading */}

        <h1 className="max-w-xl text-6xl font-bold leading-tight tracking-tight">

          The OS for

          <br />

          <span className="bg-gradient-to-r from-[#B8C8FF] via-white to-[#74F0C3] bg-clip-text text-transparent">
            High-Achieving
          </span>

          {" "}Students

        </h1>

        {/* Subtitle */}

        <p className="mt-8 max-w-xl text-xl leading-8 text-gray-400">

          Master your emails, deadlines and career with an AI-first
          productivity system designed for modern students.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

        <button
  onClick={() => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  }}
  className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-100"
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="h-5 w-5"
  />

  Continue with Google
</button>

          <button className="rounded-xl border border-[#2A3A55] px-8 py-4 font-semibold text-white transition hover:bg-[#111E35]">
            View Demo
          </button>

        </div>

        {/* Users */}

        <div className="mt-10 flex items-center gap-4">

          <div className="flex -space-x-3">

            <div className="h-10 w-10 rounded-full border-2 border-[#08111F] bg-slate-500"></div>

            <div className="h-10 w-10 rounded-full border-2 border-[#08111F] bg-slate-400"></div>

            <div className="h-10 w-10 rounded-full border-2 border-[#08111F] bg-slate-300"></div>

          </div>

          <p className="text-sm text-gray-400">
            Joined by <span className="font-semibold text-white">12,000+</span> elite students
          </p>

        </div>

      </div>

      {/* Right Side Placeholder */}

      {/* Right Side */}
<div className="relative hidden lg:flex lg:w-1/2 justify-center">

  {/* Main Image Container */}
  <div className="relative h-[540px] w-[520px] overflow-hidden rounded-3xl border border-[#2A3A55] bg-[#111A31]">

    <img
      src={heroImage}
      alt="AI Productivity"
      className="h-full w-full object-cover"
    />

  </div>

  {/* Exam Prep Card */}
  <div className="absolute right-0 top-10 rounded-2xl border border-[#2A3A55] bg-[#0F172A]/90 p-4 backdrop-blur-xl shadow-2xl">

    <div className="flex items-center gap-2 text-xs text-gray-400">

      <BookOpen size={14} className="text-blue-400" />

      <span>Exam Prep</span>

    </div>

    <p className="mt-2 max-w-[170px] text-sm leading-6 text-white">
      AI Study Guide generated for Computer Science
    </p>

  </div>

  {/* Inbox Zero Card */}
  <div className="absolute bottom-8 left-0 rounded-2xl border border-[#2A3A55] bg-[#0F172A]/90 p-4 backdrop-blur-xl shadow-2xl">

    <div className="flex items-center gap-2 text-xs text-emerald-400">

      <CheckCircle2 size={14} />

      <span>Inbox Zero</span>

    </div>

    <p className="mt-2 text-sm text-gray-300">
      14 tasks automated today
    </p>

  </div>

</div>

    </section>
  );
}

export default Hero;