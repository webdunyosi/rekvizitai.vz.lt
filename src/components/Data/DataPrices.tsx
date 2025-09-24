import BusinessBg from "../../../public/Data/business-bg.png";
import Link from "next/link";

const DataPrices = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center rounded-lg bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${BusinessBg.src})` }}
      >
        <div className="p-10 md:p-20">
          <h2 className="mb-5 text-center text-xl font-bold md:text-4xl">
            Data prices
          </h2>
          <p className="mx-auto mb-10 w-1/2 text-center">
            Order data about companies and 12 months. their free upgrade
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md bg-white p-12 text-center text-black">
              <h3 className="mb-2 text-center text-xl font-semibold md:text-2xl">
                Data of 2,000 companies
              </h3>
              <p>10 cents per company</p>
              <div className="my-5 border"></div>
              <h3 className="mb-2 mt-8 text-center text-2xl font-semibold md:text-5xl">
                €198
              </h3>
              <p>Annual fee, excluding VAT</p>
              <Link
                className="mt-10 inline-block w-full rounded-md bg-main-blue px-6 py-3 text-white hover:bg-black"
                href="#"
              >
                Choose
              </Link>
            </div>
            <div className="rounded-md bg-white p-12 text-center text-black">
              <h3 className="mb-2 text-center text-xl font-semibold md:text-2xl">
                Data of 5,000 companies
              </h3>
              <p>7 cents per company</p>
              <div className="my-5 border"></div>
              <h3 className="mb-2 mt-8 text-center text-2xl font-semibold md:text-5xl">
                €349
              </h3>
              <p>Annual fee, excluding VAT</p>
              <Link
                className="mt-10 inline-block w-full rounded-md bg-main-blue px-6 py-3 text-white hover:bg-black"
                href="#"
              >
                Choose
              </Link>
            </div>
            <div className="rounded-md bg-white p-12 text-center text-black">
              <h3 className="mb-2 text-center text-xl font-semibold md:text-2xl">
                Data of 10,000 companies
              </h3>
              <p>6 cents per company</p>
              <div className="my-5 border"></div>
              <h3 className="mb-2 mt-8 text-center text-2xl font-semibold md:text-5xl">
                €569
              </h3>
              <p>Annual fee, excluding VAT</p>
              <Link
                className="mt-10 inline-block w-full rounded-md bg-main-blue px-6 py-3 text-white hover:bg-black"
                href="#"
              >
                Choose
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPrices;
