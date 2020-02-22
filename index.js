//--------------------Functions--------------------
//----------Play sounds ----------
let play=(name)=>{
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}
{
  // // let press=(letter)=>{
  //   switch(letter){
  //     case 'w':
  //     play("tom-1");
  //     break;
  //     case 'a':
  //     play("tom-2");
  //     break;
  //     case 's':
  //     play("tom-3");
  //     break;
  //     case 'd':
  //     play("tom-4");
  //     break;
  //     case 'j':
  //     play("crash");
  //     break;
  //     case 'k':
  //     play("kick-bass");
  //     break;
  //     case 'l':
  //     play("snare");
  //     break;
  //     default:
  //     return 0;
  //   }
  // }
}
//----------pressed button effect----------
let pressed=(key)=>{
  key.classList.add("pressed");
  setTimeout(function(){
    key.classList.remove("pressed");
  },100);
}
//--------------------Event Listeners--------------------

let buttons=document.querySelectorAll("button");

for(let i=0;i<buttons.length;i++){
  const b = buttons[i];
//----------Click on Buttons----------
  b.addEventListener("click", function(event){
    play(this.attributes.id.value);
    pressed(this);
  });
//----------Key binding----------

  document.addEventListener("keydown",function(event){
    if(event.key === b.attributes.key.value) {
      play(b.attributes.id.value);
      pressed(b)
    }
  });
}
