let loader = document.querySelector('.load-screen');
let body = document.querySelector('body');
// window.addEventListener('load',(event)=>{
// //     setTimeout(()=>{
// //         // $('.load-screen').fadeOut('slow');
// //         console.log("1");
// //         // loader.style.display = "none";
// //     },5000);
//     $('.load-screen').fadeOut(4000);
//     // $('.about-us').fadeIn(500);
// })


document.onreadystatechange = function() { 
    
    if (document.readyState !== "complete") { 
        // document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".load-screen").style.visibility = "visible"; 
    } else { 
        $('.load-screen').slideUp(1000);
        // setTimeout(()=>{
        //     document.querySelector(".load-screen").style.visibility = "hidden"; 
        // },2000);
        
    } 
};
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
