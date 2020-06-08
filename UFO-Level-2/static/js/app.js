// Assign the UFO data from data.js to a variable:
var tableData = data;

// Create a reference to the tbody:
var tbody = d3.select("tbody")

// Append a table row for each UFO sighting, and append table cells containing the appropriate values:
data.forEach(function(ufoSighting) {
    
    console.log(ufoSighting)
    var row = tbody.append("tr")

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value)
        var cell = row.append("td")
        cell.text(value)
    })
})

// Create references to the "filter table" form and filter group item:
var form = d3.select("#form")
var button = d3.selectAll(".filter")

// Create an event handler for the button:
button.on("change", filterSearch) 

// Create an empty object for storing the user's search parameters:
searchParameters = {}

// Retrieve and store the user's search parameters:
function filterSearch() {

    var inputElement = d3.select(this).select("input")
    var inputValue = inputElement.property("value")
    var inputID = inputElement.attr("id")

    searchParameters[inputID] = inputValue
    console.log(searchParameters)
    newTable()
}

// Update the table so that it contains only the filtered results:
function newTable() {
    var newData = data

    Object.entries(searchParameters).forEach(function([key, value]) {
        newData = newData.filter(x => x[key] === value)
    })

    tbody.html("")
    
    newData.forEach(function(xdata) {
        var row = tbody.append("tr")

        Object.entries(xdata).forEach(function([key, value]) {
            var cell = row.append("td")
            cell.text(value)
        })
    })


}

   

