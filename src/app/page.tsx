'use client'
import React, { useMemo, useState } from 'react'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

import { useLocalStorage } from '../../hook/useLocalStorage'

const Page = () => {
  const [sidebarVisible, setSidebarVisible] = useLocalStorage('sidebarVisible', true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Sample posts (Home feed)
  const [view, setView] = useState<'card' | 'compact'>('card');
  const [sort, setSort] = useState<'latest' | 'oldest'>('latest');
  const posts = useMemo(
    () => [
      { id: 1, title: 'Just built my first Next.js app', category: 'react', upvotes: 325, createdAt: new Date('2025-08-20') },
      { id: 2, title: 'What is your favorite CSS framework?', category: 'css', upvotes: 140, createdAt: new Date('2025-08-22') },
      { id: 3, title: 'Dark mode patterns that actually work', category: 'ui', upvotes: 512, createdAt: new Date('2025-08-18') },
      { id: 4, title: 'TypeScript tips for large apps', category: 'typescript', upvotes: 289, createdAt: new Date('2025-08-23') },
      { id: 5, title: 'How I optimized my React renders', category: 'react', upvotes: 451, createdAt: new Date('2025-08-19') },
    ],
    []
  );

  const filtered = useMemo(() => {
    const sorted = [...posts].sort((a, b) => {
      if (sort === 'latest') return b.createdAt.getTime() - a.createdAt.getTime();
      return a.createdAt.getTime() - b.createdAt.getTime();
    });
    return sorted;
  }, [posts, sort]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Rail */}
            <aside className="hidden lg:block lg:col-span-3 space-y-6">
              {/* Popular Communities */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Popular Communities</h3>
                <div className="space-y-3">
                  {[
                    { name: 'r/askreddit', members: '49.2M' },
                    { name: 'r/funny', members: '40.3M' },
                    { name: 'r/aww', members: '34.1M' },
                    { name: 'r/gaming', members: '40.0M' },
                    { name: 'r/movies', members: '31.5M' },
                  ].map((c, i) => (
                    <a key={c.name} href={`/r/${c.name.slice(2)}`} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-[#ff4500] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <span className="font-medium text-[#0F172A]">{c.name}</span>
                          <p className="text-xs text-gray-500">{c.members} members</p>
                        </div>
                      </div>
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Links Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex flex-wrap gap-2">
                    <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors">About</a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors">Help</a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors">Blog</a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors">Careers</a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors">Terms</a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors">Privacy</a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors">Settings</a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <section className="lg:col-span-9 space-y-4">
              {/* Filter Bar */}
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">View:</span>
                  <button
                    onClick={() => setView('card')}
                    className={`px-3 py-2 rounded-md border text-sm ${view === 'card' ? 'bg-[#ff4500] text-white border-[#ff4500]' : 'bg-white text-[#0F172A] border-gray-200 hover:bg-gray-50'}`}
                  >
                    Card
                  </button>
                  <button
                    onClick={() => setView('compact')}
                    className={`px-3 py-2 rounded-md border text-sm ${view === 'compact' ? 'bg-[#ff4500] text-white border-[#ff4500]' : 'bg-white text-[#0F172A] border-gray-200 hover:bg-gray-50'}`}
                  >
                    Compact
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <button
                    onClick={() => setSort('latest')}
                    className={`px-3 py-2 rounded-md border text-sm ${sort === 'latest' ? 'bg-[#ff4500] text-white border-[#ff4500]' : 'bg-white text-[#0F172A] border-gray-200 hover:bg-gray-50'}`}
                  >
                    Latest
                  </button>
                  <button
                    onClick={() => setSort('oldest')}
                    className={`px-3 py-2 rounded-md border text-sm ${sort === 'oldest' ? 'bg-[#ff4500] text-white border-[#ff4500]' : 'bg-white text-[#0F172A] border-gray-200 hover:bg-gray-50'}`}
                  >
                    Oldest
                  </button>
                </div>
              </div>

              {/* Posts List */}
              {view === 'card' ? (
                <div className="space-y-3">
                  {filtered.map(post => (
                    <article key={post.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-[#0F172A]">{post.title}</h2>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 capitalize">{post.category}</span>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-4">
                        <span>⬆ {post.upvotes} upvotes</span>
                        <span>{post.createdAt.toDateString()}</span>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <ul className="divide-y divide-gray-200 bg-white rounded-lg border border-gray-200">
                  {filtered.map(post => (
                    <li key={post.id} className="px-3 py-2 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 capitalize shrink-0">{post.category}</span>
                        <span className="truncate text-sm text-[#0F172A]">{post.title}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 shrink-0">
                        <span>⬆ {post.upvotes}</span>
                        <span>{post.createdAt.toLocaleDateString()}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      </main>

      <Sidebar isVisible={sidebarVisible} onToggle={toggleSidebar} />
      <Footer />
    </div>
  )
}

export default Page
