import smallBG from '@/assets/images/main-bg-small.png'
import { Button } from '@/components/ui'
import HomeNavbar from '@/components/shared/HomeNav'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void
    featuresRef: React.RefObject<HTMLElement>
    contactRef: React.RefObject<HTMLElement>
    aboutRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="!bg-[#01052f] w-full relative flex flex-col py-2 md:py-5 overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className="min-h-[90vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#01052f] via-[#0a113f] to-[#01052f] z-[-20]" />

                <div className="relative z-10 text-white w-full px-4 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 space-y-8 lg:max-w-2xl">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    AI Front Office
                                </span>
                                <br />
                                <span className="text-gray-200">
                                    for Healthcare Innovation
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                Transform your healthcare operations with
                                AI-powered solutions. Launch your digital
                                presence in minutes, not days.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <HcfSignupPopup
                                    buttonChildren={
                                        <Button
                                            variant="solid"
                                            className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl shadow-lg hover:shadow-blue-600/30 font-semibold"
                                        >
                                            Start Free Trial
                                        </Button>
                                    }
                                />
                                <Button
                                    variant="solid"
                                    className="h-14 px-8 text-lg bg-indigo-700 hover:bg-indigo-600 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-indigo-600/30 font-semibold flex items-center gap-2 group"
                                    onClick={() => scrollToSection(featuresRef)}
                                >
                                    <span className="group-hover:scale-110 transition-transform"></span>
                                    Watch Demo
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                                {[
                                    {
                                        value: '2100+',
                                        label: 'Qualified Doctors',
                                        icon: '👨⚕️',
                                    },
                                    {
                                        value: '1000+',
                                        label: 'Hospitals',
                                        icon: '🏥',
                                    },
                                    {
                                        value: '800+',
                                        label: 'Treatment Plans',
                                        icon: '📋',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="group p-4 backdrop-blur-sm bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">
                                                {item.icon}
                                            </span>
                                            <div>
                                                <div className="text-3xl font-bold text-blue-400">
                                                    {item.value}
                                                </div>
                                                <div className="text-gray-300 text-sm uppercase tracking-wide">
                                                    {item.label}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 lg:max-w-xl">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl transform hover:scale-[1.02] transition-all">
                                <img
                                    src={smallBG}
                                    alt="AI Healthcare Interface Preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#01052f]/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-lg font-semibold">
                                        AI Healthcare Interface
                                    </div>
                                    <div className="text-sm opacity-75">
                                        Real-time patient management demo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
