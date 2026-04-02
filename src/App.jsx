import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlogPost from './components/BlogPost'
import Calculator from './components/Calculator'

export default function App() {
  const [activeTab, setActiveTab] = useState('calculator')

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-slate-900">Saasfactor</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'calculator'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Calculator
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'blog'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Guide
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'calculator' ? (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Calculator />
              {/* Blog content below calculator for SEO */}
              <div className="border-t border-slate-200 bg-white">
                <BlogPost />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white min-h-screen"
            >
              <BlogPost />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-white">Saasfactor</span>
            </div>
            <p className="text-sm">© 2025 Saasfactor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
