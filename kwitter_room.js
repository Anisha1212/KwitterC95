
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAfSCXWikZUF6XWlAugMkQkvW5FeCqIgWw",
      authDomain: "kwitter-a64b1.firebaseapp.com",
      databaseURL: "https://kwitter-a64b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-a64b1",
      storageBucket: "kwitter-a64b1.appspot.com",
      messagingSenderId: "209639557507",
      appId: "1:209639557507:web:0c9d83f7a08b3721700eb6"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() {
      window.location="index.html";
}

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      window.location = "index.html";
}