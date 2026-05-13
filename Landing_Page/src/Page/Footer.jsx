export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              LearnHub
            </h2>

            <p className="text-sm leading-6">
              LearnHub is an online learning platform where students can
              improve their skills through expert-led courses, real-world
              projects, and interactive learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-600 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/courses"
                  className="hover:text-blue-600 transition"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-blue-600 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Categories
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-blue-600 transition cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-blue-600 transition cursor-pointer">
                App Development
              </li>

              <li className="hover:text-blue-600 transition cursor-pointer">
                Data Science
              </li>

              <li className="hover:text-blue-600 transition cursor-pointer">
                UI/UX Design
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Subscribe
            </h3>

            <p className="text-sm mb-4">
              Get the latest courses and updates directly in your inbox.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © 2026 LearnHub. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-blue-600 transition">
              Facebook
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              Instagram
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}