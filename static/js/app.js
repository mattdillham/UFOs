//add table data
const tableData = data;
var tbody = d3.select("tbody");
//build table
function buildTable(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
}
function filteredTable() {
    var date, city, state, country, shape, filteredData;
    date = d3.select("#datetime").property("value");
    city = d3.select("#city").property("value");
    state = d3.select("#state").property("value");
    country = d3.select("#country").property("value");
    shape = d3.select("#shape").property("value");
    filteredData = tableData;
  if (date){
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city){
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state){
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country){
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape){
    filteredData = filteredData.filter(row => row.shape === shape);
  }
buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", filteredTable);
buildTable(tableData);





