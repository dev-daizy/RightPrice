import React from 'react';
import Image from 'next/image';
import { Twitter, Instagram } from 'lucide-react'; // Ensure you have lucide-react installed for icons
const Contact = () => {
  return (
    <div className="contact-page py-10 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="mb-8 text-center">
        We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="John Doe" className="w-full p-3 border rounded-md" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" className="w-full p-3 border rounded-md" />
          </div>
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="How can we help you?" className="w-full p-3 border rounded-md" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} placeholder="Your message here..." className="w-full p-3 border rounded-md" />
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-3 bg-black-100 text-white rounded-xl">
            Send Message
          </button>
        </div>
      </form>
<div className="mt-12 bg-gray-100 p-6 rounded-lg">
  <h2 className="text-xl font-semibold mb-4 flex justify-center ">Other Ways To Reach Us</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    {/* Email */}
    <div>
      <h3 className="font-medium mb-2">Email Support</h3>
      <p className="break-words">deepanshusharma201411@gmail.com</p>
    </div>

    {/* Phone */}
    <div>
      <h3 className="font-medium mb-2">Phone</h3>
      <p>8368778025</p>
    </div>

    {/* Socials */}
    <div>
      <h3 className="font-medium mb-2">Other Socials</h3>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://x.com/dev_daizy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/dev_daizy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400 transition"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</div>


        </div>
  );
};

export default Contact;
