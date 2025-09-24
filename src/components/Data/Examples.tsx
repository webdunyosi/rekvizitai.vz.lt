import Image from "next/image";
import Link from 'next/link';

const Examples = () => {
  return (
    <div>
      <div className="my-16 p-4">
        <h2 className="mb-8 text-center text-xl font-bold md:text-4xl">
          Examples of lists
        </h2>
        <p className="mb-7 text-center w-1/2 mx-auto">
          Try it and find out how many potential customers you have in
          Lithuania. Easily and quickly create a list of companies that interest
          you.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center border rounded-md py-8 px-4">
            <Image
              src="/Data/5.svg"
              alt="Work Image 1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="my-4 font-semibold text-xl md:text-2xl">Budget institutions in major regions</h3>
            <p className="mt-2 text-xl text-zinc-500">
            Budget institutions in Vilnius, Kaunas and Klaipėda regions with 10 or more employees
            </p>
            <span className="mt-3 block font-semibold text-xl">1442</span>
            <Link className="text-blue-600 hover:underline mt-2 inline-block font-bold" href="#">Show companies</Link>
          </div>
          <div className="text-center border rounded-md py-8 px-4">
            <Image
              src="/Data/2.svg"
              alt="Work Image 1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="my-4 font-semibold text-xl md:text-2xl">Financial companies in Kaunas</h3>
            <p className="mt-2 text-xl text-zinc-500">
            Budget institutions in Vilnius, Kaunas and Klaipėda regions with 10 or more employees
            </p>
            <span className="mt-3 block font-semibold text-xl">19</span>
            <Link className="text-blue-600 hover:underline mt-2 inline-block font-bold" href="#">Show companies</Link>
          </div>
          <div className="text-center border rounded-md py-8 px-4">
            <Image
              src="/Data/2.svg"
              alt="Work Image 1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="my-4 font-semibold text-xl md:text-2xl">Utena companies with contacts</h3>
            <p className="mt-2 text-xl text-zinc-500">
            Budget institutions in Vilnius, Kaunas and Klaipėda regions with 10 or more employees
            </p>
            <span className="mt-3 block font-semibold text-xl">149</span>
            <Link className="text-blue-600 hover:underline mt-2 inline-block font-bold" href="#">Show companies</Link>
          </div>
          <div className="text-center border rounded-md py-8 px-4">
            <Image
              src="/Data/2.svg"
              alt="Work Image 1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="my-4 font-semibold text-xl md:text-2xl">The most profitable Lithuanian companies</h3>
            <p className="mt-2 text-xl text-zinc-500">
            Budget institutions in Vilnius, Kaunas and Klaipėda regions with 10 or more employees
            </p>
            <span className="mt-3 block font-semibold text-xl">190</span>
            <Link className="text-blue-600 hover:underline mt-2 inline-block font-bold" href="#">Show companies</Link>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link
            className="text-xl font-bold text-blue-600 hover:underline md:text-2xl"
            href="#"
          >
            See prices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Examples;
