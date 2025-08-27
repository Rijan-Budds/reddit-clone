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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-6">
            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${
              sidebarVisible ? 'lg:mr-80' : 'mr-0'
            }`}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold text-[#0F172A] mb-4">Welcome to Reddit</h1>
                <p className="text-gray-600 mb-6">
                  Discover the best of what Reddit has to offer. From trending topics to niche communities, 
                  there&apos;s something for everyone.
                </p>
                
                {/* Sample Content */}
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                    <h3 className="font-semibold text-[#0F172A] mb-2">Getting Started</h3>
                    <p className="text-gray-600 text-sm">
                      Explore communities, create posts, and engage with other users. The possibilities are endless!
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                    <h3 className="font-semibold text-[#0F172A] mb-2">Popular Communities</h3>
                    <p className="text-gray-600 text-sm">
                      Check out trending communities in the sidebar to find topics that interest you.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                    <h3 className="font-semibold text-[#0F172A] mb-2">Create Content</h3>
                    <p className="text-gray-600 text-sm">
                      Share your thoughts, ask questions, or start discussions in your favorite communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Sidebar isVisible={sidebarVisible} onToggle={toggleSidebar} />
      <Footer />
    </div>
  )
}

export default Page
