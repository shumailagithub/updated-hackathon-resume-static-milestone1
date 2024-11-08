let proj_section = document.getElementById("proj")
let proj_btn = document.getElementById("proj_btn")

let itExperiance_section =document.getElementById("itExperience")
let itExperience_btn =document.getElementById("itExperience_btn")

let langage_section = document.getElementById("LANGAGE")
let langage_btn =document.getElementById("langage_btn")

let skill_section = document.getElementById("skills")
let skills_btn = document.getElementById("skills_btn")

let education_section =document.getElementById("education")
let education_btn =document.getElementById("education_btn")

let contact_section =document.getElementById("contact")
let contact_btn =document.getElementById("contact_btn")


proj_btn?.addEventListener('click', ()=>{
    proj_section!.classList.toggle('hide')
})
itExperience_btn?.addEventListener('click', ()=>{
    itExperiance_section!.classList.toggle('hide')
})

langage_btn?.addEventListener('click', () =>{
    langage_section?.classList.toggle('hide')
})

skills_btn?.addEventListener('click', () =>{
    skill_section?.classList.toggle('hide')
})

education_btn?.addEventListener('click', () =>{
    education_section?.classList.toggle('hide')
})

contact_btn?.addEventListener('click', () =>{
    contact_section?.classList.toggle('hide')
})



let print_btn= document.getElementById("print_btn")

print_btn?.addEventListener('click', () =>{
    window.print()
})