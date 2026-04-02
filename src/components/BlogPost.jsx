import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Target,
  Zap,
  BarChart3,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  PieChart,
  LineChart,
  Percent,
  Layers,
  Settings,
  Award,
  Briefcase,
  Building2,
  Rocket,
  Landmark,
  HelpCircle,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Info,
  RefreshCw,
  Wallet
} from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

function FAQItem({ question, answer, delay = 0 }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <span className="flex-shrink-0">
          {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function StatCard({ icon: Icon, value, label, subtext, trend, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-indigo-50 rounded-lg"><Icon className="w-5 h-5 text-indigo-600" /></div>
        {trend && <span className={cn("text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1", trend > 0 ? "bg-emerald-50 text-emerald-700" : trend < 0 ? "bg-rose-50 text-rose-700" : "bg-slate-100 text-slate-600")}>
          {trend > 0 ? <ArrowUpRight className="w-3 h-3" /> : trend < 0 ? <ArrowDownRight className="w-3 h-3" /> : <Minus className="w-3 h-3" />}{Math.abs(trend)}%
        </span>}
      </div>
      <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm font-medium text-slate-700 mb-1">{label}</div>
      {subtext && <div className="text-xs text-slate-500">{subtext}</div>}
    </motion.div>
  )
}

export default function BlogPost() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <motion.article initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium mb-4">
          <Calculator className="w-4 h-4" /><span>Financial Analysis</span><span className="text-slate-300">•</span><span className="text-slate-500">SaaS Strategy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">Free SaaS ROI Calculator: Estimate Your Return on Investment</h1>
        <p className="text-xl text-slate-600 leading-relaxed">A comprehensive guide to understanding, calculating, and maximizing the return on your SaaS investments using data-driven analysis and proven frameworks.</p>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-12 border border-indigo-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg"><Sparkles className="w-5 h-5 text-indigo-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Key Takeaways</h2>
        </div>
        <ul className="space-y-4">
          {["SaaS ROI calculators quantify the financial return of software investments by measuring net profit against total cost of ownership — subscriptions, onboarding, and integration included.",
            "For SaaS founders, the six growth levers — new accounts, onboarding, activation, conversion, churn, and expansion — compound over 12 months and determine the trajectory of MRR more than any single metric.",
            "Monthly churn is the single most destructive metric in SaaS; reducing it by even 1% can add tens of thousands of dollars in cumulative 12-month revenue through compounding retention.",
            "Expansion revenue — upsells and plan upgrades — is underestimated: a 3% monthly expansion rate lifts effective ARPU by 43% by month 12 without acquiring a single new customer.",
            "SaaS ROI differs from traditional ROI in time horizon, risk profile, and scalability — recurring investment models reward early improvement and penalize delayed action far more sharply.",
            "ROI calculators are decision support tools, not oracles — their accuracy depends on the quality of inputs, and qualitative benefits like team morale or brand trust are never fully captured in a formula."
          ].map((item, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-slate-700 leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">What is a SaaS ROI Calculator?</h2>
        <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-indigo-600" />Definition and Purpose</h3>
        <p className="text-slate-600 leading-relaxed mb-6">A SaaS ROI calculator is a structured financial tool that translates the cost of a software subscription into measurable business outcomes. At its core, it answers a deceptively simple question: for every dollar you spend on this tool, how many dollars come back — and over what timeframe?</p>
        <p className="text-slate-600 leading-relaxed mb-6">The word "return" in SaaS context is broader than traditional finance. It encompasses direct revenue gains (new customers acquired, deals closed faster), cost avoidance (headcount not hired, errors not made), and productivity multipliers (hours recaptured, workflows automated). A well-built calculator surfaces all three dimensions rather than stopping at license cost.</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-6">
          <p className="text-slate-700 italic">According to Gartner, organizations that formally evaluate software ROI before purchase are 2.7x more likely to report satisfaction with their investment three years later. The act of calculation itself enforces rigor — it forces teams to define what "success" actually looks like before a contract is signed.</p>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-indigo-600" />Why ROI is Important for SaaS Buyers and Business Owners</h3>
        <p className="text-slate-600 leading-relaxed mb-4">The SaaS market crossed $197 billion in global revenue in 2023, and Statista projects it will reach $299 billion by 2025. Inside this growth sits a quieter crisis: Productiv's 2023 SaaS Intelligence Report found that 56% of SaaS applications in enterprise organizations go underutilized, and the average mid-sized company wastes $135,000 annually on redundant or abandoned subscriptions.</p>
        <p className="text-slate-600 leading-relaxed mb-4">For founders and operators on the sell side, ROI framing is no longer optional in modern B2B sales cycles. A Forrester study found that 74% of B2B buyers conduct a self-directed ROI analysis before engaging a vendor's sales team. If you can't hand them a credible number, they'll construct one themselves — often a conservative one that kills your deal.</p>
        <p className="text-slate-600 leading-relaxed mb-6">For buyers, ROI calculation is the difference between justifiable investment and gut-feel spending. CFOs at series B companies and enterprise IT departments alike demand quantified business cases. A calculator removes the ambiguity and replaces it with defensible data.</p>
        <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2"><Zap className="w-5 h-5 text-indigo-600" />How It Simplifies Investment Decisions</h3>
        <p className="text-slate-600 leading-relaxed mb-4">The mental tax of SaaS evaluation is enormous. Decision-makers today face an average of 130 SaaS applications in their stack (Productiv, 2023). Comparing them across price, feature set, integration depth, and projected impact would take weeks without a standardized model.</p>
        <p className="text-slate-600 leading-relaxed mb-6">A ROI calculator collapses that complexity into a handful of inputs and produces a comparable output: dollar return, percentage return, and payback period. This creates a common financial language across teams — product, finance, and operations can debate inputs, but the model enforces consistency in how outcomes are measured.</p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm"><strong>Industry Insight:</strong> McKinsey research shows that companies with formalized technology ROI processes make budget allocation decisions 40% faster and with significantly higher cross-functional alignment.</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Can Benefit from a SaaS ROI Calculator?</h2>
        <div className="grid gap-6 mb-8">
          {[
            { icon: Briefcase, color: "emerald", title: "Business Owners", text: "Business owners carry the most direct accountability for SaaS spend. Every subscription is either pulling its weight or diluting margins. An ROI calculator gives owners a dashboard-level view of software performance — not just what tools cost, but what they return. In cash-constrained environments, that visibility is the difference between strategic investment and slow financial bleed. For SMB owners particularly, where the average SaaS stack consumes between 8–12% of total operational budget (Blissfully, 2023), the ability to model ROI before committing to an annual contract is directly tied to cash flow management." },
            { icon: TrendingUp, color: "blue", title: "Marketing Teams", text: "Marketing is simultaneously the team most dependent on SaaS tools and the team most scrutinized for spend justification. CRM platforms, marketing automation, analytics suites, ad attribution tools — each carries a monthly price tag and a quarterly performance review. HubSpot's 2023 State of Marketing Report found that 61% of marketers cite \"proving ROI\" as their top challenge. A SaaS ROI calculator reframes this from a narrative exercise into a quantitative one: if this email automation platform saves four hours per week per marketer and our loaded labor rate is $45/hour, the math becomes simple." },
            { icon: DollarSign, color: "amber", title: "Finance Teams", text: "Finance professionals bring the most skepticism to SaaS evaluations — and rightly so. They understand that vendors routinely inflate benefit projections and that integration costs, training time, and change management overhead routinely double the real cost of adoption. A ROI calculator that forces input of total cost of ownership (TCO) — not just license fees — gives finance teams the honesty they need. Gartner estimates that hidden implementation and maintenance costs account for an average of 30–35% of the true cost of enterprise SaaS over a three-year horizon." },
            { icon: Rocket, color: "rose", title: "Startups", text: "For early-stage startups, every dollar is a strategic decision. The difference between a $299/month tool that generates 20 qualified leads and a $99/month tool that generates three is obvious — but only if you've done the math. Startups frequently under-invest in high-ROI tools due to sticker shock, and over-invest in brand-name platforms due to social proof rather than performance data. Y Combinator consistently advises founders to instrument their SaaS stack from day one. Measuring ROI at the tool level creates the habit of data-driven budget allocation that separates companies that scale efficiently from those that burn capital on entropy." },
            { icon: Building2, color: "purple", title: "Enterprise Buyers", text: "Enterprise procurement is a multi-stakeholder sport. IT, legal, security, finance, and the business unit all have a seat at the table. ROI calculators provide the neutral financial language that aligns these stakeholders. When an IT director can show the CFO that a DevOps platform reduces deployment time by 60% and translates that to $2.4M in recaptured engineering hours annually, the conversation changes. Forrester's Total Economic Impact (TEI) methodology — essentially a formalized ROI framework — has become the de facto standard for enterprise SaaS evaluation. Companies that arrive at procurement conversations with TEI-style analysis close enterprise deals 35% faster, according to Forrester's own research." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("p-2 rounded-lg", `bg-${item.color}-50`)}>
                  <item.icon className={cn("w-5 h-5", `text-${item.color}-600`)} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <motion.div variants={itemVariants} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-4">Additional teams and functions that benefit directly:</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Settings, title: "IT Teams / Operations Managers", desc: "Quantify infrastructure costs saved versus legacy alternatives and measure integration efficiency across the stack." },
              { icon: Users, title: "HR Teams", desc: "Calculate recruiting time saved per hire, onboarding acceleration, and attrition reduction impact from engagement platforms." },
              { icon: Layers, title: "Product Managers", desc: "Model the revenue impact of reducing time-to-feature and correlate activation improvements with conversion rates." },
              { icon: Award, title: "Consultants & Advisors", desc: "Deliver client-ready ROI analyses that justify tool recommendations and build advisory credibility." },
              { icon: Landmark, title: "Investors / Venture Capitalists", desc: "Assess portfolio company SaaS efficiency ratios and benchmark spend against revenue generation." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div><span className="font-medium text-slate-800">{item.title}:</span><span className="text-slate-600 text-sm ml-1">{item.desc}</span></div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">How SaaS ROI is Calculated</h2>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2"><Percent className="w-5 h-5 text-indigo-600" />Basic ROI Formula</h3>
        <div className="bg-slate-900 rounded-xl p-6 mb-6">
          <code className="text-xl text-emerald-400 font-mono block text-center">ROI = (Net Profit / Cost of Investment) × 100</code>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4">The formula is deceptively simple. Net Profit = Total Benefits Generated minus Total Costs Incurred. Cost of Investment = everything spent to acquire, implement, and operate the tool. The result expressed as a percentage tells you: for every $100 invested, how many dollars were returned above that baseline.</p>
        <p className="text-slate-600 leading-relaxed mb-6">A 100% ROI means you doubled your money. A 300% ROI means you returned four times the cost. An ROI below 0% means the tool cost more than it generated — a signal to renegotiate, restructure usage, or cut the subscription.</p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8">
          <p className="text-slate-700 text-sm"><strong>Benchmark:</strong> According to Nucleus Research, the average ROI for enterprise CRM implementations is 8.71x — meaning $8.71 returned for every $1.00 invested. But this figure varies wildly by implementation quality, with the top quartile seeing 15x+ returns and the bottom quartile seeing negative ROI.</p>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2"><RefreshCw className="w-5 h-5 text-indigo-600" />SaaS-Specific Considerations</h3>
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><DollarSign className="w-4 h-4 text-indigo-600" />Subscription Costs (Monthly/Yearly)</h4>
            <p className="text-slate-600 leading-relaxed">Unlike traditional software with a single purchase price, SaaS costs are perpetual. A $500/month tool costs $6,000 in year one, $12,000 over two years, and $18,000 over three — before adding seat expansion. The ROI calculation must account for the cumulative cost trajectory, not just the monthly sticker price. Annual contracts often offer 15–20% discounts, which improves ROI projections but also increases switching costs.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><Settings className="w-4 h-4 text-indigo-600" />Implementation & Onboarding Costs</h4>
            <p className="text-slate-600 leading-relaxed">Industry data from TSIA indicates that implementation and onboarding typically add 20–35% to the first-year cost of a SaaS platform. For complex enterprise tools, this can reach 100% of the first-year license fee. Onboarding includes internal IT configuration time, data migration, third-party integration development, and productivity dip during the learning curve.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-600" />Time Savings Value</h4>
            <p className="text-slate-600 leading-relaxed">The most commonly cited SaaS benefit and the hardest to measure rigorously. The standard approach: Hours saved per user per week × Number of users × Loaded hourly rate × 52 weeks. The challenge is that "saved" time must actually be redeployed productively. Automation that frees time for meetings has a lower ROI than automation that frees time for revenue-generating work.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-indigo-600" />Revenue Growth from Tool Usage</h4>
            <p className="text-slate-600 leading-relaxed">For SaaS tools that directly touch the revenue funnel — CRM, marketing automation, customer success platforms — revenue attribution becomes the most powerful ROI lever. A CRM that increases sales rep productivity by 14% (per Nucleus Research) at a $1M ARR company generates $140,000 in incremental revenue, making almost any reasonable license fee justifiable on that metric alone.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-600" />Key Inputs in a SaaS ROI Calculator</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Subscription Cost", desc: "Use the total contracted value, not the per-seat advertised price. Factor in annual commitment discounts and planned seat additions." },
            { title: "Number of Users/Licenses", desc: "Per-seat pricing means user count is directly proportional to cost but not necessarily to value. License utilization averages 68% in enterprise SaaS." },
            { title: "Time Saved (Hours)", desc: "Operationalize by function: hours saved in data entry, reporting, manual outreach, scheduling, and approval workflows." },
            { title: "Employee Hourly Rate", desc: "Use loaded cost (1.25–1.4x base salary), not base salary. For US knowledge workers, rates range from $45 to $250+ per hour." },
            { title: "Revenue Increase", desc: "Express as percentage increase over baseline with explicit attribution model. Avoid double-counting across tools." },
            { title: "Productivity Improvements", desc: "Ratio of output to input. A 5-person team producing 7-person output = 40% productivity gain." },
            { title: "Customer Acquisition Impact", desc: "CAC improvement is high-leverage. Reducing CAC by 20% has same bottom-line effect as 25% increase in marketing spend." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">How Does Our SaaS ROI Calculator Work?</h2>
        <p className="text-slate-600 leading-relaxed mb-6">The Saasfactor ROI Calculator is built around a two-phase flow: structured input collection followed by interactive scenario modeling. The design philosophy is progressive disclosure — present one question at a time to reduce cognitive load, then deliver a rich, adjustable output view.</p>
        
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">1</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Enter SaaS Subscription Costs</h4>
              <p className="text-slate-600 text-sm">Begin with your current paying customer count and monthly new account creations. Required inputs: current paying customers, new accounts per month, ARPU, and monthly churn rate.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">2</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Input Expected Benefits</h4>
              <p className="text-slate-600 text-sm">Four additional optional inputs: onboarding completion rate, activation rate, free-to-paid conversion rate, and monthly expansion rate. Conservative defaults (40%, 25%, 3%, 1%) are pre-loaded.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">3</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Adjust Growth Levers</h4>
              <p className="text-slate-600 text-sm">Use slider interface to adjust each of the six growth levers independently. The live-updating results show isolated and combined impact in real time.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">4</div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Calculate Total Gains and ROI</h4>
              <p className="text-slate-600 text-sm">Output shows: revenue lift in dollars and percentage, Month-12 MRR, 12-month cumulative revenue, and paying customers at Month 12 — all with baseline comparison.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200 mb-8">
          <h4 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5" />Example Output and Interpretation</h4>
          <p className="text-slate-700 leading-relaxed mb-4">Consider a SaaS company with 500 paying customers, 300 new accounts per month, $49 ARPU, and 3% monthly churn. Under baseline assumptions (40% onboarding, 25% activation, 3% conversion, 1% expansion), the model projects approximately $378,000 in 12-month cumulative revenue.</p>
          <p className="text-slate-700 leading-relaxed">Improving onboarding completion to 65% and churn to 2% — realistic targets for a focused product team — projects over $480,000 in cumulative revenue, a <strong>$102,000 lift</strong>, and an MRR improvement of nearly $9,000 at Month 12.</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" />Tips for Accurate Inputs</h4>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>• Pull new account creations from your product analytics platform, not your CRM — many CRM records include duplicates and test accounts.</li>
            <li>• Validate ARPU against actual billing data rather than plan pricing; discount codes and grandfathered pricing pull realized ARPU below list price.</li>
            <li>• For churn, use revenue churn rather than logo churn if your customer base has high variance in contract size.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Example SaaS ROI Calculation</h2>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="font-semibold flex items-center gap-2"><PieChart className="w-5 h-5" />Sample Scenario: Marketing Automation Tool</h3>
          </div>
          <div className="p-6">
            <p className="text-slate-600 leading-relaxed mb-6">Consider a B2B marketing team at a 150-person company evaluating a marketing automation platform priced at $1,500/month for up to 10 seats. The team is currently spending 22 hours per week on manual campaign management tasks across three team members, at a loaded cost of $65/hour.</p>
            
            <h4 className="font-semibold text-slate-900 mb-3">Step-by-Step Input Values</h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4"><span className="text-sm text-slate-500">Monthly Subscription</span><div className="font-semibold text-slate-900">$1,500 ($18,000/year)</div></div>
              <div className="bg-slate-50 rounded-lg p-4"><span className="text-sm text-slate-500">Implementation</span><div className="font-semibold text-slate-900">$4,500</div></div>
              <div className="bg-slate-50 rounded-lg p-4"><span className="text-sm text-slate-500">Team Size</span><div className="font-semibold text-slate-900">3 marketing managers</div></div>
              <div className="bg-slate-50 rounded-lg p-4"><span className="text-sm text-slate-500">Hours Saved/Week</span><div className="font-semibold text-slate-900">7.3 hours per user</div></div>
              <div className="bg-slate-50 rounded-lg p-4"><span className="text-sm text-slate-500">Loaded Hourly Rate</span><div className="font-semibold text-slate-900">$65</div></div>
              <div className="bg-slate-50 rounded-lg p-4"><span className="text-sm text-slate-500">Revenue Impact</span><div className="font-semibold text-slate-900">15% increase in qualified leads</div></div>
            </div>

            <h4 className="font-semibold text-slate-900 mb-3">Calculation Process</h4>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Annual Time Savings Value</span>
                <span className="font-semibold text-slate-900">$74,166</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Annual Revenue Impact</span>
                <span className="font-semibold text-slate-900">$162,835</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Total Annual Benefit</span>
                <span className="font-semibold text-emerald-600">$236,001</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Total Annual Cost</span>
                <span className="font-semibold text-rose-600">$22,500</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-emerald-50 rounded-lg px-3">
                <span className="font-semibold text-slate-900">Net Annual Profit</span>
                <span className="font-bold text-emerald-700">$213,501</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-center">
              <div className="text-sm opacity-90 mb-1">Final ROI Result</div>
              <div className="text-5xl font-bold mb-2">948%</div>
              <div className="text-lg opacity-90">Net annual return on the marketing automation investment</div>
              <div className="mt-4 text-sm opacity-75">Payback period: approximately 35 days</div>
            </div>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed text-sm">This level of ROI is consistent with Nucleus Research benchmarks for marketing automation in mid-market B2B contexts, which average 300–1200% depending on pipeline size and adoption quality.</p>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits of Using a SaaS ROI Calculator</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Zap, title: "Quick, Informed Decision-Making", text: "Speed of decision is itself a competitive advantage. A ROI calculator reduces the time from 'we should evaluate this' to 'here is a defensible business case' from weeks to hours. IDC research found that companies that formalize technology evaluation processes report 28% faster decision cycles without a reduction in decision quality." },
            { icon: Wallet, title: "Optimize SaaS Budgets", text: "The average enterprise organization manages 364 SaaS applications (BetterCloud, 2023). Without ROI measurement, budget optimization is subjective. With ROI data, finance teams can build a stack rank of tools by return generated per dollar spent. Zylo's SaaS Management Index found that organizations conducting annual ROI reviews reduce SaaS spend by an average of 21% without capability loss." },
            { icon: BarChart3, title: "Data-Driven Investment Justification", text: "Internal budget approval processes almost universally require written business cases for new software above $10,000/year. A ROI calculator produces the quantitative backbone of that case in minutes. Harvard Business Review research found that proposals supported by formal ROI analysis are approved 67% more often and receive larger initial budget allocations." },
            { icon: Layers, title: "Compare Multiple Tools Easily", text: "ROI calculators create a standardized evaluation currency. When comparing two competing platforms, the calculator collapses complexity into comparable net return figures. This prevents the common cognitive error of anchoring on sticker price rather than net value, which consistently leads organizations to underinvest in high-ROI tools." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-indigo-50 rounded-lg w-fit mb-4"><item.icon className="w-5 h-5 text-indigo-600" /></div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Limitations of ROI Calculators</h2>
        <div className="space-y-6">
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <h3 className="font-semibold text-rose-900 mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5" />Doesn't Capture Qualitative Benefits</h3>
            <p className="text-slate-700 leading-relaxed">Net Promoter Score (NPS) improvements, design quality, reduced cognitive load, team morale — none of these translate cleanly into a ROI formula. Yet Salesforce research consistently shows that user experience quality predicts adoption rates, and adoption is the primary driver of ROI realization in SaaS. A tool with mediocre ROI projections but exceptional UX may outperform a theoretically superior tool through higher engagement.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5" />Relies on Estimated Inputs</h3>
            <p className="text-slate-700 leading-relaxed">Garbage in, garbage out. A ROI calculator is only as accurate as the inputs it receives. Vendor-supplied assumptions about time savings and revenue impact are typically drawn from best-case customer deployments — the top quartile of outcomes, not the median. An independent analysis by Forrester found that realized customer outcomes averaged 35–60% below vendor projections in the first year of deployment.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><Info className="w-5 h-5" />May Oversimplify Complex Business Impact</h3>
            <p className="text-slate-700 leading-relaxed">Large organizations are non-linear systems. A CRM rollout across a 200-person sales organization triggers change management costs, temporary productivity dips during transition, workflow redesign, and retraining — none of which appear in a standard ROI model. Sophisticated buyers supplement ROI calculators with qualitative assessments, reference customer conversations, and phased pilots that generate real performance data before full commitment.</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">What Factors Influence SaaS ROI Calculation</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Users, title: "Adoption Rate", text: "Adoption is the multiplier on every other ROI variable. A tool with 90% user adoption generates roughly 2.25x more value than the same tool at 40% adoption. Walkme's 2023 Digital Adoption report found that the average enterprise SaaS application sees only 45% feature adoption, meaning more than half of paid capabilities sit unused." },
            { icon: Zap, title: "Team Productivity", text: "The realized productivity impact depends heavily on organizational readiness: are processes documented, is change management resourced, and are success metrics defined? Bain & Company research found that companies in the top quartile of organizational effectiveness generate 2.5x higher ROI from identical technology investments." },
            { icon: Layers, title: "Integration with Existing Tools", text: "Isolated tools deliver limited ROI. The compounding value comes from integration — data flows that eliminate manual transfer, triggers that automate cross-platform workflows. MuleSoft's 2023 Connectivity Benchmark Report found that the average enterprise wastes 28% of IT budget resolving integration failures and data inconsistencies." },
            { icon: Clock, title: "Training and Onboarding Efficiency", text: "Time-to-value is directly controlled by onboarding design. Research from Gainsight found that customers who reach their first 'aha moment' within the first seven days have 3x higher 90-day retention than those who don't. For ROI, faster time-to-value means the benefit side starts accruing sooner." },
            { icon: TrendingUp, title: "Market Conditions", text: "External factors affect ROI in ways a calculator cannot predict. A sales productivity platform delivers higher ROI in an expanding market where additional pipeline capacity gets absorbed by qualified demand. ROI projections are snapshots under current conditions — they require periodic recalibration as market dynamics shift." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="p-2 bg-indigo-50 rounded-lg w-fit mb-4"><item.icon className="w-5 h-5 text-indigo-600" /></div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Improve SaaS ROI</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"><Users className="w-6 h-6 text-emerald-600" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Increase User Adoption</h3>
              <p className="text-slate-600 leading-relaxed">The highest-leverage intervention for most organizations. WalkMe data shows that structured digital adoption programs improve feature utilization by an average of 47% within 90 days. For a $2,000/month tool running at 50% adoption, lifting adoption to 85% is the equivalent of getting $700/month in additional value at zero additional cost.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center"><Layers className="w-6 h-6 text-blue-600" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Choose Scalable Pricing Plans</h3>
              <p className="text-slate-600 leading-relaxed">Per-seat pricing penalizes adoption. Evaluate pricing models critically: usage-based pricing aligns cost with value delivered; per-seat pricing creates access friction; flat-rate enterprise pricing enables unlimited adoption. The ROI impact of pricing model often exceeds the ROI impact of feature differences between competing tools.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center"><Settings className="w-6 h-6 text-purple-600" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Automate Repetitive Tasks</h3>
              <p className="text-slate-600 leading-relaxed">The ROI of automation compounds over time in a way that one-time implementations do not. A workflow automation that saves 45 minutes per rep per day across a 20-person sales team saves 300 hours per week — or the equivalent of 7.5 full-time positions annually.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center"><TrendingUp className="w-6 h-6 text-rose-600" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Reduce Churn</h3>
              <p className="text-slate-600 leading-relaxed">In the Saasfactor ROI model, churn is the metric with the highest compounding impact over a 12-month horizon. At 5% monthly churn, a 500-customer base retains only 282 customers by month 12. At 2% monthly churn, the same base retains 385 customers. OpenView's benchmark data shows that SaaS companies with net revenue churn below 0% command valuation multiples 3.5x higher.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center"><Target className="w-6 h-6 text-amber-600" /></div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Optimize Workflows</h3>
              <p className="text-slate-600 leading-relaxed">ROI degradation often comes not from the tool but from the workflow around it. Manual steps that exist before or after a tool interaction, approval chains that circumvent automation, and reporting processes that duplicate data all reduce net time savings. A quarterly workflow audit consistently surfaces 15–25% efficiency recovery opportunities without any additional software investment.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">SaaS ROI vs Traditional ROI</h2>
        <p className="text-slate-600 leading-relaxed mb-6">Traditional ROI was designed for capital expenditure: buy an asset, extract value over its useful life, depreciate it on the balance sheet. SaaS fundamentally breaks this model. There is no asset to depreciate, no useful life to estimate, and no residual value at the end of a contract. The entire investment is expensed, the benefit is ongoing, and the switching cost is structurally lower than any prior software model.</p>
        
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Differences</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left p-4 font-semibold text-slate-900 border border-slate-200">Dimension</th>
                <th className="text-left p-4 font-semibold text-indigo-900 border border-slate-200">SaaS ROI</th>
                <th className="text-left p-4 font-semibold text-slate-900 border border-slate-200">Traditional ROI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Investment Type", "Recurring subscription", "One-time capital outlay"],
                ["Payback Horizon", "Months (typically 3–18)", "Years (often 3–7)"],
                ["Scalability", "Elastic — scales with usage", "Fixed capacity"],
                ["Switching Cost", "Low — cancel anytime", "High — sunk costs"],
                ["Value Visibility", "Real-time dashboards", "Post-hoc financial reports"],
                ["Hidden Costs", "Integrations, seat creep", "Maintenance, hardware"],
                ["Risk Profile", "Operational risk", "Capital risk"]
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-4 font-medium text-slate-900 border border-slate-200">{row[0]}</td>
                  <td className="p-4 text-slate-700 border border-slate-200">{row[1]}</td>
                  <td className="p-4 text-slate-700 border border-slate-200">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Recurring vs One-Time Investments</h4>
            <p className="text-slate-600 text-sm leading-relaxed">One-time capital investments create a sunk cost dynamic. SaaS subscriptions are theoretically frictionless to cancel — which means the ROI case must be continuously re-proven rather than made once at acquisition. This creates a healthier accountability structure.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Long-Term Value vs Short-Term Gain</h4>
            <p className="text-slate-600 text-sm leading-relaxed">Traditional software amortized over 5–7 years rewards patience. SaaS ROI, driven by compounding retention and expansion, rewards early action. The difference in 12-month cumulative revenue between addressing churn in month 1 versus month 6 is not linear — it's exponential.</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use Saasfactor's ROI Calculator?</h2>
        <p className="text-slate-600 leading-relaxed mb-6">Most ROI calculators are lead generation tools dressed up as calculators — they collect an email address in exchange for a generic output that could have been produced with a spreadsheet. Saasfactor's calculator is purpose-built for SaaS operators who need actionable funnel intelligence, not marketing qualified leads.</p>
        <p className="text-slate-600 leading-relaxed mb-6">The growth lever framework — mapping the sequential funnel from account creation through onboarding, activation, conversion, retention, and expansion — reflects how SaaS revenue actually works. The compounding model shows not just where you are, but the trajectory you're on and specifically which interventions change that trajectory most.</p>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">&lt; 5 min</div>
            <div className="text-sm opacity-90">Complete the full analysis with eight inputs, four with conservative defaults pre-loaded</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">6 Levers</div>
            <div className="text-sm opacity-90">Interactive scenario modeling for founders, finance teams, and decision-makers</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">$ Impact</div>
            <div className="text-sm opacity-90">Individual lever impact table for stakeholder presentations and board decks</div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <ul className="space-y-3">
            {[
              "Quick and easy: Complete the full analysis in under five minutes with eight inputs, four of which have conservative defaults pre-loaded.",
              "Perfect for founders, finance teams, and decision-makers: The progressive input flow and live-updating results make it usable for non-technical audiences without sacrificing analytical depth.",
              "Helps justify SaaS investments to stakeholders: The individual lever impact table — showing each growth variable's isolated dollar contribution — produces exactly the kind of quantitative decomposition that finance teams and boards require."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem delay={0.2} question="What is a good ROI for SaaS?" answer={<p>Context determines the benchmark. For individual SaaS tool evaluations, a 300%+ first-year ROI is generally considered strong — meaning the tool returns four times its cost. For SaaS companies evaluating their own product's ROI delivered to customers, net revenue retention above 110% (meaning expansion revenue more than offsets churn) is a widely accepted marker of a healthy value proposition. Nucleus Research places the average verified ROI for enterprise SaaS implementations at 671%.</p>} />
          <FAQItem delay={0.25} question="How accurate is a SaaS ROI calculator?" answer={<p>A SaaS ROI calculator is as accurate as its inputs and as honest as its assumptions. Vendor-provided calculators typically use optimistic defaults drawn from top-quartile case studies. Independent calculators like Saasfactor's use conservative defaults based on industry medians. The Forrester finding that actual outcomes average 35–60% below vendor projections in year one argues for discounting any ROI estimate by at least 25–30% when making final budget decisions.</p>} />
          <FAQItem delay={0.3} question="How do you measure SaaS success?" answer={<p>SaaS success is measured across three horizons. Short term (0–90 days): activation rate, time-to-value, and adoption breadth. Medium term (90 days to 12 months): feature utilization depth, net promoter score, and expansion revenue per customer. Long term (12 months+): net revenue retention, customer lifetime value (LTV), and LTV-to-CAC ratio. A healthy SaaS business has NPS above 30, net revenue retention above 100%, and LTV:CAC above 3:1.</p>} />
          <FAQItem delay={0.35} question="Can ROI be negative?" answer={<p>Absolutely. Negative ROI occurs when total costs — direct subscription, implementation, training, opportunity cost of employee time diverted, and integration overhead — exceed total quantifiable benefits. Research from Blissfully found that 23% of enterprise SaaS subscriptions generate negative ROI, primarily due to low adoption, duplicate functionality with existing tools, or poor process fit. Negative ROI doesn't always mean the tool is bad — it often means the deployment strategy is wrong.</p>} />
          <FAQItem delay={0.4} question="How often should I recalculate SaaS ROI?" answer={<p>Quarterly for tools above $1,000/month or with direct revenue attribution. Annually for the full stack. ROI is not static — adoption rates change, market conditions shift, team size grows, and competitive alternatives emerge. Companies that recalculate annually catch value degradation 18 months earlier than those that review only at renewal, according to Zylo's SaaS Management research.</p>} />
          <FAQItem delay={0.45} question="Can ROI be negative if the tool underperforms?" answer={<p>Yes, and underperformance is more common than vendor sales cycles suggest. The most frequent causes are adoption failure (users don't change workflows), integration gaps (the tool creates data silos), feature mismatch (the core value proposition doesn't map to actual workflow needs), and support quality (implementation issues compound over months). A 90-day performance review against agreed success metrics is the most reliable safeguard.</p>} />
          <FAQItem delay={0.5} question="What's the difference between ROI and payback period for SaaS?" answer={<p>ROI measures total return as a ratio of investment. Payback period measures the time until cumulative returns equal the total investment. Both matter, but they answer different questions. ROI tells you how much you made; payback period tells you how quickly you stopped losing. In SaaS, payback period is particularly important for cash-constrained companies. The SaaS industry standard for healthy company-level CAC payback period is 12 months or less for SMB customers and 18 months or less for enterprise.</p>} />
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your SaaS ROI?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">Input eight numbers. Discover which of your six growth levers has the highest dollar impact on 12-month MRR. Walk away with a ranked action list and a defensible revenue projection — in under five minutes.</p>
          <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg inline-flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Try the Free SaaS ROI Calculator
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm opacity-75">No email required. Instant results.</p>
        </div>
      </motion.section>
    </motion.article>
  )
}
