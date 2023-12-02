let music = new Audio("audio/ganesh.mp3");
 document.getElementById("playBtn").addEventListener("click", () => {
   music.play();
});
 document.getElementById("ganpathyBtn").addEventListener("click", () => { 
     music.pause();
 music = new Audio("audio/ganesh.mp3");
   music.play();
  });

// const music0 = new Audio('audio1.mp3');
// const music1 = new Audio('audio2.mp3');
// const music2 = new Audio('audio3.mp3');
// const music3 = new Audio('audio4.mp3');
// const music4 = new Audio('audio5.mp3');
// const music5 = new Audio('audio6.mp3');


//select btn

// const prevbtn = document.querySelector('.prevBtn');
// const playbtn = document.querySelector('.playBtn');
// const nextbtn = document.querySelector('.nextBtn');


// const songs = [
//   { ele: music0, audioName: 'ganpathy'},
//   { ele: music1, audioName: 'merepapa'},
//   { ele: music2, audioName: 'kesariya'},
//   { ele: music3, audioName: 'lag ja gale'},
//   { ele: music4, audioName: 'jhumka'},
//   { ele: music5, audioName: 'chandbaliya'},
 
// ];
 
// let current = 0;
// let currentSong = songs[current].ele;
// songName.textContent = songs[current].audioName;



// playbtn.addEventListener('click',()=>{
//   if(currentSong.paused){
//   currentSong.play();

// }
// else{
//   currentSong.pause();
// }
// })
// nextbtn.addEventListener('click',()=>{
//   updateSong('next');

// });

// // const updateSong = (action){
// //   if(action=='next'){
// //     current++;
   
// //   }
// //   const updateSong = (action)=>{
// //     if(action=='prev'){
// //       current--;
// //     }
// //       // currentSong = songs[current].ele;
// //       // songName.textContent = songs[current].audioName;
    
// // }










 let audio = new Audio();

 audio.title = "moye",
  audio.src = "audio/audio.2";

  //Accessing Play Button
   let playBtn = document.querySelector("#playedBtn");
  playBtn.addEventListener("click", () => {
   console.log("Play button clicked");
    audio.play();
   playBtn.style.backgroundColor = "greenyellow";
});

//Accessing Pause Button
  let pauseBtn = document.querySelector("#pausedBtn");
 pauseBtn.addEventListener("click", () => {
   console.log("Pause button clicked");
  audio.pause();
 });
 // Accessing Play Button
let stopBtn = document.querySelector("#stopBtn");
  stopBtn.addEventListener("click", () => {
  console.log("stop button clicked");
   audio.pause();
    audio.currentTime = 0;
  });





  