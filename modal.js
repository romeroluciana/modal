const modal=document.querySelector(".modal-bg");
const mainBtn = document.querySelector(".modal-btn")
const closeBtn=document.querySelector(".close-btn")
const subBtn=document.querySelector(".subscribe-btn")


mainBtn.addEventListener("click",()=>{
    modal.classList.add("active")
});

closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active")
})

subBtn.addEventListener("click",()=>{
    alert("gracias por suscribirse!!!!")
})