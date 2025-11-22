// Footer: Current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Wind Chill Calculation
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Function to calculate wind chill (Celsius)
function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

// Only calculate if conditions are met
if (temp <= 10 && wind > 4.8) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + " °C";
} else {
  document.getElementById("windchill").textContent = "N/A";
}
