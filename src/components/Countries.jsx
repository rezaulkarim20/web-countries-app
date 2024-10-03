import { useState, useEffect, useRef } from "react";
import Country from "./Country";

const Countries = () => {
  const [Countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [isModalOpen, setIsModelOpen] = useState(false);
  
  //fetch data from API
  useEffect(() => {
    const fetchCountries = async () => {
      const fetchData = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await fetchData.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  const handleCountryDetails = (country) => {
    const countryCurrencies = Object.entries(country?.currencies || {}).map(
      (currency) => {
        const [code, { name, symbol }] = currency;
        return code, name, symbol;
      }
    );
    setCountry({
      ...country,
      flag: country?.flags?.svg,
      population: country?.population,
      area: country?.area,
      Currencies: countryCurrencies,
    });
    setIsModelOpen(true);
  };

  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      setIsModelOpen();
    }
  };


  return (
    <>
      {/* modal */}

      {isModalOpen && (
        <div
          ref={modelRef}
          onClick={closeModel}
          className="fixed inset-0 bg-gray-300 bg-opacity-90 flex justify-center items-center z-50 mt-20"
        >
          <div className="bg-gray-200 p-5 pl-14 rounded-lg max-w-h1/2 shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{country?.name?.common}</h1>

              <button
                className="text-gray-500 hover:text-gray-800 bg-red-300 w-10 rounded-full h-10 "
                onClick={() => setIsModelOpen(false)}
              >
                x
              </button>
            </div>
            <div className="mt-4 space-y-2">
              <img className="w-48 h-28" src={country?.flag} />
              <p>
                <strong>Population:</strong> {country?.population}
              </p>
              <p>
                <strong>Region:</strong> {country?.region}
              </p>
              <p>
                <strong>Area:</strong>
                {country?.area}
              </p>
              <p>
                <strong>Capital:</strong>{" "}
                {country?.capital ? country?.capital : "Capital not availlable"}
              </p>
            </div>
            {/*display correncies dynamicaly*/}
            <div className="mt-1 flex gap-1">
              <strong>Currencies:</strong>
              <ul>
                {country?.currencies?.length > 0 ? (
                  country?.currencies?.map(({ code, name, symbol }) => (
                    <li key={code}>
                      {name} ({symbol}) - {code}
                    </li>
                  ))
                ) : (
                  <p>Currencies not availables</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
      {/*country list & sort **/}

      <div className="grid grid-cols-5 gap-10 m-8 mt-20 md-">
        {Countries.sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        }).map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleCountryDetails={handleCountryDetails}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
