import React from 'react'

export default function PlaceholderLogo({ className = 'w-10 h-10' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="8" fill="#0EA5A9" />
      <circle cx="24" cy="24" r="10" fill="#063E3B" />
      <path d="M18 24c1.5-3 4.5-5 7-5s5.5 2 7 5" stroke="#06B6D4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
