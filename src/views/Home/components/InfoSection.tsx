import React, { ReactNode } from 'react'
import aboutUs from '@/assets/images/about_us.gif'
import mission from '@/assets/images/our_mission.gif'
import challenges from '@/assets/images/challenges_solve.gif'

interface SectionProps {
    img: any
    icon1: ReactNode
    icon2: ReactNode
    title: string
    content1: string
    content2: string
    icontitle1: string
    iconp1: string
    icontitle2: string
    iconp2: string
    reverse?: boolean
}

const Section: React.FC<SectionProps> = ({
    reverse,
    img,
    icon1,
    icon2,
    title,
    content1,
    content2,
    icontitle1,
    iconp1,
    icontitle2,
    iconp2,
}) => {
    return (
        <div
            className={`flex flex-col lg:flex-row gap-8 items-center py-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src={img}
                    alt={title}
                    className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                />
            </div>
            <div className="w-full lg:w-1/2">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-300 rounded-full mt-2" />
                </div>

                <div className="space-y-6 mb-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {content1}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {content2}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="p-3 bg-gradient-to-br from-primary to-blue-100 rounded-lg">
                            {icon1}
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                {icontitle1}
                            </h4>
                            <p className="text-gray-600">{iconp1}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="p-3 bg-gradient-to-br from-primary to-blue-100 rounded-lg">
                            {icon2}
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                {icontitle2}
                            </h4>
                            <p className="text-gray-600">{iconp2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FullPageSections = () => {
    const sections = [
        {
            img: aboutUs,
            icon1: (
                <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            title: 'About Us',
            content1:
                'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.',
            content2:
                'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.',
            icontitle1: 'Modern Solutions',
            iconp1: 'Leveraging AI technology for healthcare',
            icontitle2: 'Patient-Centric',
            iconp2: 'Personalized healthcare experiences',
            reverse: false,
        },
        {
            img: mission,
            icon1: (
                <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
            title: 'Our Mission',
            content1:
                'Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.',
            content2:
                'We strive to become the leading platform for healthcare tourism management and digital transformation.',
            icontitle1: 'AI-Powered Solutions',
            iconp1: 'Optimizing operations with advanced technology',
            icontitle2: 'Growth Focus',
            iconp2: 'Maximizing revenue and opportunities',
            reverse: true,
        },
        {
            img: challenges,
            icon1: (
                <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                </svg>
            ),
            title: 'The Challenges We Solve',
            content1:
                'Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.',
            content2:
                'Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.',
            icontitle1: 'Efficient Operations',
            iconp1: 'Streamlined booking and management',
            icontitle2: 'Enhanced Support',
            iconp2: 'Improved patient communication',
            reverse: false,
        },
    ]

    return (
        <div className="scroll-smooth max-w-7xl mx-auto px-4">
            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </div>
    )
}

export default FullPageSections
