import React from 'react'

interface PrimaryButtonProps {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const PrimaryButton = ({label, ...props} :PrimaryButtonProps) => {
  return (
    <button
      {...props}
      className="cursor-pointer rounded-full bg-blue-100 px-2 py-2 font-bold text-blue-600 shadow-md hover:shadow-zinc-900 hover:text-blue-900"
    >
      {label}
    </button>
  )
}

export default PrimaryButton