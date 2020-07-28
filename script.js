//this my dummy data
    mydata=[
        {
            'name':"Dereje",
            'address':"canada",
            'phone':"+244-242-2435"
        },
        {
            'name':"Abdi",
            'address':"Addis",
            'phone':"+251-942-2435"
        },
        {
            'name':"Miran",
            'address':"Adanma",
            'phone':"+244-242-2435"
        },
        {
            'name':"Ayyantu",
            'address':"london",
            'phone':"+244-242-2435"
        },
    ];
    function fetchDataFromJson(){
        
        var arry=[];//array created to store the data 
        //this will push the key from key/value pair in the first set
        for(var key in mydata[0]){
            arry.push(key);
            console.log(key);
        }
     
        // creating table dynamically
        var table= document.createElement("table");
        var tr= table.insertRow(-1);// table row
        for(var i=0;i< arry.length;i++){
            var th= document.createElement("th");// header row for the table
             //assign values from arry to table header
            th.innerHTML=arry[i];
            console.log(th);
            //append table header to row
            tr.appendChild(th);
        }

        for(var i=0;i< mydata.length; i++){
         var tr= table.insertRow(-1);
         for(var j=0;j< arry.length;j++){
             //creating cell for each table row
             var tablecell=tr.insertCell(-1);
             tablecell.innerHTML=mydata[i][arry[j]];
             console.log(tablecell);
    }
     }
     var tableDiv=document.getElementById('table');
     tableDiv.innerHTML="";
     tableDiv.appendChild(table);
 }