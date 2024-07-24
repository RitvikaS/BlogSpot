export function ContactUS() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-8xl lg:mx-0 border-b border-gray-200 text-center mb-12">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h2>
            <div className="mt-2 text-lg leading-8 text-gray-600 p-16">
              <p>
                We would love to hear from you! At Blog Spot, we value our
                readers & writers and appreciate your feedback, suggestions, and
                inquiries.
              </p>
              <p>
                Whether you have a question, want to collaborate, or simply want
                to share your thoughts with us, our team is here to assist you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 mx-auto max-w-8xl lg:mx-0">
            <div className="m-16">
              <p className="text-5xl font-medium text-gray-800">
                We are here to hear you
              </p>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                You can fill out the contact form below, providing us with your
                name, email address, and a message. We will make sure to respond
                to your inquiry as soon as possible.
              </p>
            </div>
            <div>
              <p className="text-5xl font-medium text-gray-800 mt-16">
                Get In Touch
              </p>
              <div className="mt-10">
                <div className="mt-4">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please enter your Name"
                  ></input>
                </div>

                <div className="mt-4">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please enter your Email Address"
                  ></input>
                </div>

                <div className="mt-4">
                  <label>Your Message:</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
