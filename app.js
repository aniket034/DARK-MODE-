const paragraph = document.getElementById('para');
const heading = document.getElementById('heading');
const button = document.getElementById('darkmode');
const pyazz = document.getElementById('pyaz');
const bodyy = document.getElementById('bodyy');
const navitem = document.getElementsByClassName('navitems');
const ham = document.getElementsByClassName('burb');
const para = documnet.getElementsByClassName('para2');

function darkM() {
    paragraph.classList.toggle('dark');
    heading.classList.toggle('dark');
    button.classList.toggle('dark');    
    pyazz.classList.toggle('border1');
    bodyy.classList.toggle('style2');
    ham[0].classList.toggle('nerf');
    ham[1].classList.toggle('nerf');
    ham[2].classList.toggle('nerf');
    para[0].classList.toggle('parac');
}

function nana() {
    navitem[0].classList.toggle('active');
}

