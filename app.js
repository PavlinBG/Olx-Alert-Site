const form = document.querySelector('#search-form');
const tableBody = document.querySelector('#search-results tbody');
fetch("http://127.0.0.1:5500/ingredients").then(req => req.text()).then(console.log)

const cors = require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500/, http://127.0.0.1:5500/'
}));


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#search-query').value;
  const searchUrl = `https://www.olx.com.pk/items/q-${encodeURIComponent(searchQuery)}/`;
  const searchResponse = await fetch(searchUrl);
  const searchHtml = await searchResponse.text();
  const searchDoc = new DOMParser().parseFromString(searchHtml, 'text/html');
  const searchResults = searchDoc.querySelectorAll('.offer-wrapper');

  tableBody.innerHTML = '';

  searchResults.forEach((result) => {
    const titleElement = result.querySelector('.offer-title');
    const title = titleElement?.textContent.trim() || '-';
    const priceElement = result.querySelector('.price');
    const price = priceElement?.textContent.trim() || '-';
    const locationElement = result.querySelector('.breadcrumb li:last-child');
    const location = locationElement?.textContent.trim() || '-';
    const linkElement = result.querySelector('a');
    const link = linkElement?.href || '#';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>${price}</td>
      <td>${location}</td>
      <td><a href="${link}" target="_blank">View on OLX</a></td>
    `;

    tableBody.appendChild(row);
  });
});
//TO DO 
// Replace the ID below with the actual ID of the listing you want to monitor
 
 

 
//TO DO 
// URL of the OLX listing you want to check
 
//TO DO 
// Send a GET request to the OLX listing URL
 
    // Load the HTML response into Cheerio
     
    console.log('Listing is available for sell');
    // Send an alert email to notify the user
    // Implement your own email alert functionality here
