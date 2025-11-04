'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { ESSAYS } from '../../data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

// Helper function to convert markdown-like content to HTML
function parseMarkdown(content: string): string {
  let html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3 text-zinc-900 dark:text-zinc-50">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-8 mb-4 text-zinc-900 dark:text-zinc-50">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-10 mb-5 text-zinc-900 dark:text-zinc-50">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
    // Paragraphs
    .split('\n\n')
    .map(para => {
      if (para.trim() && !para.match(/^<[h]/)) {
        return `<p class="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">${para.trim()}</p>`
      }
      return para
    })
    .join('\n')
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2 list-disc text-zinc-700 dark:text-zinc-300">$1</li>')
    .replace(/(<li.*<\/li>)/s, '<ul class="mb-4 ml-4 space-y-1">$1</ul>')

  return html
}

export default function EssayPage({ params }: { params: { id: string } }) {
  const essay = ESSAYS.find(e => e.id === params.id)

  if (!essay) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Essay not found</h1>
          <Link href="/thoughts" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Back to Thoughts
          </Link>
        </div>
      </div>
    )
  }

  const contentHtml = parseMarkdown(essay.content)

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <Link
          href="/thoughts"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Thoughts
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              {essay.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {essay.subtitle}
            </p>
            {essay.date && (
              <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
                <Calendar className="h-4 w-4" />
                <span>{essay.date}</span>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-8"
      >
        <article className="relative overflow-hidden rounded-2xl bg-zinc-50/40 p-8 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
          <div
            className="prose prose-zinc max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </motion.section>
    </motion.main>
  )
}
