const about = document.querySelector('.about-us');
const options = {
    threshold :0,
};
const appearOnScroll = new IntersectionObserver((entries,appearOnScroll)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
            
        }else{
            console.log(entry.target);
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
        
    });
},options);

appearOnScroll.observe(about);