import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Visit Every Country in the World</h1>
      <p>Avaliable Countries is: {countries.length}</p>
      {countries.map((country) => (
        <p>{country.name.common}</p>
      ))}
    </div>
  );
}
export default App;
