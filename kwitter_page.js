//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyABkkkVoIgE8yR-jRZkqJR1Es1mgL-xHTE",
      authDomain: "kwitter-ea6f0.firebaseapp.com",
      databaseURL: "https://kwitter-ea6f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea6f0",
      storageBucket: "kwitter-ea6f0.appspot.com",
      messagingSenderId: "1078719887999",
      appId: "1:1078719887999:web:d9a0f4eb091fa1ad435d4a"
};

firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg =  document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
