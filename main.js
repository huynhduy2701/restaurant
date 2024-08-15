const menuBtn= document.getElementById("menu-btn");
const navLinks= document.getElementById("nav-links");
const btnMenuIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    btnMenuIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line")
})
navLinks.addEventListener("click",(e)=>{
    e.preventDefault();
    navLinks.classList.remove("open");
    btnMenuIcon.setAttribute("class","ri-menu-line")

})

const scrollReveal = ScrollReveal();
const scrollRevealOption = {
    distance : "50px",
    origin : "bottom",
    duration :1000
}
scrollReveal.reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "left",
})
scrollReveal.reveal(".header_tag",{
    ...scrollRevealOption,
    delay:500
})
scrollReveal.reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:1000
})

scrollReveal.reveal(".header_content .section_description",{
    ...scrollRevealOption,
    delay:1500
})

scrollReveal.reveal(".header_btns ",{
    ...scrollRevealOption,
    delay:2000
})
scrollReveal.reveal(".section_subheader ",{
    ...scrollRevealOption,
    delay:2500
})
scrollReveal.reveal(".section_header ",{
    ...scrollRevealOption,
    delay:3000
})
scrollReveal.reveal(".service_card ",{
    ...scrollRevealOption,
    interval:1000
})



const swiper =  new Swiper(".swiper",{
    slidesPerView : "auto",
    spaceBetween : 20,
})
scrollReveal.reveal(".section_container .client_img",{
    ...scrollRevealOption,
    origin :"left",
    delay : 500
})

scrollReveal.reveal(".client_content .section_subheader ",{
    ...scrollRevealOption,
    origin :"bottom",
    delay : 1000
})

scrollReveal.reveal(".client_content .section_header ",{
    ...scrollRevealOption,
    origin :"right",
    delay : 1500
})

scrollReveal.reveal(".client_content .section_description",{
    ...scrollRevealOption,
    origin :"right",
    delay : 2000
})

scrollReveal.reveal(".client_content .client_details",{
    ...scrollRevealOption,
    origin :"bottom",
    delay : 2500
})

scrollReveal.reveal(".client_content .client-rating span",{
    ...scrollRevealOption,
   interval :500
})



scrollReveal.reveal(".section_container .download_image",{
    ...scrollRevealOption,
    origin :"right",
    delay : 500
})
scrollReveal.reveal(".section_container .download_content",{
    ...scrollRevealOption,
    interval :500
})