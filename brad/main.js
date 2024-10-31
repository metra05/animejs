// anime({
//     targets:'div.box.red',
//     /*translateY:[
//         {value:100, duration:4000},
//         {value:0, duration:800}
//     ],
//     keyframes: [
//         {translateY: 100, duration:800},
//         {translateY: 0},
//       ],*/

//     translateY:[
//         {value:[0,200],duration:1000,easing:'easeInOutSine'},
//         {value:[200,0],duration:800},
        
//     ],
        
   
//     rotate:{
//         value:'1turn',
//         easing:'easeInOutSine'
//     },
// //    duration:1000,

// }); 

// anime({
//     targets:'div.box.blue',
//     /*translateY:[
//         {value:100, duration:4000},
//         {value:0, duration:800}
//     ],
//     keyframes: [
//         {translateY: 100, duration:800},
//         {translateY: 0},
//       ],*/

//     translateY:[
//         {value:[0,200],duration:1000,easing:'easeInOutSine'},
//         {value:[200,0],duration:800},
        
//     ],
        
   
//     rotate:{
//         value:'1turn',
//         easing:'easeInOutSine'
//     },
// //    duration:1000,

// }); 


// anime({
//     targets:'div.box.green',
//     /*translateY:[
//         {value:100, duration:4000},
//         {value:0, duration:800}
//     ],
//     keyframes: [
//         {translateY: 100, duration:800},
//         {translateY: 0},
//       ],*/

//     translateY:[
//         {value:[0,200],duration:1000,easing:'easeInOutSine'},
//         {value:[200,0],duration:800},
        
//     ],
        
   
//     rotate:{
//         value:'1turn',
//         easing:'easeInOutSine'
//     },
// //    duration:1000,

// }); 

// anime({
//     targets:'div.box.red',
//     translateY:[
//         {value:200,duration:500},
//         {value:0,duration:800},
//     ],
        
//     rotate:'1turn',
//     easing:'easeInOutSine',
//     //duration:1000
//    // duration: function(el,i,){return (i*1000)},

// }); 

var playpause= anime({
    targets:'div.box',
    translateY:[
        {value:200,duration:500},
        {value:0,duration:800},
    ],
        
    rotate:'1turn',
    easing:'easeInOutSine',
    //delay:1000
    autoplay:false,
   delay: function(el,i,){return (i*1000)},

}); 

document.querySelector("#boxes .play").onclick = playpause.play;
document.querySelector("#boxes .pause").onclick = playpause.pause;




