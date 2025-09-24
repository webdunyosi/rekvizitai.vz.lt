import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  return (
    <div>
      <div className="my-16 p-4">
        <h2 className="text-center mb-12 text-xl md:text-4xl font-bold">How does it work?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center mb-5 lg:mb-0">
            <Image src="/Data/1.svg" alt="Work Image 1" width={100} height={100} className="mx-auto" />
            <p className="mt-2">Use the search filters and select the companies you are interested in or need</p>
          </div>
          <div className="text-center mb-5 lg:mb-0">
            <Image src="/Data/2.svg" alt="Work Image 2" width={100} height={100} className="mx-auto" />
            <p className="mt-2">Use the search filters and select the companies you are interested in or need</p>
          </div>
          <div className="text-center mb-5 lg:mb-0">
            <Image src="/Data/3.svg" alt="Work Image 3" width={100} height={100} className="mx-auto" />
            <p className="mt-2">Use the search filters and select the companies you are interested in or need</p>
            <Link href="#" className="text-blue-600 hover:underline">Example data file</Link>
          </div>
          <div className="text-center mb-5 lg:mb-0">
            <Image src="/Data/4.svg" alt="Work Image 4" width={100} height={100} className="mx-auto" />
            <p className="mt-2">Use the search filters and select the companies you are interested in or need</p>
            <Link href="#" className="text-blue-600 hover:underline">Example data file</Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link href="#" className="text-blue-600 hover:underline font-bold text-xl md:text-2xl">See prices</Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
