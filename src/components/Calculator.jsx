import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator as CalculatorIcon,
  Users,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  RefreshCcw,
  Sparkles,
  Target,
  Zap,
  BarChart3,
  CheckCircle2,
  Loader2
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
}

export default function Calculator() {
  const [step, setStep] = useState(1)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Step 1: Basic Metrics
  const [payingCustomers, setPayingCustomers] = useState(100)
  const [newAccountsPerMonth, setNewAccountsPerMonth] = useState(50)
  const [arpu, setArpu] = useState(49)
  const [monthlyChurn, setMonthlyChurn] = useState(3)

  // Step 2: Growth Levers
  const [onboardingRate, setOnboardingRate] = useState(40)
  const [activationRate, setActivationRate] = useState(25)
  const [conversionRate, setConversionRate] = useState(3)
  const [expansionRate, setExpansionRate] = useState(1)

  // Calculations
  const calculations = useMemo(() => {
    const months = 12
    let baselineMrr = payingCustomers * arpu
    let adjustedMrr = payingCustomers * arpu
    let baselineCumulative = 0
    let adjustedCumulative = 0
    let baselineCustomers = payingCustomers
    let adjustedCustomers = payingCustomers

    const monthlyData = []

    for (let i = 1; i <= months; i++) {
      // Baseline calculation
      const baselineNewFromOrganic = newAccountsPerMonth
      const baselineChurned = baselineCustomers * (monthlyChurn / 100)
      baselineCustomers = baselineCustomers + baselineNewFromOrganic - baselineChurned
      const baselineMonthRevenue = baselineCustomers * arpu
      baselineCumulative += baselineMonthRevenue

      // Adjusted calculation with growth levers
      const adjustedNewAccounts = newAccountsPerMonth
      const adjustedOnboarded = adjustedNewAccounts * (onboardingRate / 100)
      const adjustedActivated = adjustedOnboarded * (activationRate / 100)
      const adjustedConverted = adjustedActivated * (conversionRate / 100)
      
      const adjustedChurned = adjustedCustomers * (monthlyChurn / 100)
      const expansionRevenue = adjustedCustomers * arpu * (expansionRate / 100)
      
      adjustedCustomers = adjustedCustomers + adjustedConverted - adjustedChurned
      const adjustedMonthRevenue = (adjustedCustomers * arpu) + expansionRevenue
      adjustedCumulative += adjustedMonthRevenue

      monthlyData.push({
        month: i,
        baseline: baselineMonthRevenue,
        adjusted: adjustedMonthRevenue,
        baselineCustomers,
        adjustedCustomers
      })
    }

    const revenueLift = adjustedCumulative - baselineCumulative
    const roiPercentage = baselineCumulative > 0 ? (revenueLift / baselineCumulative) * 100 : 0
    const finalMrrLift = monthlyData[months - 1].adjusted - monthlyData[months - 1].baseline

    return {
      baselineCumulative,
      adjustedCumulative,
      revenueLift,
      roiPercentage,
      finalMrr: monthlyData[months - 1].adjusted,
      baselineFinalMrr: monthlyData[months - 1].baseline,
      finalMrrLift,
      monthlyData,
      finalAdjustedCustomers: adjustedCustomers,
      finalBaselineCustomers: monthlyData[months - 1].baselineCustomers
    }
  }, [payingCustomers, newAccountsPerMonth, arpu, monthlyChurn, onboardingRate, activationRate, conversionRate, expansionRate])

  const handleCalculate = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setIsCalculating(false)
      setShowResults(true)
    }, 1500)
  }

  const reset = () => {
    setShowResults(false)
    setStep(1)
    setPayingCustomers(100)
    setNewAccountsPerMonth(50)
    setArpu(49)
    setMonthlyChurn(3)
    setOnboardingRate(40)
    setActivationRate(25)
    setConversionRate(3)
    setExpansionRate(1)
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value)
  }

  if (showResults) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-5xl mx-auto px-4 py-12"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Analysis Complete
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Your SaaS Revenue Impact Analysis
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Based on your inputs, here's how optimizing your growth levers could impact your revenue over the next 12 months.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="text-sm text-slate-500 mb-1">12-Month Revenue Lift</div>
            <div className="text-3xl font-bold text-emerald-600">{formatCurrency(calculations.revenueLift)}</div>
            <div className="text-xs text-slate-400 mt-1">Additional revenue</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="text-sm text-slate-500 mb-1">ROI Percentage</div>
            <div className="text-3xl font-bold text-indigo-600">{calculations.roiPercentage.toFixed(1)}%</div>
            <div className="text-xs text-slate-400 mt-1">Revenue improvement</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="text-sm text-slate-500 mb-1">Month 12 MRR</div>
            <div className="text-3xl font-bold text-slate-900">{formatCurrency(calculations.finalMrr)}</div>
            <div className="text-xs text-emerald-600 mt-1">+{formatCurrency(calculations.finalMrrLift)}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="text-sm text-slate-500 mb-1">Paying Customers</div>
            <div className="text-3xl font-bold text-slate-900">{formatNumber(calculations.finalAdjustedCustomers)}</div>
            <div className="text-xs text-emerald-600 mt-1">+{formatNumber(calculations.finalAdjustedCustomers - calculations.finalBaselineCustomers)}</div>
          </motion.div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 rounded-xl p-6 border border-slate-200"
          >
            <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-400" />
              Baseline Projection
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">12-Month Cumulative Revenue</span>
                <span className="font-semibold text-slate-900">{formatCurrency(calculations.baselineCumulative)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Month 12 MRR</span>
                <span className="font-semibold text-slate-900">{formatCurrency(calculations.baselineFinalMrr)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Paying Customers (Month 12)</span>
                <span className="font-semibold text-slate-900">{formatNumber(calculations.finalBaselineCustomers)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200"
          >
            <h3 className="font-semibold text-indigo-900 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              Optimized Projection
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-indigo-700">12-Month Cumulative Revenue</span>
                <span className="font-semibold text-indigo-900">{formatCurrency(calculations.adjustedCumulative)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-700">Month 12 MRR</span>
                <span className="font-semibold text-indigo-900">{formatCurrency(calculations.finalMrr)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-700">Paying Customers (Month 12)</span>
                <span className="font-semibold text-indigo-900">{formatNumber(calculations.finalAdjustedCustomers)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Growth Lever Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-8"
        >
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            Growth Lever Configuration
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-900">{onboardingRate}%</div>
              <div className="text-sm text-slate-500">Onboarding Rate</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-900">{activationRate}%</div>
              <div className="text-sm text-slate-500">Activation Rate</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-900">{conversionRate}%</div>
              <div className="text-sm text-slate-500">Free-to-Paid</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-900">{expansionRate}%</div>
              <div className="text-sm text-slate-500">Monthly Expansion</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-center"
        >
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
          >
            <RefreshCcw className="w-5 h-5" />
            Run Another Analysis
          </button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          <CalculatorIcon className="w-4 h-4" />
          Revenue Analytics
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          SaaS Revenue Impact Calculator
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Discover how optimizing your growth levers affects 12-month revenue. 
          Input your metrics and adjust the sliders to see the impact.
        </p>
      </motion.div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
          <span>Step {step} of 2</span>
          <span>{step === 1 ? 'Basic Metrics' : 'Growth Levers'}</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-600 rounded-full"
            initial={{ width: step === 1 ? '50%' : '100%' }}
            animate={{ width: step === 1 ? '50%' : '100%' }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
      >
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Step 1: Your Current Metrics
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Current Paying Customers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      value={payingCustomers}
                      onChange={(e) => setPayingCustomers(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    New Accounts/Month
                  </label>
                  <div className="relative">
                    <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      value={newAccountsPerMonth}
                      onChange={(e) => setNewAccountsPerMonth(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Average Revenue Per User ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      value={arpu}
                      onChange={(e) => setArpu(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="49"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Monthly Churn Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={monthlyChurn}
                      onChange={(e) => setMonthlyChurn(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="3"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Step 2: Optimize Your Growth Levers
              </h2>

              <div className="space-y-6">
                {/* Onboarding Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-700">Onboarding Completion Rate</label>
                    <span className="text-sm font-semibold text-indigo-600">{onboardingRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={onboardingRate}
                    onChange={(e) => setOnboardingRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-xs text-slate-500 mt-1">% of new accounts that complete onboarding</p>
                </div>

                {/* Activation Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-700">Activation Rate</label>
                    <span className="text-sm font-semibold text-indigo-600">{activationRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activationRate}
                    onChange={(e) => setActivationRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-xs text-slate-500 mt-1">% of onboarded users who reach "aha moment"</p>
                </div>

                {/* Conversion Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-700">Free-to-Paid Conversion</label>
                    <span className="text-sm font-semibold text-indigo-600">{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-xs text-slate-500 mt-1">% of activated users who convert to paid</p>
                </div>

                {/* Expansion Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-700">Monthly Expansion Rate</label>
                    <span className="text-sm font-semibold text-indigo-600">{expansionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="0.5"
                    value={expansionRate}
                    onChange={(e) => setExpansionRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-xs text-slate-500 mt-1">Monthly revenue expansion from upsells</p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 text-slate-600 px-4 py-3 rounded-xl font-medium hover:text-slate-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50"
                >
                  {isCalculating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Calculate Impact
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
