//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeog7dja4qeP7si06Hl_3_T6-RFng-rFs",
    authDomain: "project-95-22f9d.firebaseapp.com",
    databaseURL: "https://project-95-22f9d-default-rtdb.firebaseio.com",
    projectId: "project-95-22f9d",
    storageBucket: "project-95-22f9d.appspot.com",
    messagingSenderId: "936974512336",
    appId: "1:936974512336:web:d62834b59e8c7c22deeed5",
    measurementId: "G-F1FYCBMM1K"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem ("room_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room-name' id="+Room_names+" onclick= ' redirectToRoomName(this.id)' >#"+Room_names+"</div><hrs>";
    document.getElementById("output").innerHTML += row; 
    //End code
    });});}
getData();


function addRoom()
    {
           room_name = document.getElementById("room_name").value
           firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

           localStorage.setItem("room_name" , room_name);
           window.location = "kwitter_page.html";
    }


function redirectToRoomName (name)
{
    console.log (name);
    localStorage.setItem("romm_name" , name);
    window.location = "kwitter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

