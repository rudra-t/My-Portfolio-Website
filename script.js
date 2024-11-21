let navbar = document.getElementById("nav")


window.addEventListener("scroll", function(){
   navbar.classList.toggle("stickey", window.scrollY > 50)
})


/*===========================================Search Buttons===============================================*/

const filterbuttons = document.querySelectorAll(".filterable-buttons button")
const filtercards = document.querySelectorAll(".project")

const filterCards = e =>{
   document.querySelector(".active").classList.remove("active")
   e.target.classList.add("active")
   console.log(e.target);

   filtercards.forEach (card => {
      card.classList.add("hide")
      if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all")
         card.classList.remove("hide")
   })
}

filterbuttons.forEach(button => button.addEventListener("click", filterCards));

/*===========================================Search Buttons===============================================*/


