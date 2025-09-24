const StockSkeletonLoader = () => {
  return (
    <div className="w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5 animate-pulse">
      <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4 bg-gray-300 h-6 w-48"></h3>
      <div className="mt-7">
        <table className="w-full table-auto">
          <tbody>
            {[...Array(8)].map((_, index) => (
              <tr className="flex justify-between" key={index}>
                <td className="h-6 bg-gray-300 w-40 rounded-md mb-2 inline-block"></td>
                <td className="h-6 bg-gray-300 w-20 rounded-md mb-2 inline-block"></td>
                <td className="h-6 bg-gray-300 w-16 rounded-md mb-2 inline-block"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 h-6 bg-gray-300 w-48 rounded-md"></div>
    </div>
  );
};

export default StockSkeletonLoader;
