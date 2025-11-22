// Update current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Example: Wind Chill Calculation
const temp = parseFloat(document.getElementById("temp")?.textContent) || 0;
const wind = parseFloat(document.getElementById("wind")?.textContent) || 0;

function calculateWindChill(t, s) {
    // formula in Celsius
    return (13.12 + 0.6215*t - 11.37*Math.pow(s, 0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1);
}

if (temp <= 10 && wind > 4.8) {
    document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}
