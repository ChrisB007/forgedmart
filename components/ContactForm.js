import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        formData.name &&
        formData.email &&
        formData.phone &&
        formData.message
      ) {
        const baseURL = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contacts`;

        const formResponse = await fetch(baseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
            },
          }),
        });
        const data = await formResponse.json();
        setformData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        console.log('some field is missing');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
      <div>
        <label htmlFor="name" className="sr-only">
          Full name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          id="name"
          autoComplete="name"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Full name"
          onChange={handleFormChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          autoComplete="email"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Email"
          onChange={handleFormChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          autoComplete="tel"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Phone"
          onChange={handleFormChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          rows={4}
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Enter your message here"
          defaultValue={''}
          onChange={handleFormChange}
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
