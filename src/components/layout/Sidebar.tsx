import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface SidebarProps {
  isVisible: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isVisible, onToggle }: SidebarProps){
    return(
        <>
            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className={`fixed top-20 right-4 z-50 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isVisible ? 'right-4' : 'right-4'
                }`}
            >
                <svg 
                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                        isVisible ? 'rotate-180' : 'rotate-0'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-white border-l border-gray-200 shadow-lg transition-transform duration-300 ease-in-out z-40 ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="w-80 h-full overflow-y-auto space-y-6 p-6">
                    {/* Trending Communities */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <h3 className="text-lg font-bold text-[#0F172A] mb-4">Trending Communities</h3>
                        <div className="space-y-3">
                            {[
                                { name: "r/programming", members: "4.2M", icon: "💻" },
                                { name: "r/reactjs", members: "1.8M", icon: "⚛️" },
                                { name: "r/webdev", members: "2.1M", icon: "🌐" },
                                { name: "r/javascript", members: "3.5M", icon: "📜" },
                                { name: "r/technology", members: "5.7M", icon: "🔧" }
                            ].map((community, index) => (
                                <Link 
                                    key={index} 
                                    href={`/r/${community.name.slice(2)}`}
                                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                                            {community.icon}
                                        </div>
                                        <div>
                                            <span className="font-medium text-[#0F172A] group-hover:text-[#ff4500] transition-colors">
                                                {community.name}
                                            </span>
                                            <p className="text-xs text-gray-500">{community.members} members</p>
                                        </div>
                                    </div>
                                    <svg className="h-4 w-4 text-gray-400 group-hover:text-[#ff4500] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Create Community */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <h3 className="text-lg font-bold text-[#0F172A] mb-2">Create a community</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Create your own community and start sharing with people who share your interests.
                        </p>
                        <button className="w-full bg-[#ff4500] text-white py-2 px-4 rounded-full hover:bg-[#ff6700] transition-colors font-medium">
                            Create Community
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isVisible && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={onToggle}
                />
            )}
        </>
    )
}