
function x(){
  var table;
  table = "<table>";

  for (i = 1; i<=10; i++){

    table += "<tr>";
   
  for (x = 1; x<=10; x++){

   
    table += "<td>";
    table += x*i;

    table += "</td>";
 }

 table += "</tr>";
 //table += i*param;
}



 table += "</table>";

 return table;

}
