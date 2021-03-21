const paragraph = document.getElementById('para');
const heading = document.getElementById('heading');
const button = document.getElementById('darkmode');
const pyazz = document.getElementById('pyaz');
const bodyy = document.getElementById('bodyy');
const navitem = document.getElementsByClassName('navitems');
const ham = document.getElementsByClassName('burb')

function darkM() {
    paragraph.classList.toggle('dark');
    heading.classList.toggle('dark');
    button.classList.toggle('dark');    
    pyazz.classList.toggle('border1');
    bodyy.classList.toggle('style2');
    ham[0].style.background = 'white';
    ham[1].style.background = 'white';
    ham[2].style.background = 'white';
    

}

function nana() {
    navitem[0].classList.toggle('active');
}

