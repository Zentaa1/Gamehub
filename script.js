//Since i used js in my project for the hamburger menu i would like to 
//write about how this works.


//First off, here we have a const to construct a element in javascript
//where it looks in the document for the .hamburger and .nav-menu
//this is crucial because the javascript cant take inputs from html/css without being "converted" to a element
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


//The "addEventListener(click)" will "listen" to whenever the hamburger element
//that is .hamburger in my html/css gets clicked it will return with
//that the navMenu and hamburger will change state to their Active.
//In my css i have both a normal hamburger/navmenu and one with Active behind
//So this is what causes the hamburger to turn into an X and the navmenu to toggle
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("Active")
    navMenu.classList.toggle("Active")
})


//This part adds another EventListener, but to the "nav-links" instead
//so what this does it that whenever a link gets clicked it will
//remove the Active state of both hamburger and navmenu elements
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })) 