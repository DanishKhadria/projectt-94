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
    

       firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
    
        });
    
        document.getElementById("msg").value="";
    
    }
    
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
    //Start code
    
    //End code
        } });  }); }
    getData();
    
    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
    }
    