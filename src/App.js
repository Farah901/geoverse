import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import lightlogo from './images/2.png'; 

function Api() {
  const [countries, setCountries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? countries.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === countries.length - 1 ? 0 : prevIndex + 1));
  };

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCountry(null);
  };

  if (!countries.length) {
    return <div>Loading...</div>;
  }

  const currentCountry = countries[currentIndex];

  return (
    <div className="app-container">
      <div className='logo-container'>
        <img src={lightlogo} alt=""/>
        <h1>Explore the World, One Flag at a Time</h1>
      </div>
      <div className="slider-container">
        <button className="slider-button" onClick={handlePrevious}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6klEQVR4nOWb24vVVRTHP0ePjY16eknrLamMLJT+CCltHIMgmJQsMUm8TMxT+FaGTWqW1gRCUdRDkV2IeqwJwm52kektUiwvWfacc7E4xhrWL5ar3zlnfmd++3fzCxsO++zfXmvt395rr9sPskMduBXoAzYBO4AntMnvR4B7dYyMLT0awDrgIDAGTAGXZ9im9JkXgH6dqxSYC6wC3gQuJhC4U5sEPgYeAOZRQFyr2/h0B0HOAJ8ArwEvAc9qk9+vA5/qmHZz/ApsA+ZTAMwBtgC/t2D2e2AYuBtYmGDeRcA9ujg/tJj7PLAZqJET7gK+jmHsD+AZYHmKtO7QxbgQQ+9LYCUZogYMxSi103oM5DiEQi8wCJyNUZqDWeyGBvChIz4BPJXxmZRFflqVo+XlAz0+QXADcNwR/AZYRn64DTjmeBKdsSRtQkuBE4ZIE3iuIFfSNWovNA1/J5TnVLAY+MlM/o9q36LhIeCS4fMkcGMaZ/64mfSimrJFxVpg3F3DXeuEmiqVaLJLaqsXHfKC/jZ8f9Tt7TDkzrxssbJgk9MJO7sxcqbMBKLwyoZDzpdYkcS8/co8fEw1bdkwz8nxxUyPwhZn5OR5z88Wt7udLDGHtpivTkb0wJOUH3ucA9XWYt3ubPtCuJwp+A/njFxbWw2sO39eHJuq4HEj1y+tQm5rnUsb0quLgyioDcCDAby6XudKx9ozR8wA8eezhAh82NBfH4DGXjP/23Em74QZkGYwI6nw0gYC0LnTzD/uTeR1zn7OU/jDAQMbY4bOFT7NwRy2vwj5shP+FTXEQmGfoXWg1cpIALNqbz7CakNPvNxp1I211EwYvS2T8JGuaxr/YC5q6kaMSEy+atve4zdD+2ZUGUQdkrSo4pu3GDX016AOQtQh2ZkqCy94w/CwETV5o44XKy68YMSb+7sCX4HrCyQ8KmPEy64sFmBD0Rdgh+mQLO3VdAS2S8dVrwT7zIpIfj4UirITPvPX4DLTIVnXkKi5LSjt1YwNofPeEKo7UzhYdrUAO+G6OFPYO0NSmUFFF2FNnDOEZlejP6SkJQvkcRz2t0r29LdamYrthB9bBUQaLiQmNTl5LkKImOAKl+X+n9v/jhkgBUnkuAgDgaNBb8UN6DMDLmgoOetFGNCW9hFYAPzp73+PuhYhRoOk6qoqsKn+U+1qkbc5oyjr5EgILHBRoMfaDe5xg3dTfgy7lyoytsVm88CklqKVFctdenw6AtQJNS0/jR76tqQFEj2a5InkOJpEua50KyeWYtkw4naypMYSYdBM0JxJdUWB8KgzrES5d4X3XYHk/RQf/a5M7t3ZTNZw9frjSqCouM8VSn6XRqbr+phSWSmkKhoedm/+pBZ4p4KlwM9OJxwqyO3QE+NWC683pU1oibtWoi0mpWh53vNxPEmBdxAsAt5zBKe0FK03Y/N2OOarlSMZZLensTPma41zWo3VG1jwIWeuR/d811fdbAIMRx0jkSu9txvDowOtfc6ljdrnKdNKhJoaSLYQ0bYxZXx1wq8/G+qz73dhrMvOsdmYc5rtCk28VYsQ45i1x2RUU9Qj5sPJEe0bjdnevp1Sl7ajV5cH5phPZ//qIEiSNlH0T2fjsFCrT5/XSLNXmu3apFqgBzRUl4lmJzAkC3OLnm05u5KZjT6fl9/SJ/9Juuq/jE1o/Aunq4xri5OQywAAAABJRU5ErkJggg==" alt="circled-chevron-left"/>
        </button>
        <div className="country-card">
          <img
            src={currentCountry.flags.png}
            alt={`${currentCountry.name.common} flag`}
            className="flag-image"
          />
          <h2>{currentCountry.name.common}</h2>
          <h2>{currentCountry.capital}</h2>
          
          <button className="details-button" onClick={() => handleShowDetails(currentCountry)}>
            Show More
          </button>
        </div>
        <button className="slider-button" onClick={handleNext}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7klEQVR4nOWb24vVVRTHP8eOjU16einrLamMLJT+CCltHIMgsCRLTBIvE/MkvpWRk5qldYKgKOqhyC5EPdYEYTe7yPQWKZallj3nXCzGWMPasVrtc878zvyuxy9sOOyzf3vttX57r71uP8gPdeAmYADYCGwHdmqT3w8Bd+kYGVt5NIC1wEFgDJgCLs6yTekzzwKDOlclcBmwEngdOJ+A4U5tEvgQuBeYTwlxhW7jUx0Y+QX4CHgFeB54Spv8fhX4WMe0m+NnYCuwgBJgHrAZ+K3FYr8FRoA7gIUJ5l0E3KnC+a7F3GeBTUCNgnA78GVkYb8De4BlKdK6VYVxLkLvc2AFOaIGDEeU2ik9BnIcskI/MAT8GlGaQ3nshgbwviM+ATye85kUIT+hytGu5T09PpngWuCYI/gVsJTicDNw1K1JdMbitAktAY4bItPA0yW5ki5Xe2HarO+4rjkVXAP8YCb/W7Vv2fAAcMGs8wRwXRpn/piZ9LyasmXFGmDcXcNd64SaKpUw2QW11csOeUF/mXV/0O3tMOzOvGyxqmCj0wk7ujFypswEovCqhkPOl1iexLz9wjx8VDVt1TDf8fHZbI/CZmfkFHnPzxW3uJ0sMYe2WKBORnjgMaqPJ50D1dZi3eZs+1K4nCn4D6cNX1taDaw7f14cm17Bo4avn1qF3NY4lzZtr04U0HrgvgJ8+H7nSkftmcNmgPjzaeN+M/+LBQhhr6H/ZszknTAD0gxmBKx3XlveQrjN0B73JvJaZz9ngZoyXaQQxgzt//g0BzPe/gHCbNMJ4WU1vvLAPkP3QCvJSAAzSxS5E1YZmuLlzqBurKXphNHbqgmhYZwk8Q8kjzFj6oZFSEw+LxR1HM4YejegyiB0SNIiTxSxE0YNrdWogxA6JDtDjwvhNUNnA2ryho7nKAZ5CqHpzf1dOV2B3QhBrMe0scfMv6vsAliXhwC2mw7J0l5KR2CbdFzySnDASETy871+DX7ir8GlpkOyrnlBmHzBMf9SDobQWW8I1Z0pnFl2tQSm8FUxU9g7Q1KZ0avO0OqYM4RmV8MfUtLSa9s+YH+rZM9gK8n0WEDk+1YBkYYLiUlNTpYxwSKYX+6y3P9z+98yA6QgKcuYYBFBURsNeiM2YMAMOKeh5DRRU9N2XQHMXwn84e9/j7oWIYZBUnXVK7Cp/pPtapG3OqMoy5K3PN++jQI90m5wnxu8m+pjxL1U4bEtNpkHJrUUrapY5tLjMxGgTqhp+Wl46OuKFkj0aZIn8HEkifJd4SQnlmLV0HQ7WVJjiTBkJpieTXVFifCwM7pEuXeFd12B5D2UH4OuTO7tuUzWcPX640qgrLjbFUp+k0am6+pIqawUUpUND7o3f0ILvFPBEuBHpxMOleR26Iuk2GSt16dNaLG7VsIWk1K0Iu/52JqkwDsTLALecQSntBQtbeepk3k7Evlq5XBO2W12RL7WOK3VWP0ZMz7szPVwz3d91c0lwHDELSS40nu7MTw60NrnXNrQPk2ZViLU1ECyhYi2jenCVyX8+rOhPvt+F8a66BybDUV+Nuc18RYtQowt1h6TUU1RN82Hk03tG41sb99Oqkvb0asrAvPMp7N/dmAkSZso+6ezMSzU6tNnNNLslWa7NqkW6AEN1eWi2ckYkoW5Uc+2nF3JzIbP5+W39Ml/kq76N2OTNf4BVDCMbpdTMSwAAAAASUVORK5CYII=" alt="circled-chevron-right" />
        </button>
      </div>

      {showModal && selectedCountry && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times; {/* Close Button */}
            </button>
            <h2>{selectedCountry.name.common}</h2>
            <p><strong>Region: </strong>{selectedCountry.region}</p>
            <p><strong>Population: </strong>{selectedCountry.population}</p>
            <p>
              <strong>Currency: </strong>
              {selectedCountry.currencies
                ? Object.values(selectedCountry.currencies)
                    .map((currency) => `${currency.name} (${currency.symbol})`)
                    .join(', ')
                : 'No Currency Info'}
            </p>
            <p>
              <strong>Languages: </strong>
              {selectedCountry.languages
                ? Object.values(selectedCountry.languages).join(', ')
                : 'No Language Info'}
            </p>
            <p><strong>Map: </strong></p>
            <iframe
              src={`https://www.google.com/maps?q=${selectedCountry.name.common}&t=&z=8&ie=UTF8&iwloc=&output=embed`} // Increased zoom
              width="100%" 
              height="300" 
              style={{ border: 0 }}
              allowFullScreen=""
              loading='lazy'
            ></iframe>
          </div>
        </div>
      )}
      <div className="modal-overlay" style={{ display: showModal ? 'block' : 'none' }}></div>
    </div>
  );
}

export default Api;
