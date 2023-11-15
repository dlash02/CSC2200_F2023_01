function showData( id ){
    alert( "showData ")
    let apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    alert( `apiURL:${apiUrl}`)
    fetchDataAndPopulateTable( apiUrl);
}
function fetchDataAndPopulateTable( apiUrl ) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Call a function to populate the table with the fetched data
            populateTable(data);
        })
        .catch(error => {
            console.error('Fetch error:', error.message);
        });
}

function populateTable(data) {
    // Get the table body element
    const tableBody = document.querySelector('#data-table tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Populate the row with data
    newRow.innerHTML = `
            <td>${data.userId}</td>
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.body}</td>
        `;

    // Append the row to the table body
    tableBody.appendChild(newRow);
}
