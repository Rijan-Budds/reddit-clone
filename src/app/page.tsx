'use client'
import React from 'react'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

import { useLocalStorage } from '../../hook/useLocalStorage'

const Page = () => {
  const [sidebarVisible, setSidebarVisible] = useLocalStorage('sidebarVisible', true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-16">
       
      </main>

      <Sidebar isVisible={sidebarVisible} onToggle={toggleSidebar} />
      <Footer />
    </div>
  )
}

export default Page
