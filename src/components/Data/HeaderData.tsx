import HeaderDataImage from "../../../public/hero-bg-desktop.png";

const HeaderData = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center bg-cover bg-center text-white mt-5 rounded-lg"
        style={{ backgroundImage: `url(${HeaderDataImage.src})` }}
      >
        <div className="rounded-lg p-20 text-center">
          <h1 className="text-4xl font-bold">
            Company data, lists, company databases
          </h1>
          <p className="mt-4 text-lg">
            Search from as many as 204,250 companies and choose the companies
            you are interested in or need. You can download the lists at any
            time. Company filter
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderData;
