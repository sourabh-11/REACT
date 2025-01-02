import countryfaces from '../Api/CountryData.json';

const About = () => {
  return (
    <div className="text-white w-[60%] m-auto mt-7 ">
      {/* Header */}
      <div className="flex justify-center flex-col items-center text-2xl font-bold">
        <h2>Here are the Interesting Facts</h2>
        <span>We&apos;re Proud of</span>
      </div>

      {/* Parent container with flex-wrap */}
      <div className="flex flex-wrap gap-6 mt-7">
        {countryfaces.map((country, key) => {
          const { id, countryName, capital, population, interestingFact } = country;
          return (
            <div
              key={id}
              className="p-3 bg-gradient-to-b from-[#080509] to-[#1a171c] rounded-2xl shadow-inner w-[calc(33.333%-1rem)] text-left hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{countryName}</h2>
              <p className="text-gray-400 text-sm mb-2">
                <strong>Capital:</strong> {capital}
              </p>
              <p className="text-gray-400 text-sm mb-2">
                <strong>Population:</strong> {population}
              </p>
              <p className="text-gray-400 text-sm">
                <strong>Interesting Fact:</strong> {interestingFact}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
