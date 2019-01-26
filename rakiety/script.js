function getRandom() {
    return Math.random();
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

 var ani = document.getElementById("rocket-3");
  ani.animate([
  // {transform: 'scale(1)', background: 'red' , offset: 1, offset: 0},
  // {transform: 'scale(.5) rotate(270deg)' , background: 'blue' , offset: .5, offset: .2},
  // {transform: 'scale(1) rotate(0deg)', background: 'red' , offset: 1, offset: 1},
  {transform: 'translatey(0px)'},
  {transform: 'translate(10px, 0px) scale(1.05)'},
  {transform: 'translate(-10px, 0px) scale(1.1)'},
  {transform: 'translate(10px, 0px) scale(1.2)'},
  {transform: 'translate(-10px, 0px) scale(1.1)'},
  {transform: 'translate(0px, -20px) scale(1)'},
  {transform: 'translate(0px, -200px)' },
  {transform: 'translate(0px, -160px)' },
  {transform: 'translate(0px, -190px)' },
  {transform: 'translate(100px, -505px) scale(1)' },
  {transform: 'translate(100px, -505px) scale(0)'},
],{
    duration: getRandomInt(3000, 6000),
    easing: 'ease-out',
    delay:  getRandomInt(1000, 4000),
    iterations: Infinity,
   })

   var expl = document.getElementById("explo3")
  expl.animate([
    {
      transform: 'translate(300px, -370px) scale(0)'
    },
    {
      transform: 'translate(300px, -370px) scale(0)'
    },
    {
      transform: 'translate(300px, -370px) scale(0.2)'
    },
    {
      transform: 'translate(300px, -370px) scale(0.9)'
    },
    {
      transform: 'translate(300px, -370px) scale(0.2)'
    },
    {
      transform: 'translate(300px, -370px) scale(0.9)'
    },
    {
      transform: 'translate(300px, -370px) scale(0.6)'
    },
],{
    duration: getRandomInt(3000, 6000),
    easing: 'ease-out',
    delay:  getRandomInt(1000, 4000),
    iterations: Infinity,
   })
  // var item = document.getElementById("item");
  // item.animate([
  //   {transform: 'scale(1)', background: 'red' , offset: 1, offset: 0},
  //   {transform: 'scale(.5) rotate(270deg)' , background: 'blue' , offset: .5, offset: .2},
  //   {transform: 'scale(1) rotate(0deg)', background: 'red' , offset: 1, offset: 1},
  // ], {
  //     duration: 2000,
  //     easing: 'ease-in-out',
  //     delay: 10,
  //     iterations: Infinity,
  //     direction: 'alternate',
  //     fill: 'forwards'
  // })


// function myRockets(){
//    var el3 = document.getElementsById('rocket-3');
//    var ani3 = 3;
//    var a = 1;
//    var id = setInterval(frame, 10)
//   funktion frame(){
//       if(ani3 == 10){
//           clearInterval(id);}
//           else{
//             ani3++;
//             a++;
//     el3.style.animation.duration = ani3 + 's';
//     el3.style.animation.delay = ani3 + 's';
    

//           }
//   }
// }



//    document.getAnimations().forEach(
//     function (animation) {
//       animation.playbackRate *= .5;
//     }
//   );