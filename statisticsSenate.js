var members = data.results[0].members
var lessloyalty = []
var moreloyalty = []
var numberInd = []
var numberRep = []
var numberDem = []
var mostmissed = []
var lessmissed = []

function allStatistics() {


    for (var r = 0; r < members.length; r++) {

        var party = members[r].party

        if (party == "D") {
            numberDem.push(members[r])
        }
        if (party == "R") {
            numberRep.push(members[r])
        }
        if (party == "I") {
            numberInd.push(members[r])
        }
    }

}


allStatistics()


function getSum(array) {
    var averageD = 0;
    var x = 0;
    for (var r = 0; r < array.length; r++) {
        var averD = array[r].votes_with_party_pct

        averageD = (averageD + averD)
        x = averageD / array.length
        averagefinal = Math.round(x);
    }
    return averagefinal;

}
var z = members.length * 0.1;
var tenpercent = Math.round(z)

function Mostloyalty() {

    var orderMembers = members.slice(0)
    orderMembers.sort(function (a, b) {
        return b.votes_with_party_pct - a.votes_with_party_pct;
    });


    for (var r = 0; r < tenpercent; r++) {

        var tenmost = orderMembers[r]
        moreloyalty.push(tenmost)


    }
    for (var r = 0; r < members.length; r++) {
        var x = members[r].votes_with_party_pct

        if (x == moreloyalty[moreloyalty.length - 1].votes_with_party_pct) {
            moreloyalty.push(members[r])
        }


    }



}
Mostloyalty()

function Lessloyal() {

    var orderMembers = members.slice(0)
    orderMembers.sort(function (a, b) {
        return a.votes_with_party_pct - b.votes_with_party_pct;
    });


    for (var r = 0; r < tenpercent; r++) {

        var lessmost = orderMembers[r]

        lessloyalty.push(lessmost)

    }

    for (var r = 0; r < members.length; r++) {
        var x = members[r].votes_with_party_pct

        if (x == lessloyalty[lessloyalty.length - 1].votes_with_party_pct) {
            lessloyalty.push(members[r])
        }


    }


}

Lessloyal()

function mostmiss() {

    var orderMembers = members.slice(0)
    orderMembers.sort(function (a, b) {
        return b.missed_votes_pct - a.missed_votes_pct;

    });

    for (var r = 0; r < tenpercent; r++) {

        var missmost = orderMembers[r]

        mostmissed.push(missmost)
    }
    for (var r = 0; r < members.length; r++) {
        var x = members[r].missed_votes_pct

        if (x == mostmissed[mostmissed.length - 1].missed_votes_pct) {
            mostmissed.push(members[r])
        }


    }



}

mostmiss()

function lessmiss() {

    var orderMembers = members.slice(0)
    orderMembers.sort(function (a, b) {
        return a.missed_votes_pct - b.missed_votes_pct;

    });

    for (var r = 0; r < tenpercent; r++) {

        var missless = orderMembers[r]

        lessmissed.push(missless)
    }
    for (var r = 0; r < members.length; r++) {
        var x = members[r].missed_votes_pct

        if (x == lessmissed[lessmissed.length - 1].missed_votes_pct) {
            lessmissed.push(members[r])
        }


    }

}

lessmiss()

var statistics = {
    "numberDem": numberDem.length,
    "numberRep": numberRep.length,
    "numberIndep": numberInd.length,
    "voteAveragePartyD": getSum(numberDem),
    "voteAveragePartyR": getSum(numberRep),
    "Mostloyalty": moreloyalty,
    "lessLoyalty": lessloyalty,
    "mostVotesMissed": mostmissed,
    "lessVotesMissed": lessmissed,
}


function filltableinfi() {

    var rep1 = document.getElementById("re1");
    rep1.textContent = statistics.numberRep;

    var rep2 = document.getElementById("re2");
    rep2.textContent = statistics.voteAveragePartyR;

    var dem1 = document.getElementById("de1");
    dem1.textContent = statistics.numberDem;

    var dem2 = document.getElementById("de2");
    dem2.textContent = statistics.voteAveragePartyD;

    var ind1 = document.getElementById("in1");
    ind1.textContent = statistics.numberIndep;


}
filltableinfi()

var least = statistics.lessVotesMissed
var most = statistics.mostVotesMissed
var loyalL = statistics.lessLoyalty
var loyalM = statistics.Mostloyalty

function callfunctions(){
    if(document.getElementById("table2") && document.getElementById("table3")!= null)
        {      
          leastengaged()              
          mostengaged()
        }  
    if (document.getElementById("tableloyal") && document.getElementById("tableMloyal")!=null)
    {
        leastloyal()
        mostloyal()
        
    }
    
}
callfunctions()

function leastengaged() {


        var table2 = document.getElementById("table2")
        console.log(table2)
        var tbody = document.createElement("tbody");
    for (var r = 0; r < least.length; r++) {

        var n = least[r].first_name;
        var m = least[r].middle_name;
        var l = least[r].last_name;


        if (m == null) {
            var name = (n + " " + l)
        } else {
            var name = (n + " " + m + " " + l);

        }

        var row = document.createElement("tr");
        var columName = document.createElement("td");
        columName.textContent = name
        row.appendChild(columName);

        var columNumber = document.createElement("td");
        columNumber.textContent = least[r].missed_votes
        row.appendChild(columNumber);


        var columpercent = document.createElement("td");
        columpercent.textContent = least[r].missed_votes_pct
        
        row.appendChild(columpercent);
        
        tbody.appendChild(row);


    }
        table2.appendChild(tbody);


}

function mostengaged(){
    
         var tbody = document.createElement("tbody");
   
   for(var r = 0; r < most.length;r++){
        
        
        
        var n = most[r].first_name;
        var m = most[r].middle_name;
        var l = most[r].last_name;
    
       
        if (m == null){
         var name=(n+" "+l)}else{
         var name=(n+" "+m+" "+l);
   
         }
        
         var row=  document.createElement("tr"); 
         var table3=document.getElementById("table3");
         var columName=  document.createElement("td");
         columName.textContent=name
         row.appendChild(columName);
         
        var columNumber=  document.createElement("td");
        columNumber.textContent=most[r].missed_votes
        row.appendChild(columNumber);
        
       
        var columpercent=  document.createElement("td");
       columpercent.textContent=most[r].missed_votes_pct
        row.appendChild(columpercent);
       
       
        tbody.appendChild(row);
   }
        table3.appendChild(tbody);

 
   }

function leastloyal(){
    
         var tbody = document.createElement("tbody");
   
   for(var r = 0; r < loyalL.length;r++){
        
        
        
        var n = loyalL[r].first_name;
        var m = loyalL[r].middle_name;
        var l = loyalL[r].last_name;
    
       
        if (m == null){
         var name=(n+" "+l)}else{
         var name=(n+" "+m+" "+l);
   
         }
        
         var row=  document.createElement("tr"); 
         var table4=document.getElementById("tableloyal");
         var columName=  document.createElement("td");
         columName.textContent=name;
         row.appendChild(columName);
         
        var columNumber=  document.createElement("td");
        columNumber.textContent=loyalL[r].total_votes;
        row.appendChild(columNumber);
        
       
        var columpercent=  document.createElement("td");
       columpercent.textContent=loyalL[r].votes_with_party_pct;
        row.appendChild(columpercent);
        tbody.appendChild(row);
          
       
   }
      table4.appendChild(tbody);

 
   }

function mostloyal(){
    
         var tbody = document.createElement("tbody");
   
   for(var r = 0; r < loyalM.length;r++){
        
        
        
        var n = loyalM[r].first_name;
        var m = loyalM[r].middle_name;
        var l = loyalM[r].last_name;
    
       
        if (m == null){
         var name=(n+" "+l)}else{
         var name=(n+" "+m+" "+l);
   
         }
        
         var row=  document.createElement("tr"); 
         var table5=document.getElementById("tableMloyal");
         var columName=  document.createElement("td");
         columName.textContent=name;
         row.appendChild(columName);
         
        var columNumber=  document.createElement("td");
        columNumber.textContent=loyalM[r].total_votes;
        row.appendChild(columNumber);
        
       
        var columpercent=  document.createElement("td");
       columpercent.textContent=loyalM[r].votes_with_party_pct;
        row.appendChild(columpercent);
        tbody.appendChild(row);
          
       
   }
      table5.appendChild(tbody);

 
   }

