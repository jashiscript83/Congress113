//the number of Democrats, Republicans and Independents
//how Democrats and Republicans compare, on average, for voting with their party
//which members most often do not vote with their party, which ones most often do vote with their party
//which members have missed the most votes, which have missed the least
var members=data.results[0].members
var lessloyalty=[]
var moreloyalty=[]
var numberInd=[]  
 var numberRep=[]
 var numberDem=[]
function allStatistics () {
    
   
    for(var r = 0; r < members.length;r++){
        
    var party= members[r].party
    
    if (party=="D")
    {
        numberDem.push(members[r])
    }
        if (party=="R") 
        {
         numberRep.push(members[r])
        }  
        if (party=="I"){
            numberInd.push(members[r])
        }
    }
         
    }
    

allStatistics()


function getSum(array) {
    var averageD=0 ;
    var x = 0;
    for(var r = 0; r <  array.length; r++){
    var averD= array[r].votes_with_party_pct
    averageD= (averageD+ averD)
    x = averageD / array.length
     averagefinal = Math.round(x);   
    }
    return averagefinal;
}

function Mostloyalty(array2) {
  
}


var statistics= {
    "numberDem": numberDem.length,
    "numberRep": numberRep.length,
    "numberIndep": numberInd.length,
    "voteAveragePartyD":getSum(numberDem),
    "voteAveragePartyR":getSum(numberRep),
    "Mostloyalty":0,
    "lessLoyalty":0,
    "mostVotesMissed":0,
    "lessVotesMissed":0,
}   
