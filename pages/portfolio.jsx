import axios from "axios";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
  return (
    <BannerLayout>
        <h4 className="text-xl font-bold text-Snow">In My Portfolio I have not added most of the projects that i have worked with companies and private projects</h4>
        <h5 className="text-md font-bold text-Snow">to see more please contact me</h5>

      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        {isLoading
          ? [1, 2, 3, 4].map(() => (
              // eslint-disable-next-line react/jsx-key
              <ImageAndParagraphSkeleton className={"w-full object-cover"} />
            ))
          : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Portfolio;
