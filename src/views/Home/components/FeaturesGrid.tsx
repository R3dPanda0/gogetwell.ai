import React from 'react'
import {
    BiCreditCard,
    BiGlobeAlt,
    BiMessageSquare,
    BiSearch,
    BiTrendingUp,
} from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

const solutions = [
    {
        icon: <BiGlobeAlt />,
        title: 'Custom AI-Powered Website',
        description:
            'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
        color: 'bg-blue-500',
    },
    {
        icon: <FaUserSecret />,
        title: 'Enhanced Patient Conversion',
        description:
            'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
        color: 'bg-purple-500',
    },
    {
        icon: <BiMessageSquare />,
        title: 'Real-Time Query Handling',
        description:
            'Instant response system for patient inquiries with AI-powered chat support.',
        color: 'bg-green-500',
    },
    {
        icon: <FiFileText />,
        title: 'Medical Report Analysis',
        description:
            'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
        color: 'bg-orange-500',
    },
    {
        icon: <BiTrendingUp />,
        title: 'Improved Lead Generation',
        description:
            'Data-driven lead generation strategies to attract and engage potential patients.',
        color: 'bg-pink-500',
    },
    {
        icon: <BsDatabase />,
        title: 'Comprehensive Healthcare Database',
        description:
            'Extensive medical information database for accurate patient guidance and support.',
        color: 'bg-indigo-500',
    },
    {
        icon: <LuLanguages />,
        title: 'Multilingual Support',
        description:
            'Breaking language barriers with comprehensive multilingual communication tools.',
        color: 'bg-red-500',
    },
    {
        icon: <BiCreditCard />,
        title: 'Seamless Payment Handling',
        description:
            'Secure and efficient payment processing for medical services globally.',
        color: 'bg-teal-500',
    },
    {
        icon: <BiSearch />,
        title: 'Marketing And SEO Support',
        description:
            'Optimized digital presence with advanced SEO and marketing strategies.',
        color: 'bg-cyan-500',
    },
]

const FeaturesGrid: React.FC = () => {
    return (
        <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f6f9ff] to-[#f0f4ff]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Transformative Healthcare Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Empower your medical practice with cutting-edge AI tools
                        designed for modern healthcare challenges
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/95 backdrop-blur-sm rounded-t-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 border border-white/20 overflow-hidden"
                        >
                            <div className="p-8">
                                <div
                                    className={`mb-6 inline-flex items-center justify-center p-4 rounded-2xl ${solution.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}
                                >
                                    <div
                                        className={`text-3xl ${solution.color.replace('bg', 'text')}`}
                                    >
                                        {solution.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {solution.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 origin-left transform scale-x-0 group-hover:scale-x-100"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesGrid
