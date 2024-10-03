/* eslint-disable react/prop-types */
import { useState } from "react";
const Country = ({ country, handleCountryDetails }) => {
  const [toggles, setToggles] = useState(false);
  const handleButtonClick = () => {
    setToggles(!toggles);
    handleCountryDetails(country);
  };
  return (
    <div className=" w-60 h-auto p-6 bg-gray-100 shadow hover hover:bg-slate-200 hover:rounded mt-6">
      <h1>{country?.name?.common}</h1>
      <img
        className="w-48 h-28"
        src={country?.flags?.svg}
        alt={country?.flags?.alt}
      />
      <p className="text-sm font-semibold mt-2 text-gray-600">
        Capital:{country?.capital}
      </p>
      <p className="font-bold text-slate-900">
        Population : {country?.population}
      </p>
      <p>Region : {country?.region}</p>
      <p>area : {country?.area}</p>

      <div>
        <button
          className={
            `bg-green-400 border-2 border-green-400 w-full rounded-md mb-0 mt-5 text-center  px-5  py-1 ` +
            (toggles ? `bg-red-400 cursor-not-allowed border-red-400` : "")
          }
          onClick={handleButtonClick}
        >
          {toggles ? "Visited" : "Details"}
        </button>
      </div>
    </div>
  );
};

export default Country;
