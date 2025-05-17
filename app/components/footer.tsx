import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-8 h-8 mr-2">
                <Image src="/logo.png" alt="ClikConvert Logo" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold">ClikConvert</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Done-for-you cold outreach that converts anonymous traffic into qualified sales conversations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Results
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ClikConvert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
