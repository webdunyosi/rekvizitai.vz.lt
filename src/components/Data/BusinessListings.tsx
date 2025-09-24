import BusinessBg from "../../../public/Data/business-bg.png";
import Image from "next/image";
import Link from 'next/link';

const BusinessListings = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center rounded-lg bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${BusinessBg.src})` }}
      >
        <div className="p-10 md:p-20">
          <h2 className="mb-12 text-center text-xl font-bold md:text-4xl">
            How can you make business listings?
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-md bg-white p-12 text-center text-black">
              <Image
                src="/Data/2.svg"
                alt="Work Image 1"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="mb-2 text-center text-xl font-semibold md:text-2xl">
                Choose for yourself
              </h3>
              <p>
                Use search filters and make your own business listings. You can
                download the latest data of saved companies at any time
                throughout the year.
              </p>
              <Link
                className="mt-2 inline-block rounded-md bg-main-blue px-6 py-3 text-white hover:bg-black"
                href="#"
              >
                Try it out
              </Link>
            </div>
            <div className="rounded-md bg-white p-12 text-center text-black">
              <Image
                src="/Data/2.svg"
                alt="Work Image 1"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="mb-2 text-center text-xl font-semibold md:text-2xl">
                Choose for yourself
              </h3>
              <p>
                Use search filters and make your own business listings. You can
                download the latest data of saved companies at any time
                throughout the year.
              </p>
              <Link
                className="mt-2 inline-block rounded-md bg-main-blue px-6 py-3 text-white hover:bg-black"
                href="#"
              >
                Try it out
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              className="text-xl font-semibold text-blue-600 hover:underline md:text-2xl"
              href="#"
            >
              Data subscription prices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessListings;
