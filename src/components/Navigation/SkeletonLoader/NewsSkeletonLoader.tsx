const NewsSkeletonLoader = () => {
  return (
    <div className="my-5 w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5 animate-pulse">
      {[...Array(5)].map((_, index) => (
        <article
          key={index}
          className="mt-7 flex flex-col items-center gap-3 sm:mt-4 sm:flex-row sm:items-stretch"
        >
          <div className="w-48 h-28 bg-gray-300 rounded-md max-md:w-full"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsSkeletonLoader;
