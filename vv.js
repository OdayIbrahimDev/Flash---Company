
let aqs = document.querySelectorAll('.aq');
let ts = document.querySelectorAll('.T');
let ls = document.querySelectorAll('.L');

function Cat(){
    let sle = document.getElementById('rr').value.toUpperCase();
    let se = document.querySelector('.sss').value.toUpperCase();
  

    for(let i= 0; i < ls.length; i++){
      if(ls[i].innerHTML.toUpperCase().indexOf(sle) >= 0){
        aqs[i].style.display =""; 
      
        

    for(let e=0; e<ts.length; e++){
      if(ts[i].innerHTML.toUpperCase().indexOf(se)>= 0){
        aqs[i].style.display =""; 
      }
      else{
        aqs[i].style.display ="none"; 
    }

        }
    }
   
    else{
        aqs[i].style.display ="none"; 
    }

}
}

var roomAnimateAsymmetry = function() {

  $(".suite-title").lettering('words');

  var controller = new ScrollMagic.Controller();

  $('.suite-wrap').each(function(){

    var pic1 = $(this).find('.pic1'),
      pic2 = $(this).find('.pic2'),
      excerpt = $(this).find('.suite-excerpt'),
      overlay = $(this).find('.overlay'),
      words = $(this).find('.suite-title > span > span');


  var tl = new TimelineMax();

  tl
    .fromTo(overlay, 2, { skewX: 7 }, { skewX:0, xPercent: 100, transformOrigin: "0% 100%", ease:Expo.easeInOut }, '-=2')
    .fromTo([pic1, pic2], 2, { scale: 1.5 }, { scale: 1.0, ease:Expo.easeInOut }, '-=2')
    .staggerTo(words, 2, { y: 0, ease:Expo.easeInOut }, 0.1, '-=2' )
    .fromTo(excerpt, 2, { opacity: 0, y: 50, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1, y: 0, ease:Expo.easeOut }, '-=1')
    

  

  // Scene 1

  var scene1 = new ScrollMagic.Scene({
    triggerElement: this,
    // duration: "100%",
    duration: "0%",
    reverse: false,
    offset: "-200%",
    // triggerHook: 0,
  })

  .setTween(tl)
  // .addIndicators({
  // 	name: 'reveal',
  // 	colorTrigger: 'black',
  // 	indent: 0,
  // 	colorStart: 'green',

  // })
  .addTo(controller);


  })
};
roomAnimateAsymmetry();

var roomAnimate = function() {
  // $(".suite-title").lettering('words');
  var controller = new ScrollMagic.Controller();
  $(".room-animate .heading").lettering('words');

  $('.room-animate').each(function() {
    var $this = $(this);

    var	bgImage = $this.find('.bg-image'),
      overlay = $this.find('.overlay'),
      words = $this.find('.heading span span'),
      excerpt = $this.find('.room-exerpt');

    var tl = new TimelineMax();

    tl
      .set(bgImage, { scale: '1.2' })
      .to(overlay, 5, { height: '100%', ease: Power4.easeOut } )
      .to(bgImage, 2, { scale: '1.0', ease: Power4.easeInOut }, '-=5' )
      .staggerTo(words, 2, { y: 0, ease:Expo.easeInOut }, 0.1, '-=4.5' )

      .fromTo(excerpt, 2, { autoAlpha: 0, y: 100 }, {autoAlpha: 1, y: 0, ease: Power4.easeInOut }, '-=4' )
      


    var scene1 = new ScrollMagic.Scene({
      triggerElement: this,
      // duration: "100%",
      duration: "0%",
      reverse: false,
      offset: "-250%",
      // triggerHook: 0,
    })

    .setTween(tl)
    // .addIndicators({
    // 	name: 'reveal',
    // 	colorTrigger: 'black',
    // 	indent: 0,
    // 	colorStart: 'green',
    // })
    .addTo(controller);


  })
};
roomAnimate();

var stickyPlugin = function() {
  $(".js-sticky-nav").sticky({topSpacing:0});
};
stickyPlugin();





















//---------------------------------------------------

// function search(){
//     let se = document.querySelector('.ss').value.toUpperCase();
//     let it = document.getElementsByClassName('.item');
//     let h = document.getElementsByTagName('h1');
//     let i;
//    for( i= 0; i < h.length; i++){
   
//       if(h[i].innerHTML.toUpperCase().indexOf(se) >= 0){

//        //alert(h[i].innerHTML);
    
//        console.log(h[i].innerHTML.toUpperCase().indexOf(se));
        
         
//          items[i].style.transform = `none`;
//          items[i].style.zIndex = 1
//          items[i].style.filter = 'none';
//          items[i].style.opacity = 1;
//          items[i].style.display ="";
       
       
         
//     }
//         //h[i] = 0;
//        // items[i].style.display ="";
//         //loadShow(); 
 
  
 
//     else{
//          items[i].style.display ="none"; 
//          gg.style.display =""; 
      
//      }

//     }
  
//    }

