import React from 'react'

const CarrierHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        {/* Job Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Design Intern Opportunity
          </h1>
          <p className="text-xl text-gray-600">Remote, 3-Months</p>
        </div>

        {/* Overview Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <p className="text-gray-700 mb-6">
            We are seeking a creative, fast-working, and results-driven Work-From-Home design intern 
            passionate about exploring new horizons in design.
          </p>

          {/* Key Areas */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Areas of Focus</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li>Packaging Design</li>
            <li>Product Design</li>
            <li>UI/UX Design</li>
            <li>User & Market Research</li>
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We're Looking For</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-medium">Educational Qualification:</h3>
              <p>B.Des/M.Des in a relevant field</p>
            </div>
            <div>
              <h3 className="font-medium">Portfolio Requirements:</h3>
              <p>A 2MB PDF portfolio showcasing 5 detailed projects</p>
            </div>
            <div>
              <h3 className="font-medium">Skills & Attributes:</h3>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Sincere, smart, and actively engaged with design trends</li>
                <li>Fast learner with a strong attention to detail</li>
                <li>Strong prototyping skills and software knowledge</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software Proficiency Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Software Proficiency (Must Have)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-medium mb-2">Design Tools:</h3>
              <p>Photoshop, Illustrator, Adobe Suite, Figma</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">3D Modelling:</h3>
              <p>Fusion 360, Rhino 3D, or AutoCAD</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Prototyping/Drafting:</h3>
              <p>AutoCAD, ArtiosCAD, or similar</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Rendering:</h3>
              <p>KeyShot</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Additional Skills:</h3>
            <p>Strong sketching and visualization abilities</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Interning with Us</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Internship Certificate upon completion</li>
            <li>Opportunity to showcase projects in your portfolio (under NDA)</li>
            <li>Exposure to real-world design challenges</li>
          </ul>
        </div>

        {/* Application CTA */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Apply?</h2>
          <p className="text-gray-700 mb-6">
            Send in your application along with your portfolio today!
          </p>
          <p className="text-red-600 font-medium">
            Application Deadline: February 6, 2025
          </p>
          <div className="mt-6 space-x-4">
            <a 
              href="https://forms.gle/Ls5GTD4D7xYrFTwN8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-theme-green-300 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors "
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarrierHome
