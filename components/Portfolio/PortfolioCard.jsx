import Badge from "../Common/Badge";
import { useState } from "react";

const PortfolioCard = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card_stylings overflow-hidden h-full flex flex-col hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Project Image with Loading State */}
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-MidNight animate-pulse flex items-center justify-center">
            <div className="text-Green">Loading...</div>
          </div>
        )}
        <img
          src={data?.image}
          alt={data?.projectName}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Featured Badge */}
        {data?.featured && (
          <div className="absolute top-2 right-2">
            <span className="bg-Green text-MidNight text-xs px-2 py-1 rounded-full font-bold">
              Featured
            </span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-MidNight bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <a
              href={data?.url}
              target="_blank"
              rel="noreferrer"
              className="bg-Green text-MidNight px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block mb-2"
            >
              Live Demo
            </a>
            {data?.caseStudy && (
              <a
                href={data?.caseStudy}
                className="bg-MidNight text-Snow border border-Green px-4 py-2 rounded-lg font-semibold hover:bg-Green hover:text-MidNight transition-colors inline-block ml-2"
              >
                Case Study
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-Snow leading-tight flex-1 mr-2">
            <a 
              href={data?.url} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-Green transition-colors"
            >
              {data?.projectName}
            </a>
          </h3>
          <div className="text-Snow hover:text-Green transition-colors transform hover:scale-110">
            <a href={data?.url} target="_blank" rel="noreferrer">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="external-link-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        
        <p className="text-sm text-LightGray font-normal mb-4 flex-1">
          {data?.projectDetail}
        </p>
        
        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {data.technologiesUsed.slice(0, 4).map((tech, index) => (
            <Badge key={index} title={tech.tech} />
          ))}
          {data.technologiesUsed.length > 4 && (
            <span className="text-xs text-LightGray bg-MidNight px-2 py-1 rounded">
              +{data.technologiesUsed.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;