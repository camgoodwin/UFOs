// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create table using data
function buildTable(data) {
    tbody.html("");

// Create function to lopp through the array 
    data.forEach((dataRow) => {
      let row = tbody.append("tr");

    //Loop through each field in the dataRow 
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
  });
}

//Create function to respond to a search box
function handleClick() { 
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Create function to use a date if it already set if not default to data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using filtered data
    buildTable(filteredData);
}

//Making sure the webpage responds to a button click
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);