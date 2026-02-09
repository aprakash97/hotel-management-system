import React from 'react'
import PrimaryButton from './common/primaryButton'
import { useModal } from '../context/modalContext';
import { Home } from "lucide-react"; 

const Header = () => {
  const { openModal } = useModal();
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-3">
          <Home className="w-6 h-6 text-blue-400" />
          <h1 className="text-xl font-bold text-blue-500">
            Hotel Management
          </h1>
        </div>

        <PrimaryButton
          label="New Hotel"
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        />
      </div>
    </header>
  )
}

export default Header