var members=data.results[0].members
console.log(members[0]);
var table2= document.getElementById("house-data");

var membersFiltered = [];

function createTable2(){
        var tbody = document.createElement("tbody");

    var option= document.getElementById("option")
     membersFiltered = [];
    var select=document.getElementById("select") 
    
    var input = document.querySelectorAll('input[name="party"]:checked');
    
   
   if (document.getElementsByTagName("tbody")[0]!=null){ table2.removeChild(document.getElementsByTagName("tbody")[0])}

    for (var i=0 ;i < input.length; i++){
        for (var d=0 ;d < members.length; d++ ){ 

            if ((input[i].value == members[d].party) &&
        (select.value == members[d].state)){ 
                
               membersFiltered.push(members[d])
            
            
            }
       
           if((input[i].value == members[d].party)&&(select.value=="ALL")){
               
               membersFiltered.push(members[d])
            
           }
           
        }
        
        }
         
       
    for(var r = 0; r < membersFiltered.length;r++){
        
        
        var row=  document.createElement("tr"); 
        var n = membersFiltered[r].first_name;
        var m = membersFiltered[r].middle_name;
        var l = membersFiltered[r].last_name;
        var u = membersFiltered [r].url;  
        
       
        if (m == null){
         var name=(n+" "+l)}else{
         var name=(n+" "+m+" "+l);
     
                   
         }
         
         var link= document.createElement("a");
         link.href=u;
         link.innerHTML=name;
                    
        var columName=  document.createElement("td");
         columName.appendChild(link)
        row.appendChild(columName);
       
        var columParty=  document.createElement("td");
        columParty.textContent=membersFiltered[r].party
        row.appendChild(columParty);
   
       
        var columState=  document.createElement("td");
        columState.textContent=membersFiltered[r].state
        row.appendChild(columState);
        
               
        var columYears=  document.createElement("td");
        columYears.textContent=membersFiltered[r].seniority
        row.appendChild(columYears);
        
             
        var columVotes=  document.createElement("td");
        columVotes.textContent=membersFiltered[r].total_votes
        row.appendChild(columVotes);
    
        tbody.appendChild(row);
     
     }
     table2.appendChild(tbody);


        
    }

//createTable2() 




function table() {
    var tbody = document.createElement("tbody");
    
       
   
    
//
//    
//             for (var i=0 ;i < uniqueState.length; i++){
//        for (var d=0 ;d < members.length; d++ ){ 
//
//            if (uniqueState[i].value == members[d].state){ 
//                
//               stateFiltered.push(members[d])
//            }
//        }
//             }
//             
//    console.log(stateFiltered)
    
    

  for(var r = 0; r < members.length;r++){
        
        var row=  document.createElement("tr"); 
        var n = members[r].first_name;
        var m = members[r].middle_name;
        var l = members[r].last_name;
        var u = members [r].url;  
        
       
        if (m == null){
         var name=(n+" "+l)}else{
         var name=(n+" "+m+" "+l);
     
         }
      
      

         var link= document.createElement("a");
         link.href=u;
         link.innerHTML=name;
                    
        var columName=  document.createElement("td");
         columName.appendChild(link)
        row.appendChild(columName);
       
        var columParty=  document.createElement("td");
        columParty.textContent=members[r].party
        row.appendChild(columParty);
   
       
        var columState=  document.createElement("td");
        columState.textContent=members[r].state
        row.appendChild(columState);
        
               
        var columYears=  document.createElement("td");
        columYears.textContent=members[r].seniority
        row.appendChild(columYears);
        
             
        var columVotes=  document.createElement("td");
        columVotes.textContent=members[r].total_votes
        row.appendChild(columVotes);
    
        tbody.appendChild(row);
     
     }
     table2.appendChild(tbody);

             }


table()

var membersFiltered2=[]
   
function uniqueStates(){
    
   
// membersFiltered2=[]
                
    var uniqueState=[];
           var count=0;
           var found=false;
        
    for (var i=0 ;i < members.length; i++){
      var   state=data.results[0].members[i].state
      
                   
           for(var y=0;y < uniqueState.length; y++){
             
         if(state==uniqueState[y]){
              
             found=true;
         }
          
           }
  
         
   
       count++;
     if(count== 1&&found==false){
     uniqueState.push(state);
           
    
     }
       
          
           count=0;
           found=false;
     
     }
    
 
          var select=document.getElementById("select")
       
  for (var i=0; i < uniqueState.length;++i){
   var option=document.createElement("OPTION");
      oncontextmenu=document.createTextNode(uniqueState[i]);
      option.appendChild(oncontextmenu);
      select.insertBefore(option,select.lastChild)
      
  }
   
 

    
}

//function filterbystate(){
//       
//          var select=document.getElementById("select") 
//    membersFiltered2=[]
//        for (var d=0 ;d < members.length; d++ ){ 
//
//            if (select.value == members[d].state){ 
//                  
//
//                membersFiltered2.push(members[d])
//             
//            }        
//     
//        }
//   
//    
//console.log(membersFiltered2)
//    
//    
//    
//}

  
uniqueStates();



