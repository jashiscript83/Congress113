var app = new Vue({
    el: '#app',
    data: {

        membersFiltered: [],
        uniqueState: [],
        members: [],
        membersoriginal: [],
        chamber: "",

    },
    created: function () {
        document.body.className = "loading";
        this.geturl();
        this.getData();



    },
    methods: {

        geturl: function () {
            if (document.getElementById("SenatePage") != null) {
                this.chamber = "senate"
            }
            if (document.getElementById("HousePage") != null) {
                this.chamber = "house"
            }
        },
        getData: function () {

            fetch("https://api.propublica.org/congress/v1/113/" + this.chamber + "/members.json", {
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
                document.body.className = "";
                app.members = data.results[0].members;
                app.membersoriginal = data.results[0].members;
                app.uniqueStates();





            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });


        },

        createFilter: function () {
            var count = 0;
            var found = false;
            this.members = this.membersoriginal;
            this.membersFiltered = [];
            var option = document.getElementById("option")
            var input = document.querySelectorAll('input[name="party"]:checked');
            var select = document.getElementById("select")




            for (var i = 0; i < input.length; i++) {
                for (var d = 0; d < this.members.length; d++) {


                    if ((input[i].value == this.members[d].party) &&
                        (select.value == this.members[d].state)) {

                        this.membersFiltered.push(this.members[d])

                    }

                    if ((input[i].value == this.members[d].party) && (select.value == "ALL")) {

                        this.membersFiltered.push(this.members[d])

                    }

                }

            }

            this.members = this.membersFiltered


        },


        uniqueStates: function () {

            this.uniqueState = [];

            var select = document.getElementById("select")

            for (var i = 0; i < this.membersoriginal.length; i++) {

                var state = this.membersoriginal[i].state


                for (var y = 0; y < this.uniqueState.length; y++) {

                    if (this.state == this.uniqueState[y]) {

                        found = true;
                    }

                }


                count++;
                if (count == 1 && found == false) {
                    this.uniqueState.push(state);

                }
                var count = 0;
                var found = false;

            }

            var select = document.getElementById("select")

            for (var i = 0; i < this.uniqueState.length; ++i) {
                var option = document.createElement("OPTION");
                oncontextmenu = document.createTextNode(this.uniqueState[i]);
                option.appendChild(oncontextmenu);
                select.insertBefore(option, select.lastChild)

            }

        },





    }
})
