import React, { useState, useEffect, createContext } from "react";

// importing data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  // defining states
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Loaction(any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Loaction type(any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price rang(any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates country
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];

    // set Property state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // create a function that checks if the string include '(any)'
    const isDefault = (str)=> {
      return str.split(' ').includes('(any)');
    };

    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);

    // get second value of the price which is the maximum price & parse it to number.
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouse = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (
        isDefault(country) &&
        isDefault(property) && 
        isDefault(price)) {
        return house;
      }

      // if country is not default
      if (
        !isDefault(country) &&
        isDefault(property) && 
        isDefault(price)) {
        return house.country === country;
      }

      // if property is not default
      if (
        !isDefault(property) &&
        isDefault(country) &&
        isDefault(price)){
          return house.type === property;
        }

      // if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house;
        }
      }
    });

    setTimeout(() => {
      return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        setHouses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;