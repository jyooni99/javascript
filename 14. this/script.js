//This 참조 
//Method this => 해당 객체를 참조
const audio = {
  title: 'a',
  play(){
    console.log('play this: ', this);
  }
}

audio.play();

audio.stop = function(){
  console.log('stop this', this);
}

audio.stop();

//function this => Window객체 
function playAudio(){
  console.log(this);
}

playAudio();

//Constructor(색성자) 함수 this => 빈 객체
function Audio(title){
  console.log(this);
}

const audioA = new Audio();
const audioB = new Audio();