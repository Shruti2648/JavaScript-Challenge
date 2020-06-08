// Assign the UFO data from data.js to a variable:
var tableData = data;

// Create a reference to the tbody:
var tbody = d3.select("tbody")

// Loop through UFO:
data.forEach(function(ufoSighting) {
    console.log(ufoSighting)

    // For each UFO sighting, append a table row to the table:
    var row = tbody.append("tr")

    // For each sighting, log all values to the console:
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value)

        // Append one cell to the row for each value:
        var cell = row.append("td")

        // Update each cell's text with UFO sighting values:
        cell.text(value)
    })
})

// Create a reference to the "filter table" form:
var form = d3.select("#form")

// Create a reference to the "filter table" button:
var button = d3.select("#button")

// Create an event handler for the button:
button.on("click", function() {

// Create a function to filter the table:
// function filterTable() {

    // Retrieve the value of the input element:
    var inputElement = d3.select("#datetime")
    var inputValue = inputElement.property("value")

    console.log("input value: " + inputValue)

    var filteredData = data.filter(ufoData => ufoData.datetime === inputValue)

    console.log(filteredData)

    tbody.html("")

    filteredData.forEach(function(xdata) {
        var row = tbody.append("tr")

        Object.entries(xdata).forEach(function([key, value]) {
            var cell = row.append("td")
            cell.text(value)
        })
    })

})

