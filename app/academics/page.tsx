'use client'
import { motion } from 'motion/react'
import { LABS, SEMESTERS } from '../data'
import { Italic } from 'lucide-react'

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

export default function Academics() {
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
          <h1 className="mb-4 text-2xl font-medium">Academics</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            My research experience and academic journey across various institutions and laboratories.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-8"
      >
        <h3 className="mb-5 text-lg font-medium">Courses</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SEMESTERS.map((semester) => (
            <div
              key={semester.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <div className="mb-4">
                <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  {semester.name} {semester.year}
                </h4>
              </div>
              <div className="space-y-3">
                {semester.courses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-start justify-between border-b border-zinc-200/50 pb-2 last:border-b-0 last:pb-0 dark:border-zinc-700/50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">
                          {course.acronym}
                        </span>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          course.status === 'enrolled'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        }`}>
                          {course.status}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {course.fullName}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {course.credits} units
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-8"
      >
        <h3 className="mb-5 text-lg font-medium">Lab Experience</h3>
        <div className="flex flex-col space-y-4">
          {LABS.map((lab) => (
            <div
              key={lab.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={lab.logo}
                      alt={`${lab.name} logo`}
                      className="h-12 w-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0YzRjRGNiIvPgo8cGF0aCBkPSJNMjQgMTJDMjcuMzEzNyAxMiAzMCAxNC42ODYzIDMwIDE4QzMwIDIxLjMxMzcgMjcuMzEzNyAyNCAyNCAyNEMyMC42ODYzIDI0IDE4IDIxLjMxMzcgMTggMThDMTggMTQuNjg2MyAyMC42ODYzIDEyIDI0IDEyWiIgZmlsbD0iIzk0QTNBNiIvPgo8cGF0aCBkPSJNMzYgMzZDMzYgMzAuNDc3MiAzMS41MjI4IDI2IDI2IDI2SDIyQzE2LjQ3NzIgMjYgMTIgMzAuNDc3MiAxMiAzNlYzOEgzNlYzNloiIGZpbGw9IiM5NEEzQTYiLz4KPC9zdmc+'
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                      {lab.position}
                    </h4>
                    <p className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                    <i>{lab.name}</i> at {lab.place}
                    </p>
                    {lab.description && (
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {lab.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {lab.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
