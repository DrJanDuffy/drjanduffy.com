import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
import { FileText, Download, BookOpen, Video, HelpCircle } from 'lucide-react'
export const metadata = {
  title: 'Resources | HOME THAT DID NOT SELL Resources | Dr. Jan Duffy',
  description:
    'Free resources for HOME THAT DID NOT SELL sellers: guides, reports, calculators, and educational content.',
}
export default function ResourcesPage() {
  const resources = [
    {
      icon: FileText,
      title: '7 Reasons your home did not sell',
      description: 'Free report revealing the 5 fatal mistakes that killed your listing and how to fix them.',
      type: 'Free Report',
      cta: 'Download Now',
    },
    {
      icon: Download,
      title: 'cost when your home will not sell Calculator',
      description: 'Calculate exactly how much money you are losing every day your listing sits expired.',
      type: 'Interactive Tool',
      cta: 'Calculate Now',
      link: '/tools/cost-calculator',
    },
    {
      icon: BookOpen,
      title: 'The 30-Day Sale Plan',
      description: 'Complete week-by-week breakdown of how to sell your HOME THAT DID NOT SELL in 30 days or less.',
      type: 'Guide',
      cta: 'View Plan',
      link: '/30-day-plan',
    },
    {
      icon: Video,
      title: 'Success Story Videos',
      description: 'Watch real testimonials from sellers who fired their agents and sold with Dr. Jan.',
      type: 'Video Content',
      cta: 'Watch Videos',
      link: '/success-stories',
    },
    {
      icon: FileText,
      title: 'Market Analysis Report',
      description: 'Current Las Vegas market conditions and what it means for HOMES THAT DID NOT SELL.',
      type: 'Market Report',
      cta: 'Get Report',
    },
    {
      icon: Download,
      title: 'Agent Performance Quiz',
      description: '60-second assessment to find out why your home DID NOT sell and what your agent did wrong.',
      type: 'Interactive Quiz',
      cta: 'Take Quiz',
      link: '/tools/blame-analyzer',
    },
    {
      icon: HelpCircle,
      title: 'Complete Seller\'s Guide',
      description: 'Comprehensive guide on evaluating agents, addressing concerns, preparing for consultation, and successfully relisting your home.',
      type: 'Guide',
      cta: 'Read Guide',
      link: '/guides/sellers-guide',
    },
  ]
  const faqs = [
    {
      question: 'What free resources does Dr. Jan Duffy offer for Las Vegas home sellers?',
      answer:
        'Dr. Jan Duffy offers free resources including "7 Reasons Your Home Did Not Sell" report, cost calculator for unsold homes, 30-day sale plan guide, agent performance quiz, and educational content. All resources are designed to help Las Vegas, Summerlin, and Henderson sellers understand why their homes did not sell.',
    },
    {
      question: 'How can I calculate the cost of my unsold home in Las Vegas?',
      answer:
        'Dr. Jan Duffy provides a free cost calculator tool that calculates exactly how much money you\'re losing every day your Las Vegas home sits unsold. The calculator factors in mortgage payments, HOA fees, insurance, utilities, and property taxes for Summerlin, Henderson, and surrounding areas.',
    },
    {
      question: 'What educational resources are available for Las Vegas home sellers?',
      answer:
        'Dr. Jan Duffy provides comprehensive resources including guides on why homes fail to sell, the 30-day sale plan, agent comparison tools, and market analysis for Las Vegas, Summerlin, and Henderson. All resources are free and designed to help sellers make informed decisions.',
    },
    {
      question: 'How do I access Dr. Jan Duffy\'s free resources for Las Vegas homes?',
      answer:
        'All free resources are available on the resources page, including downloadable reports, interactive calculators, guides, and educational content. Resources are specifically designed for Las Vegas, Summerlin, Henderson, and surrounding area home sellers whose homes did not sell.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                FREE RESOURCES
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Tools, guides, and reports to help you understand and fix your HOME THAT DID NOT SELL
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {resources.map((resource, index) => {
                  const Icon = resource.icon
                  return (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold">
                          {resource.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-black mb-3">{resource.title}</h3>
                      <p className="text-gray-700 mb-4">{resource.description}</p>
                      {resource.link ? (
                        <a
                          href={resource.link}
                          className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-6 py-2 rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors"
                        >
                          {resource.cta}
                        </a>
                      ) : (
                        <button className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-6 py-2 rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors">
                          {resource.cta}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-black mb-4">NEED PERSONALIZED HELP?</h2>
                <p className="text-xl mb-4">
                  Call me directly for a free consultation
                </p>
                <a
                  href="tel:7025001064"
                  className="text-3xl font-black hover:underline block"
                >
                  (702) 500-1064
                </a>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  GET YOUR FREE REPORT
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  "7 Reasons your home did not sell (And How to Fix Them in 30 Days)"
                </p>
                <LeadForm source="resources_page" buttonText="GET FREE REPORT" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
