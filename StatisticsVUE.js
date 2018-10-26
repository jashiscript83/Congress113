var app = new Vue({
    el: '#app',
    data: {


        members: [],
        numberDem: [],
        numberRep: [],
        numberInd: [],
        moreloyalty: [],
        lessloyalty: [],
        mostmissed: [],
        lessmissed: [],
        averagefinal: 0,
        z: [],
        tenpercent: [],
        statistics: {
            "numberDem": 0,
            "numberRep": 0,
            "numberIndep": 0,
            "voteAveragePartyD": 0,
            "voteAveragePartyR": 0,
            "Mostloyalty": 0,
            "lessLoyalty": 0,
            "mostVotesMissed": 0,
            "lessVotesMissed": 0,

        },

        least: [],
        most: [],
        loyalL: [],
        loyalM: [],

        chamber: "",

    },
    created: function () {
        document.body.className = "loading";

        this.geturl();
        this.comparecall();
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


        comparecall: function () {


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
                document.body.className = "";
                app.members = data.results[0].members;


                app.z = app.members.length * 0.1;

                app.tenpercent = Math.round(app.z);

                app.allStatistics();

                app.statistics.voteAveragePartyD = app.getSum(app.numberDem);
                app.statistics.voteAveragePartyR = app.getSum(app.numberRep);


                app.Mostloyalty();
                app.statistics.Mostloyalty = app.moreloyalty;
                app.Lessloyal();
                app.statistics.lessLoyalty = app.lessloyalty;
                app.mostmiss();
                app.statistics.mostVotesMissed = app.mostmissed;
                app.lessmiss();
                app.statistics.lessVotesMissed = app.lessmissed;


                app.least = app.statistics.lessVotesMissed;
                app.most = app.statistics.mostVotesMissed;
                app.loyalL = app.statistics.lessLoyalty;
                app.loyalM = app.statistics.Mostloyalty;


            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });




        },


        allStatistics: function () {

            for (var r = 0; r < this.members.length; r++) {

                var party = this.members[r].party

                if (party == "D") {
                    this.numberDem.push(this.members[r])
                }
                if (party == "R") {
                    this.numberRep.push(this.members[r])
                }
                if (party == "I") {
                    this.numberInd.push(this.members[r])
                }
            }

            this.statistics.numberDem = this.numberDem.length;
            this.statistics.numberRep = this.numberRep.length;
            this.statistics.numberIndep = this.numberInd.length;

        },

        getSum: function (array) {

            var averageD = 0;
            var x = 0;
            for (var r = 0; r < array.length; r++) {
                var averD = array[r].votes_with_party_pct

                averageD = (averageD + averD)
                x = averageD / array.length
                this.averagefinal = Math.round(x);
            }

            return this.averagefinal;

        },
        Mostloyalty: function () {

            this.orderMembers = this.members.slice(0)
            this.orderMembers.sort(function (a, b) {
                return b.votes_with_party_pct - a.votes_with_party_pct;
            });


            for (var r = 0; r < this.tenpercent; r++) {

                var tenmost = this.orderMembers[r]
                this.moreloyalty.push(tenmost)


            }
            for (var r = 0; r < this.members.length; r++) {
                var x = this.members[r].votes_with_party_pct

                if (x == this.moreloyalty[this.moreloyalty.length - 1].votes_with_party_pct) {
                    this.moreloyalty.push(this.members[r])
                }
                if (this.moreloyalty[this.moreloyalty.length - 1].votes_with_party_pct = this.moreloyalty[this.moreloyalty.length - 1].votes_with_party_pct) {
                    return false
                }


            }

        },
        Lessloyal: function () {

            this.orderMembers = this.members.slice(0)
            this.orderMembers.sort(function (a, b) {
                return a.votes_with_party_pct - b.votes_with_party_pct;
            });


            for (var r = 0; r < this.tenpercent; r++) {

                var lessmost = this.orderMembers[r]

                this.lessloyalty.push(lessmost)

            }

            for (var r = 0; r < this.members.length; r++) {
                var x = this.members[r].votes_with_party_pct

                if (x == this.lessloyalty[this.lessloyalty.length - 1].votes_with_party_pct) {
                    this.lessloyalty.push(this.members[r])
                }
                if (this.lessloyalty[this.lessloyalty.length - 1].votes_with_party_pct = this.lessloyalty[this.lessloyalty.length - 1].votes_with_party_pct) {
                    return false
                }

            }


        },
        mostmiss: function () {

            var orderMembers = this.members.slice(0);
            orderMembers.sort(function (a, b) {
                return b.missed_votes_pct - a.missed_votes_pct;

            });

            for (var r = 0; r < this.tenpercent; r++) {

                var missmost = orderMembers[r]

                this.mostmissed.push(missmost)
            }
            for (var r = 0; r < this.members.length; r++) {
                var x = this.members[r].missed_votes_pct

                if (x == this.mostmissed[this.mostmissed.length - 1].missed_votes_pct) {
                    this.mostmissed.push(this.members[r])
                }

                if (this.mostmissed[this.mostmissed.length - 1].votes_with_party_pct = this.mostmissed[this.mostmissed.length - 1].votes_with_party_pct) {
                    return false
                }
            }


        },
        lessmiss: function () {

            var orderMembers = this.members.slice(0)
            orderMembers.sort(function (a, b) {
                return a.missed_votes_pct - b.missed_votes_pct;

            });

            for (var r = 0; r < this.tenpercent; r++) {

                var missless = orderMembers[r]

                this.lessmissed.push(missless)
            }

            for (var j = 0; j < this.members.length; j++) {
                var x = this.members[j].missed_votes_pct

                if (x == this.lessmissed[this.lessmissed.length - 1].missed_votes_pct) {
                    this.lessmissed.push(this.members[r])
                }

                if (this.lessmissed[this.lessmissed.length - 1].votes_with_party_pct = this.lessmissed[this.lessmissed.length - 1].votes_with_party_pct) {
                    return false
                }

            }

        },



    }
})
