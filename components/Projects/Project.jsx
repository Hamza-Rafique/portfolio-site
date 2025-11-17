import { useState } from "react";
import ImageAndParagraphSkeleton from "../Common/ImageAndParagraphSkeleton";
import PortfolioCard from "../Portfolio/PortfolioCard";

const Projectlists = ({ data, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Show 6 projects per page

  // Calculate total pages
  const totalPages = Math.ceil(data?.length / projectsPerPage) || 1;

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = data?.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects section
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <section id="projects-section" className="mb-12">
      {/* Header with Project Count */}
      <div className="px-2 md:px-8 py-4 flex justify-between items-center">
        <div>
          <div className="text-lg font-bold text-Snow">Featured Projects</div>
          <div className="text-sm text-LightGray mt-1">
            Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, data?.length || 0)} of {data?.length || 0} Projects
          </div>
        </div>
        
        {/* Quick Filters */}
        <div className="flex gap-2">
          <select 
            className="bg-MidNight  text-sm px-3 py-1 rounded border border-Green"
            onChange={(e) => setCurrentPage(1)}
          >
            <option value="all">All Projects</option>
            <option value="react">React</option>
            <option value="nextjs">Next.js</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid justify-center items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-6 px-2 md:px-8 my-6">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => (
              <ImageAndParagraphSkeleton
                key={index}
                className="w-full object-cover"
              />
            ))
          : currentProjects?.map((item, index) => (
              <PortfolioCard key={index} data={item} />
            ))}
      </div>

      {/* Pagination Controls */}
      {!isLoading && data?.length > projectsPerPage && (
        <div className="flex justify-center items-center space-x-2 mt-8 px-2 md:px-8">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-Snow bg-MidNight border border-Green rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-Green hover:text-MidNight transition-colors"
          >
            Previous
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === pageNumber
                  ? 'bg-Green text-MidNight font-bold'
                  : 'text-Snow bg-MidNight border border-Green hover:bg-Green hover:text-MidNight'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-Snow bg-MidNight border border-Green rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-Green hover:text-MidNight transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* Quick Jump */}
      {!isLoading && totalPages > 5 && (
        <div className="flex justify-center items-center mt-4 space-x-2">
          <span className="text-Snow text-sm">Jump to:</span>
          <select
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="bg-MidNight text-Snow text-sm px-3 py-1 rounded border border-Green"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <option key={page} value={page}>
                Page {page}
              </option>
            ))}
          </select>
        </div>
      )}
    </section>
  );
};

export default Projectlists;