import { useState, FormEvent, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiPhone, BiSend, BiUser } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { Button, Notification, toast } from '@/components/ui'

const ContactForm = () => {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setIsSubmitting(true)
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            toast.push(
                <Notification title="Success" type="success">
                    Message sent successfully!
                </Notification>,
            )
            setFormState({ fullname: '', email: '', message: '' })
        } catch (err) {
            toast.push(
                <Notification title="Error" type="danger">
                    Failed to send message. Please try again.
                </Notification>,
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const ContactInfo = () => (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10 lg:pr-12"
        >
            <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Let's get in touch!
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Got questions about GoGetWell.AI? Our team is here to help.
                    Contact us for quick and friendly support.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 bg-indigo-100/80 rounded-lg">
                        <BiPhone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <p className="text-gray-600 mb-1">Phone</p>
                        <a
                            href="tel:+4918813968588"
                            className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                        >
                            +49 188 13968588
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 bg-indigo-100/80 rounded-lg">
                        <CgMail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <p className="text-gray-600 mb-1">Email</p>
                        <a
                            href="mailto:hello@gogetwell.al"
                            className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                        >
                            hello@gogetwell.al
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    Connect With Us
                </h3>
                <div className="flex gap-4">
                    <motion.a
                        whileHover={{ y: -2 }}
                        href="https://x.com/gogetwellai"
                        target="_blank"
                        className="p-3 bg-indigo-100/80 rounded-lg hover:bg-indigo-200/50 transition-colors"
                    >
                        <BsTwitter className="w-6 h-6 text-indigo-600" />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -2 }}
                        href="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        className="p-3 bg-indigo-100/80 rounded-lg hover:bg-indigo-200/50 transition-colors"
                    >
                        <BsLinkedin className="w-6 h-6 text-indigo-600" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )

    return (
        <div className="bg-gradient-to-b from-white to-indigo-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <ContactInfo />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl p-6 sm:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <div
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg ${
                                        focusedField === 'fullname'
                                            ? 'text-indigo-500'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    <BiUser />
                                </div>
                                <input
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formState.fullname}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('fullname')}
                                    onBlur={() => setFocusedField('')}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <div
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg ${
                                        focusedField === 'email'
                                            ? 'text-indigo-500'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    <CgMail />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField('')}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField('')}
                                    rows={5}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                    required
                                />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden"
                            >
                                <Button
                                    loading={isSubmitting}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-indigo-500/20 relative group flex items-center justify-center"
                                >
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        <motion.span
                                            animate={
                                                isSubmitting
                                                    ? { opacity: 0 }
                                                    : { opacity: 1 }
                                            }
                                            className="flex items-center gap-2"
                                        >
                                            <BiSend className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            Send Message
                                        </motion.span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    {isSubmitting && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ rotate: 360, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                        >
                                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        </motion.div>
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
