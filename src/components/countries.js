import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './country.css'; // Import CSS file for styling

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error.message);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="CountryListContainer">
      {error && <p className="ErrorMessage">Error fetching data: {error}</p>}
      <div className="CountryGrid">
        {countries.map((country) => (
          <div className="CountryCard" key={country.name.common}>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
