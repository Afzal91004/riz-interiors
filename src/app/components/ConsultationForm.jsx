"use client";
import { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      // Direct fetch to the correct API endpoint
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

      const response = await fetch(`${API_URL}/api/consultations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          loading: false,
          success: true,
          error: null,
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        loading: false,
        success: false,
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="consultation-form-container">
      {submitStatus.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your consultation request has been submitted. We'll contact you
            soon.
          </span>
        </div>
      )}

      {submitStatus.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {submitStatus.error}</span>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="+91 98765 43210"
            required
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option className="text-gray-700" value="">
              Select a service
            </option>
            <option className="text-gray-700" value="residential">
              Residential Consultation
            </option>
            <option className="text-gray-700" value="commercial">
              Commercial Consultation
            </option>
            <option className="text-gray-700" value="virtual">
              Virtual Consultation
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe your space, needs, and any specific requirements..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitStatus.loading}
          className={`w-full ${
            submitStatus.loading
              ? "bg-indigo-400"
              : "bg-indigo-600 hover:bg-indigo-700"
          } text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex justify-center items-center`}
        >
          {submitStatus.loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Request Consultation"
          )}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
