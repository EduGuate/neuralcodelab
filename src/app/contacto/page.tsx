"use client"; // Make sure to add this line if you're using Next.js (React Server-side rendering)

export default function Contact() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-600 text-white w-full text-center py-20 shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Do You Have Questions?</h1>
        <p className="text-lg max-w-3xl mx-auto">
          We&apos;re here to answer any questions you may have about us. Click the button below to send us a direct email.
        </p>
      </div>
    
      {/* Call to Action Contact Section */}
      <main className="flex flex-col items-center justify-center py-16">
        <div className="p-10 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Contact Us by Email</h2>
          <p className="text-center text-gray-500 mb-6">
            Click the button, and we&apos;ll take you to your default email app.
          </p>

          <div className="text-center">
            <a 
              href="mailto:devlewiso@outlook.com?subject=Inquiry from the website"
              className="px-10 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-colors duration-300 ease-in-out"
            >
              Send Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}