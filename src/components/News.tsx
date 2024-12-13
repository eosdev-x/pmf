import React from 'react';

const News = () => {
  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">News & Updates</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpanamamission.org&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="800"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="max-w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default News;
