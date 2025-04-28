import { Phone, ArrowRight, MapPin } from "lucide-react";

const LocationMap = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <MapPin className="text-[#050a30] mr-2" size={24} />
        Our Location
      </h3>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        {/* Google Map Embed */}
        <div className="aspect-w-16 aspect-h-9 w-full h-80 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.187256351574!2d81.8400350751728!3d25.46542197753926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aaf33d147dec7%3A0xcd6fc7c3e4c6611e!2sRiz%20interiors%20%26%20decorators!5e0!3m2!1sen!2sin!4v1745735825730!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Address */}
        <div className="mt-6">
          <h4 className="font-bold text-gray-800 mb-2">Riz Interiors Studio</h4>
          <p className="text-gray-600">
            88/31B, Stanley Rd, Juhi Colony,
            <br />
            Vivek Vihar Colony, Civil Lines,
            <br />
            Prayagraj, Uttar Pradesh 211001
            <br />
            India
          </p>

          {/* Contact Info */}
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-gray-600">
              <Phone className="mr-2" size={16} />
              <a href="tel:+917860414973"> +91 78604 14973</a>
            </p>
            <p className="flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hello@rizinteriors.com
            </p>
          </div>
          {/* Directions Button */}
          <a
            href="https://maps.app.goo.gl/Nmpm2WfsDMZy6Hey8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 bg-[#050a30] hover:bg-violet-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
          >
            Get Directions
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
