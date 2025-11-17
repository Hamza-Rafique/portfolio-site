import React, { useState } from "react";
import CardLayout from "../../Common/CardLayout";

const RecommendationCard = ({ data, featured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Use fullView for the complete text and truncate if needed
  const displayText = isExpanded 
    ? data?.fullView 
    : (data?.fullView.length > 200 ? data?.fullView.substring(0, 200) + "..." : data?.fullView);

  return (
    <CardLayout>
      <div className={`p-6 h-full relative card_stylings transition ${featured ? 'border-2 border-Green' : ''}`}>
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={data?.image}
            className="w-12 h-12 border-Green border-2 rounded-full flex-shrink-0"
            alt={data?.name}
          />
          <div className="flex-1">
            <div className="text-Snow font-semibold hover:underline">
              <a href={data?.linkednURL} target="_blank" rel="noreferrer">
                {data?.name}
              </a>
            </div>
            <div className="text-xs text-LightGray mt-1 line-clamp-2">
              {data?.designation}
            </div>
          </div>
        </div>

        {/* Key Quote */}
        {data?.keyQuote && (
          <div className="mb-3">
            <div className="text-Snow font-semibold text-sm italic">
              "{data.keyQuote}"
            </div>
          </div>
        )}

        {/* Testimonial Content */}
        <div className="text-sm text-LightGray leading-relaxed">
          {displayText}
        </div>

        {/* Read More/Less Toggle */}
        {data?.fullView.length > 200 && (
          <button
            onClick={toggleExpand}
            className="text-Green text-xs mt-3 hover:underline focus:outline-none font-medium"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {featured && (
            <span className="bg-Green text-Snow text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
          <span className="bg-Blue text-Snow text-xs px-2 py-1 rounded-full capitalize">
            {data?.category}
          </span>
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationCard;