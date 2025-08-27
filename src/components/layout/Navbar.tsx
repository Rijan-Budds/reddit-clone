import Link from 'next/link'
import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className='bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo and Brand */}
          <div className='flex items-center space-x-8'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-[#ff4500] rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>R</span>
              </div>
              <span className='text-xl font-bold text-[#ff4500]'>Reddit</span>
            </Link>

            {/* Navigation Links */}
            <div className='hidden md:flex items-center space-x-6'>
              <Link href='/' className='text-[#0F172A] hover:text-[#ff6700] font-medium transition-colors'>
                Home
              </Link>
              <Link href='/trending' className='text-gray-600 hover:text-[#ff6700] font-medium transition-colors'>
                Trending
              </Link>
              <Link href='/communities' className='text-gray-600 hover:text-[#ff6700] font-medium transition-colors'>
                Communities
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className='hidden lg:block flex-1 max-w-lg mx-8'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search posts, communities, and users...'
                className='w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#b24800] focus:border-transparent focus:bg-white transition-all'
              />
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className='flex items-center space-x-4'>
            {/* Create Post Button */}
            <button className='hidden sm:flex items-center space-x-2 bg-[#ff4500] text-white px-4 py-2 rounded-full hover:bg-[#ff6700] transition-colors shadow-sm'>
              <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
              </svg>
              <span className='font-medium'>Create Post</span>
            </button>

            {/* Notifications */}
            <button className='p-2 text-gray-600 hover:text-[#ff6700] hover:bg-gray-100 rounded-full transition-colors relative'>
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-5 5v-5zM4.19 4.19A4 4 0 004 6v6a4 4 0 004 4h6a4 4 0 004-4V6a4 4 0 00-4-4H8a4 4 0 00-2.81 1.19z' />
              </svg>
              <span className='absolute -top-1 -right-1 w-3 h-3 bg-[#FACC15] rounded-full'></span>
            </button>

            {/* Messages */}
            <button className='p-2 text-gray-600 hover:text-[#ff6700] hover:bg-gray-100 rounded-full transition-colors'>
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
              </svg>
            </button>

            {/* User Menu */}
            <div className="relative" ref={menuRef}>
              {/* User Menu Button */}
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-8 h-8 bg-[#ff4500] rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">Profile</span>
                </div>
                <svg
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  >
                    Settings
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className='md:hidden p-2 text-gray-600 hover:text-[#38BDF8] hover:bg-gray-100 rounded-lg transition-colors'>
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className='lg:hidden pb-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search posts, communities, and users...'
              className='w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent focus:bg-black transition-all'
            />
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar