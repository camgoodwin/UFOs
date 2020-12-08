// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
// First, clear out any existing data
tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
  // Append a row to the table body
  let row = tbody.append("tr");

  // Loop through each field in the dataRow and add
  // each value as a table cell (td)
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
  });
});
}

// 1. Create a variable to keep track of all the filters as an object.
let filters = {}
// dates: d3.select("#datetime").property("value"),
// city: d3.select("#city").property("value"),
// state: d3.select("#state").property("value"),
// country: d3.select("#country").property("value"),
// shape: d3.select("#shape").property("value"),


// 3. Use this function to update the filters. 
function updateFilters() {

  // 4a. Save the element that was changed as a variable.
  // let ChangeElement = {
  //   dates : d3.select("datetime").property("value"),
  //   city : d3.select("city").property("value"),
  //   state : d3.select("state").property("value"),
  //   country : d3.select("country").property("value"),
  //   shape : d3.select("shape").property("value"),
  // };
  let ChangeElement = d3.select(this);
  // 4b. Save the value that was changed as a variable.
  let ElementValue = ChangeElement.property("value");
      
  // 4c. Save the id of the filter that was changed as a variable.
  let FilterID = ChangeElement.attr("id");

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  // if (date) {
  //   filteredData = filteredData.filter(row => row.datetime === $('#date')[0].reset());}
  // if (city) {
  //   filteredData = filteredData.filter(row => row.city === $('#city')[0].reset());}
  // if (state) {
  //   filteredData = filteredData.filter(row => row.state === $('#state')[0].reset());}
  // if (date) {
  //   filteredData = filteredData.filter(row => row.country === $('#country')[0].reset());}
  // if (date) {
  //   filteredData = filteredData.filter(row => row.shape === $('#shape')[0].reset());}
  if (ElementValue) {
    filters[FilterID] = ElementValue;
  }
  else {
    delete filters[FilterID];
  }
  // 6. Call function to apply all filters and rebuild the table
  filterTable();

}

// 7. Use this function to filter the table when data is entered.
function filterTable() {

// 8. Set the filtered data to the tableData.
  var filterData = tableData;

// 9. Loop through all of the filters and keep any data that
// matches the filter values
// if (date) {
//   filteredData = filteredData.filter(row => row.datetime === date);};
// if (city) {
//   filteredData = filteredData.filter(row => row.city === city);};
// if (state) {
//   filteredData = filteredData.filter(row => row.state === state);};
// if (country) {
//   filteredData = filteredData.filter(row => row.country === country);};
// if (shape) {
//   filteredData = filteredData.filter(row => row.shape === shape);};
for (const [key, value] of Object.entries(filters)) {
  
  filterData = filterData.filter(row => row[key] === value);
}

// 10. Finally, rebuild the table using the filtered data
buildTable(filterData);
}

// 2. Attach an event to listen for changes to each filter
// d3.selectAll("#datetime").on("change", updateFilters);
// d3.selectAll("#city").on("change", updateFilters);
// d3.selectAll("#state").on("change", updateFilters);
// d3.selectAll("#country").on("change", updateFilters);
// d3.selectAll("#shape").on("change", updateFilters);
d3.selectAll("input").on("change", updateFilters);
// Build the table when the page loads
buildTable(tableData);
