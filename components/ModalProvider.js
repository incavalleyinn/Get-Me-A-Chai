'use client';
import { createContext, useContext, useState } from 'react';
import Login from '@/app/Login/page'; 

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ModalContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
      
      {/* Global modal container */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <Login onClose={() => setShowLogin(false)} />
        </div>
      )}
    </ModalContext.Provider>
  );
}
