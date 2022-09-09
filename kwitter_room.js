//ADD YOUR FIREBASE LINKS HERE
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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById ("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name..."
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML +=row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}