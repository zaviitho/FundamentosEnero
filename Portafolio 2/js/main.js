const nav= document.querySelector('#nav')
const a= document.querySelector('.nav-link')
const label= document.querySelector('.label')
const input= document.querySelector('#menu-hamburguesa')
const img= document.querySelector('.img-burguer')
console.log(nav)
console.log(a)
console.log(label)
a.addEventListener('click',e=>{

        nav.style.visibility="hidden"
        setTimeout(()=>{
            label.style.visibility="visible"
            
        },1000)
        
    console.log('operacion exitosa')
    
})