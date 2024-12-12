import React from 'react';

const Map = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission Locations</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[500px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1016863.8627328428!2d-78.24534019374998!3d8.417522900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e50a78a11ada933%3A0x6a3f11f5357a8c8f!2sDari%C3%A9n%20Province%2C%20Panama!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;