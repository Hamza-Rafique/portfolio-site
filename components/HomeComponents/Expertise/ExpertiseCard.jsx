import CardLayout from "../../Common/CardLayout";
import { formatTextWithBold } from "../../../utils/textFormatter";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-4 p-6 card_stylings hover:transform hover:scale-105 transition-all duration-300">
        {/* Title */}
        <div className="text-Snow text-lg font-bold leading-tight">
          {data.title}
        </div>
        
        {/* Description with formatted text */}
        <div className="text-sm text-LightGray font-normal leading-relaxed">
          {formatTextWithBold(data.desc)}
        </div>
        
        {/* Optional: Add icons or badges */}
        {data.technologies && (
          <div className="flex flex-wrap gap-2 mt-3">
            {data.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="bg-MidNight text-Green text-xs px-2 py-1 rounded border border-Green"
              >
                {tech}
              </span>
            ))}
            {data.technologies && data.technologies.length > 3 && (
              <span className="text-xs text-LightGray">
                +{data.technologies.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;