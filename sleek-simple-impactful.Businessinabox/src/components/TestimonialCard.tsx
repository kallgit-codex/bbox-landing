import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
  results: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  image,
  results
}) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-800">{author}</h4>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>

      <blockquote className="text-gray-700 mb-4 italic">
        "{quote}"
      </blockquote>

      <div className="bg-orange-50 p-3 rounded-md">
        <p className="text-orange-700 font-semibold text-sm">
          Results: {results}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
