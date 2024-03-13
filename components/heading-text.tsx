'use client'
import { TypewriterEffect } from './ui/typewriter-effect'

export function HeadingText() {
  const words = [
    {
      text: 'My',
    },
    {
      text: 'wishlist,',
    },
    {
      text: 'you',
    },
    {
      text: 'never',
    },
    {
      text: 'miss',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <TypewriterEffect words={words} />
    </div>
  )
}
