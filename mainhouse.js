var data;
console.log(1);
var members;

comparecall()

function comparecall() {


    if (document.getElementById("SenatePage") != null) {
        fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
            method: "GET",
            headers: {
                'X-API-Key': '7UNgDQHuH7sJ5DMi1JLleOJDAPEHVVBOR6bqrkB0'

            }

        }).then(function (response) {
            if (response.ok) {
                console.log(2);

                return response.json();

            }

        }).then(function (json) {


            data = json;
            console.log(3);
            console.log(data);
            members = data.results[0].members;


            tables();
            uniqueStates();




        }).catch(function (error) {
            console.log("Request failed:" + error.message);
        });

    }

    if (document.getElementById("HousePage") != null) {
        fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
            method: "GET",
            headers: {
                'X-API-Key': '7UNgDQHuH7sJ5DMi1JLleOJDAPEHVVBOR6bqrkB0'

            }


        }).then(function (response) {
            if (response.ok) {
                console.log(2);


                return response.json();
            }




        }).then(function (json) {

            data = json;
            console.log(3);
            console.log(data);
            members = data.results[0].members;

            tables();
            uniqueStates();


        }).catch(function (error) {
            console.log("Request failed:" + error.message);
        });

    }

}


var membersFiltered = [];

function createTable2() {
    var tbody = document.createElement("tbody");
    var table = document.getElementById("house-data");
    var option = document.getElementById("option")
    membersFiltered = [];
    var select = document.getElementById("select")

    var input = document.querySelectorAll('input[name="party"]:checked');


    if (document.getElementsByTagName("tbody")[0] != null) {
        table.removeChild(document.getElementsByTagName("tbody")[0])
    }

    for (var i = 0; i < input.length; i++) {
        for (var d = 0; d < members.length; d++) {

            if ((input[i].value == members[d].party) &&
                (select.value == members[d].state)) {

                membersFiltered.push(members[d])


            }

            if ((input[i].value == members[d].party) && (select.value == "ALL")) {

                membersFiltered.push(members[d])

            }

        }

    }


    for (var r = 0; r < membersFiltered.length; r++) {


        var row = document.createElement("tr");
        var n = membersFiltered[r].first_name;
        var m = membersFiltered[r].middle_name;
        var l = membersFiltered[r].last_name;
        var u = membersFiltered[r].url;


        if (m == null) {
            var name = (n + " " + l)
        } else {
            var name = (n + " " + m + " " + l);


        }

        var link = document.createElement("a");
        link.href = u;
        link.innerHTML = name;

        var columName = document.createElement("td");
        columName.appendChild(link)
        row.appendChild(columName);

        var columParty = document.createElement("td");
        columParty.textContent = membersFiltered[r].party
        row.appendChild(columParty);


        var columState = document.createElement("td");
        columState.textContent = membersFiltered[r].state
        row.appendChild(columState);


        var columYears = document.createElement("td");
        columYears.textContent = membersFiltered[r].seniority
        row.appendChild(columYears);


        var columVotes = document.createElement("td");
        columVotes.textContent = membersFiltered[r].total_votes
        row.appendChild(columVotes);

        tbody.appendChild(row);

    }
    table.appendChild(tbody);



}




function tables() {
    var tbody = document.createElement("tbody");
    var table = document.getElementById("house-data")





    for (var r = 0; r < members.length; r++) {

        var row = document.createElement("tr");
        var n = members[r].first_name;
        var m = members[r].middle_name;
        var l = members[r].last_name;
        var u = members[r].url;


        if (m == null) {
            var name = (n + " " + l)
        } else {
            var name = (n + " " + m + " " + l);

        }



        var link = document.createElement("a");
        link.href = u;
        link.innerHTML = name;

        var columName = document.createElement("td");
        columName.appendChild(link)
        row.appendChild(columName);

        var columParty = document.createElement("td");
        columParty.textContent = members[r].party
        row.appendChild(columParty);


        var columState = document.createElement("td");
        columState.textContent = members[r].state
        row.appendChild(columState);


        var columYears = document.createElement("td");
        columYears.textContent = members[r].seniority
        row.appendChild(columYears);


        var columVotes = document.createElement("td");
        columVotes.textContent = members[r].total_votes
        row.appendChild(columVotes);

        tbody.appendChild(row);

    }
    table.appendChild(tbody);

}




function uniqueStates() {




    var uniqueState = [];
    var count = 0;
    var found = false;

    for (var i = 0; i < members.length; i++) {
        var state = data.results[0].members[i].state


        for (var y = 0; y < uniqueState.length; y++) {

            if (state == uniqueState[y]) {

                found = true;
            }

        }



        count++;
        if (count == 1 && found == false) {
            uniqueState.push(state);


        }


        count = 0;
        found = false;

    }
     console.log(uniqueState.length)

    var select = document.getElementById("select")

    for (var i = 0; i < uniqueState.length; ++i) {
        var option = document.createElement("OPTION");
        oncontextmenu = document.createTextNode(uniqueState[i]);
        option.appendChild(oncontextmenu);
        select.insertBefore(option, select.lastChild)

    }




}
