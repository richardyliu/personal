'use client'
import { motion } from 'motion/react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BOOKS } from '../data'

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

export default function Investments() {
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
          <h1 className="mb-4 text-2xl font-medium">Investments</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            My investment philosophy and the books that have shaped my thinking about markets, technology, and business.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-8"
      >
        <h3 className="mb-3 text-lg font-medium">Collections</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BOOKS.map((book) => (
              <div
                key={book.id}
                className="-mx-3 rounded-xl px-3 py-3"
                data-id={book.id}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {book.title} <span className="text-zinc-500 dark:text-zinc-400 italic">by {book.author}</span>
                  </h4>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>
    </motion.main>
  )
}
