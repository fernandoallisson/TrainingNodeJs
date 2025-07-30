const celsiusToFareheint = (value) => (value * 1.8) + 32;

const fareheintToCelsius = (value) => (value - 32) / 1.8;


module.exports = {
  celsiusToFareheint,
  fareheintToCelsius,
};

