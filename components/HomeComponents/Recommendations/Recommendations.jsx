import axios from "axios";
import { useQuery } from "react-query";
import RecommendationCard from "./RecommendationCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const Recommendations = () => {
  const { isLoading, error, data } = useQuery("recommendations", () =>
    axios
      .get("api/recommendations")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  // Get featured testimonials (first 3)
  const featuredTestimonials = data?.slice(0, 3) || [];

  return (
    <div className="px-2 md:px-8 py-4">
      {/* Featured Section */}
      <div className="mb-8">
        <div className="text-lg font-bold text-Snow mb-4">Featured Recommendations</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {isLoading
            ? [1, 2, 3].map((key) => (
                <ParagraphSkeleton key={key} className={"p-8 h-full w-full relative"} />
              ))
            : featuredTestimonials.map((data, key) => (
                <RecommendationCard key={key} data={data} featured={true} />
              ))}
        </div>
      </div>

      {/* All Recommendations */}
      <div>
        <div className="text-lg font-bold text-Snow mb-4">All Recommendations</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading
            ? [1, 2, 3, 4].map((key) => (
                <ParagraphSkeleton key={key} className={"p-8 h-full w-full relative"} />
              ))
            : data?.map((data, key) => (
                <RecommendationCard key={key} data={data} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;