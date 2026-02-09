import React from 'react'

interface ModalProps {
  title: string
  children: React.ReactNode
  buttonLabel: string
  onAction: () => void
  onClose: () => void
  disabled: boolean
}

const Modal = ({ title, children, buttonLabel, onAction, onClose, disabled }: ModalProps) => {

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="mb-6">
          {children}
        </div>
        <div className="flex gap-3 justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button 
            onClick={onAction}
            disabled={disabled}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:cursor-not-allowed"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal