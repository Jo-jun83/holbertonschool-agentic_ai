<script>
  import {
    Sparkles,
    ArrowRight,
    FolderInput,
    Users,
    WandSparkles,
    UserRound,
    AtSign,
    Mail
  } from "lucide-svelte"

  import SectionBadge from "../ui/SectionBadge.svelte"
  import Button from "../ui/Button.svelte"

  function createInitialForm() {
    return {
      fullName: "",
      email: "",
      message: ""
    }
  }

  let formData = $state(createInitialForm())
  let isSending = $state(false)
  let feedback = $state("Please fill all required fields.")

  let isNameValid = $derived(
    formData.fullName.trim().length >= 2
  )

  let isEmailValid = $derived(
    formData.email.includes("@") &&
    formData.email.includes(".")
  )

  let isMessageValid = $derived(
    formData.message.trim().length >= 10
  )

  let isFormValid = $derived(
    isNameValid &&
    isEmailValid &&
    isMessageValid
  )

  /**
   * @param {boolean} isValid
   * @param {string | any[]} value
   */
  function getFieldClass(isValid, value) {
    const baseClass =
      "w-full rounded-md border border-slate-800 bg-black px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 outline-none transition"

    if (value.length === 0) {
      return `${baseClass} border-slate-800 focus:border-red-500`
    }

    if (isValid) {
      return `${baseClass} border-slate-800 focus:border-violet-500`
    }

    return `${baseClass} border-slate-800 focus:border-red-500`
  }

  /**
   * @param {{ preventDefault: () => void; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault()

    if (!isFormValid || isSending) {
      return
    }

    isSending = true
    feedback = "Sending message..."

    await new Promise((resolve) => {
      setTimeout(resolve, 1200)
    })

    formData = createInitialForm()
    isSending = false
    feedback = "Message sent successfully!"

    setTimeout(() => {
      feedback = "Please fill all required fields."
    }, 3000)
  }
</script>

<section
  id="contact-section"
  class="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
>
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_35%)]"
  ></div>

  <div class="relative mx-auto max-w-6xl text-center">
    <SectionBadge>
      <Sparkles class="h-3 w-3" />
      <span>Start your AI journey</span>
      <Sparkles class="h-3 w-3" />
    </SectionBadge>

    <h2
      class="mx-auto mt-8 max-w-3xl text-4xl leading-none font-black tracking-tight md:text-5xl lg:text-6xl"
    >
      Ready to Explore
      <span class="block text-violet-300">
        Agentic AI?
      </span>
    </h2>

    <div
      class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <Button
        href="https://www.holbertonschool.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enroll at Holberton School
        <ArrowRight class="h-4 w-4" />
      </Button>

      <Button
        href="#about-section"
        variant="secondary"
      >
        Need more information?
      </Button>
    </div>

    <div
      class="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 text-slate-500 md:flex-row md:justify-center md:gap-10"
    >
      <div class="flex items-center gap-3">
        <FolderInput class="h-4 w-4 shrink-0 text-violet-500" />
        <p class="text-sm whitespace-nowrap">
          Project-based learning
        </p>
      </div>

      <div class="flex items-center gap-3">
        <Users class="h-4 w-4 shrink-0 text-violet-500" />

        <p class="text-sm whitespace-nowrap">
          Peer learning environment
        </p>
      </div>

      <div class="flex items-center gap-3">
        <WandSparkles class="h-4 w-4 shrink-0 text-violet-500" />

        <p class="text-sm whitespace-nowrap">
          AI-powered workflows
        </p>
      </div>
    </div>

    <form
      onsubmit={handleSubmit}
      autocomplete="off"
      class="mx-auto mt-16 max-w-2xl rounded-3xl border border-slate-800 bg-slate-950 p-8 text-left shadow-xl shadow-slate-950/40"
    >
      <div>
        <label
          for="fullName"
          class="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200"
        >
          <UserRound class="h-4 w-4 text-violet-500" />
          Full name
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          bind:value={formData.fullName}
          autocomplete="off"
          placeholder="Your full name..."
          class={getFieldClass(isNameValid, formData.fullName)}
        />
      </div>

      <div class="mt-8">
        <label
          for="email"
          class="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200"
        >
          <AtSign class="h-4 w-4 text-violet-500" />
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          bind:value={formData.email}
          autocomplete="off"
          placeholder="you@example.com"
          class={getFieldClass(isEmailValid, formData.email)}
        />
      </div>

      <div class="mt-8">
        <label
          for="message"
          class="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200"
        >
          <Mail class="h-4 w-4 text-violet-500" />
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows="6"
          bind:value={formData.message}
          autocomplete="off"
          placeholder="Tell us about your project or learning goals!"
          class={`${getFieldClass(
            isMessageValid,
            formData.message
          )} resize-none`}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={!isFormValid || isSending}
        class="mt-8 w-full cursor-pointer rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSending ? "Sending..." : "Send message"}
      </button>

      <p
        class={`mt-6 text-center text-sm ${
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