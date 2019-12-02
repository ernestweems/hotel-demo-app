// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0);
  
    } // end if
} // end function

function display(x) {
    console.log(x)
    document.getElementById("roomName").textContent =  hotelInfo[x].name;
    document.getElementById("desc").textContent =  hotelInfo[x].description;
    document.getElementById("photo").src =  hotelInfo[x].photo;
    document.getElementById("weekday").textContent =  hotelInfo[x].cost.weekday;
    document.getElementById("weekend").textContent =  hotelInfo[x].cost.weekend;
    details ="";
    for(i = 0; i < hotelInfo[x].details.length; i++) {
     // console.log(hotelInfo[x].details[i]);
      
     details += "<p>"+hotelInfo[x].details[i]+"</p>"
     // console.log(details);
     document.getElementById("detail-section").innerHTML = details;
       
    }
}