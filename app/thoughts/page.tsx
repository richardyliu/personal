'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { ESSAYS } from '../data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Thoughts() {
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
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-medium">Thoughts</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Essays, reflections, and musings on technology, learning, and life.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-8"
      >
        <div className="flex flex-col space-y-4">
          {ESSAYS.map((essay) => (
            <Link
              key={essay.id}
              href={`/thoughts/${essay.id}`}
              className="group relative overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all duration-200 hover:bg-zinc-50/60 hover:ring-zinc-300/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-950/60 dark:hover:ring-zinc-700/50"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-zinc-900 transition-colors duration-200 group-hover:text-zinc-950 dark:text-zinc-50 dark:group-hover:text-zinc-100">
                  {essay.title}
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {essay.subtitle}
                </p>
                {essay.date && (
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
                    <Calendar className="h-4 w-4" />
                    <span>{essay.date}</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></div>
            </Link>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
