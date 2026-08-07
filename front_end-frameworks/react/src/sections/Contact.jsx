import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  FolderInput,
  Users,
  WandSparkles,
  UserRound,
  AtSign,
  Mail,
} from "lucide-react";

function Contact() {
  const initialForm = {
    fullName: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(
    "Please fill all required fields."
  );

  const isNameValid = formData.fullName.trim().length >= 2;

  const isEmailValid =
    formData.email.includes("@") && formData.email.includes(".");

  const isMessageValid = formData.message.trim().length >= 10;

  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isMessageValid;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function getFieldClass(isValid, value) {
    const baseClass =
      "w-full rounded-md border bg-black px-4 py-3 text-sm text-slate-50 placeholder:text-slate-600 outline-none transition";

    if (value.length === 0) {
      return `${baseClass} border-slate-800 focus:border-red-500`;
    }

    if (isValid) {
      return `${baseClass} border-slate-800 focus:border-violet-500`;
    }

    return `${baseClass} border-slate-800 focus:border-red-500`;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid || isSending) {
      return;
    }

    setIsSending(true);
    setFeedback("Sending message...");

    await new Promise((resolve) => {
      setTimeout(resolve, 1200);
    });

    setFormData(initialForm);
    setIsSending(false);
    setFeedback("Message sent successfully!");

    setTimeout(() => {
      setFeedback("Please fill all required fields.");
    }, 3000);
  }

  return (
    <section
      id="contact-section"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-200">
          <Sparkles className="h-3 w-3" />

          <span>Start your AI journey</span>

          <Sparkles className="h-3 w-3" />
        </div>

        <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Ready to Explore
          <span className="block text-violet-300">
            Agentic AI?
          </span>
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.holbertonschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-violet-500/30 transition hover:bg-violet-600"
          >
            Enroll at Holberton School
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#about-section"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white"
          >
            Need more information?
          </a>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 text-slate-500 md:flex-row md:justify-center md:gap-10">
          <div className="flex items-center gap-3">
            <FolderInput className="h-4 w-4 shrink-0 text-violet-500" />
            <p className="whitespace-nowrap text-sm">
              Project-based learning
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Users className="h-4 w-4 shrink-0 text-violet-500" />
            <p className="whitespace-nowrap text-sm">
              Peer learning environment
            </p>
          </div>

          <div className="flex items-center gap-3">
            <WandSparkles className="h-4 w-4 shrink-0 text-violet-500" />
            <p className="whitespace-nowrap text-sm">
              AI-powered workflows
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="mx-auto mt-16 max-w-2xl rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-left shadow-xl shadow-black/30 sm:p-8"
        >
          <div>
            <label
              htmlFor="fullName"
              className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200"
            >
              <UserRound className="h-4 w-4 text-violet-500" />
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Your full name..."
              className={getFieldClass(
                isNameValid,
                formData.fullName
              )}
            />
          </div>

          <div className="mt-8">
            <label
              htmlFor="email"
              className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200"
            >
              <AtSign className="h-4 w-4 text-violet-500" />
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="you@example.com"
              className={getFieldClass(
                isEmailValid,
                formData.email
              )}
            />
          </div>

          <div className="mt-8">
            <label
              htmlFor="message"
              className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200"
            >
              <Mail className="h-4 w-4 text-violet-500" />
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Tell us about your project or learning goals!"
              className={`${getFieldClass(
                isMessageValid,
                formData.message
              )} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSending}
            className="mt-8 w-full rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {isSending ? "Sending..." : "Send message"}
          </button>

          <p
            className={`mt-6 text-center text-sm ${
              feedback === "Message sent successfully!"
                ? "text-green-400"
                : feedback === "Sending message..."
                  ? "text-violet-300"
                  : "text-slate-500"
            }`}
          >
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;