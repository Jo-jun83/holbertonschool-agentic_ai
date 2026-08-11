<script setup>
import { ref, computed } from 'vue'
import {
  ArrowRight,
  Sparkles,
  FolderInput,
  Users,
  WandSparkles,
  UserRound,
  AtSign,
  Mail,
} from '@lucide/vue'

import SectionBadge from '../ui/SectionBadge.vue'
import Button from '../ui/Button.vue'

const initialForm = {
  fullName: '',
  email: '',
  message: '',
}

const formData = ref({ ...initialForm })
const isSending = ref(false)
const feedback = ref('Please fill all required fields.')

const isNameValid = computed(
  () => formData.value.fullName.trim().length >= 2,
)

const isEmailValid = computed(
  () =>
    formData.value.email.includes('@') &&
    formData.value.email.includes('.'),
)

const isMessageValid = computed(
  () => formData.value.message.trim().length >= 10,
)

const isFormValid = computed(
  () =>
    isNameValid.value &&
    isEmailValid.value &&
    isMessageValid.value,
)

function getFieldClass(isValid, value) {
  const baseClass =
    'w-full rounded-md border bg-black px-4 py-3 text-sm text-slate-50 placeholder:text-slate-600 outline-none transition'

  if (value.length === 0) {
    return `${baseClass} border-slate-800 focus:border-red-500`
  }

  if (isValid) {
    return `${baseClass} border-slate-800 focus:border-violet-500`
  }

  return `${baseClass} border-slate-800 focus:border-red-500`
}

async function handleSubmit() {
  if (!isFormValid.value || isSending.value) {
    return
  }

  isSending.value = true
  feedback.value = 'Sending message...'

  await new Promise((resolve) => setTimeout(resolve, 1200))

  formData.value = { ...initialForm }
  isSending.value = false
  feedback.value = 'Message sent successfully!'

  setTimeout(() => {
    feedback.value = 'Please fill all required fields.'
  }, 3000)
}
</script>

<template>
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

          <template #icon>
            <ArrowRight class="h-4 w-4" />
          </template>
        </Button>

        <Button href="#about-section" variant="secondary">
          Need more information?
        </Button>
      </div>

      <div
        class="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 text-slate-500 md:flex-row md:justify-center md:gap-10"
      >
        <div class="flex items-center gap-3">
          <FolderInput class="h-4 w-4 shrink-0 text-violet-500" />
          <p class="whitespace-nowrap text-sm">
            Project-based learning
          </p>
        </div>

        <div class="flex items-center gap-3">
          <Users class="h-4 w-4 shrink-0 text-violet-500" />
          <p class="whitespace-nowrap text-sm">
            Peer learning environment
          </p>
        </div>

        <div class="flex items-center gap-3">
          <WandSparkles class="h-4 w-4 shrink-0 text-violet-500" />
          <p class="whitespace-nowrap text-sm">
            AI-powered workflows
          </p>
        </div>
      </div>

      <form
        autocomplete="off"
        class="mx-auto mt-16 max-w-2xl rounded-3xl border border-slate-800 bg-slate-950 p-8 text-left shadow-xl shadow-slate-950/40"
        @submit.prevent="handleSubmit"
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
            v-model="formData.fullName"
            name="fullName"
            type="text"
            autocomplete="off"
            placeholder="Your full name..."
            :class="getFieldClass(isNameValid, formData.fullName)"
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
            v-model="formData.email"
            name="email"
            type="email"
            autocomplete="off"
            placeholder="you@example.com"
            :class="getFieldClass(isEmailValid, formData.email)"
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
            v-model="formData.message"
            name="message"
            rows="6"
            autocomplete="off"
            placeholder="Tell us about your project or learning goals!"
            :class="[
              getFieldClass(isMessageValid, formData.message),
              'resize-none',
            ]"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="!isFormValid || isSending"
          class="mt-8 w-full cursor-pointer rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {{ isSending ? 'Sending...' : 'Send message' }}
        </button>

        <p
          class="mt-6 text-center text-sm"
          :class="{
            'text-green-400': feedback === 'Message sent successfully!',
            'text-violet-300': feedback === 'Sending message...',
            'text-slate-500':
              feedback !== 'Message sent successfully!' &&
              feedback !== 'Sending message...',
          }"
        >
          {{ feedback }}
        </p>
      </form>
    </div>
  </section>
</template>