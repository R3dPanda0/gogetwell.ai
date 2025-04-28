import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface LinkItem {
  text: string
  path: string
}

const links: LinkItem[] = [
  { text: 'Privacy Policy', path: '/privacy-policy' },
  { text: 'Terms of Service', path: '/terms-of-service' },
  { text: 'Pricing Policy', path: '/pricing-policy' },
  { text: 'Editor Policy', path: '/editor-policy' },
]

const MainFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        
        {/* Left: Copyright */}
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-800">gogetwell.ai</span>
        </div>

        {/* Middle: Links */}
        <ul className="flex flex-wrap justify-center gap-4">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://x.com/gogetwellai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/gogetwellai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default MainFooter
