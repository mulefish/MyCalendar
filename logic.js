function init() {

    let morning = 5 // 5am in Portland 

    let portland = [
        "Portland"


    ]


    let midwest = [
        "Midwest"

    ]

    let eastcoast = [
        "EastCoast"
    ]

    let table = "<table border='1'>";

    for (let hour = 5; hour < 12; hour++) {
        if (hour == 0) {
            let row = "<tr>"
            row += `<td colspan='2'>${portland[hour]}</td>`
            row += `<td colspan='2'>${midwest[hour]}</td>`
            row += `<td colspan='2'>${eastcoast[hour]}</td>`

            row += "</tr>"

            table += row

        } else {
            let row = "<tr>"
            // portland 
            row += `<td>${hour + 0}</td>`
            row += '<td></td>'
            // midwest
            row += `<td>${hour + 2}</td>`
            row += '<td></td>'
            // eastcoasts
            row += `<td>${hour + 3}</td>`
            row += '<td></td>'


            row += "</tr>"


            table += row
        }



    }
    table += "</table>"
    document.getElementById("content").innerHTML = table;

}