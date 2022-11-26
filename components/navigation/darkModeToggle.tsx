import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import {SunIcon, MoonIcon} from '@heroicons/react/24/outline';

export default function DarkModeToggle() {

  const [mounted, setMounted] = useState(false)
  const {theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }  

  return (
    <button
      className="w-8 h-8 bg-darkAccent/20 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 dark:ring-blueAccent transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="text-blue-500 w-5 h-5" />
      ) : (
        <SunIcon className="text-blue-400 w-5 h-5" />
      )}
    </button>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
