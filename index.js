//<!--================================Auto navbar section=====================================-->
const section=document.querySelectorAll('section')
const navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec => {
       let top=window.scrollY;
       let offset=sec.offsetTop-150;
       let height=sec.offsetHeight;
       let id=sec.getAttribute('id') 
       if(top>=offset && top< offset + height){
        navLink.forEach(links=>{
            links.classList.remove('active')
            document.querySelector('header nav a[href*='+id+']').classList.add('active')
        })
       }
    });
    //<!--================================sticky navbar section=====================================-->
    var header=document.querySelector('header')
    header.classList.toggle("sticky",window.scrollY>100)
    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')    
};
//<!--================================Auto navbar section=====================================-->
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
//<!--================================Text typing section=====================================-->
var type=new Typed('.textLine',{
    strings:['Data Analyst','Frontend Developer'],
    typeSpeed:100,
    backSpped:100,
    backDelay:1000,
    loop:true
})