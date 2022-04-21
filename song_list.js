//song list
let All_song = [
   {
     name: "audio",
     path: "audio.mp3",
     img: "audio.jpg",
     singer: "Janak Creations"
   },
   {
     name: "brown",
     path: "brown.mp3",
     img: "brown.jpg",
     singer: "Janak creations"
   },
   {
     name: "cone",
     path: "cone.mp3",
     img: "cone.jpg",
     singer: "Janak Creations"
   },
   {
     name: "rabta",
     path: "rabta.mp3",
     img: "rabta.jpg",
     singer: "Janak Creations"
   },
   {
     name: "rock",
     path: "rock.mp3",
     img: "rock.jpg",
     singer: "Janak Creations"
   },
   {
    name: "star",
    path: "star.mp3",
    img: "star.jpg",
    singer: "Janak Creations"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/