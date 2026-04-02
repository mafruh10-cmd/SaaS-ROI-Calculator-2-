import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// SaaS Revenue Impact Calculator
// TODO: Convert the HTML content from index.html into React components

export default function App() {
  const [step, setStep] = useState(1)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
          >
            Revenue Analytics
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            SaaS Revenue Impact Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-lg mx-auto"
          >
            Calculate the revenue impact of churn, expansion, and growth on your SaaS business.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-8"
        >
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              This calculator is being set up. The HTML content from the original file
              needs to be converted into React components.
            </p>
            <p className="text-sm text-gray-500">
              Step {step} of 4
            </p>
            <button
              onClick={() => setStep(s => Math.min(s + 1, 4))}
              className="btn-primary mt-6"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
