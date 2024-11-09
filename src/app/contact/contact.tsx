import Head from 'next/head'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center" id='contact'>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-orange-500 mb-6 text-center">
          Contact Us
        </h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-600">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows={8}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
