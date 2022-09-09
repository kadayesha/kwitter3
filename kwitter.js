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
  
function addUser(){
    user_name = document.getElementById("user_name").value; 
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
    
console.log(user_name)
}
