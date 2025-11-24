// -------------------
// Temple Data
// -------------------
const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888-05-21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015-06-07", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974-11-19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  { templeName: "Accra Ghana", location: "Accra, Ghana", dedicated: "2004-01-11", area: 17500, imageUrl: "https://example.com/accra.jpg" },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019-03-10", area: 41000, imageUrl: "https://example.com/rome.jpg" },
  { templeName: "Paris France", location: "Paris, France", dedicated: "2017-05-21", area: 44175, imageUrl: "https://example.com/paris.jpg" }
];

// -------------------
// Render Function
// -------------------
const container = document.getElementById("temple-cards");

function displayTemples(filteredTemples) {
  container.innerHTML = "";

  filteredTemples.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${t.templeName}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${new Date(t.dedicated).toLocaleDateString()}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

// -------------------
// Default view
// -------------------
displayTemples(temples);

// -------------------
// Filters
// -------------------
["home","old","new","large","small"].forEach(id => {
  document.getElementById(id).addEventListener("click", e => {
    e.preventDefault();
    switch(id) {
      case "home":
        displayTemples(temples);
        break;
      case "old":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
        break;
      case "new":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
        break;
      case "large":
        displayTemples(temples.filter(t => t.area > 90000));
        break;
      case "small":
        displayTemples(temples.filter(t => t.area < 10000));
        break;
    }
  });
});

// -------------------
// Footer
// -------------------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
