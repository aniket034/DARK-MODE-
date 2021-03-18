const paragraph = document.getElementById('para');
const heading = document.getElementById('heading');
const button = document.getElementById('darkmode');
const pyazz = document.getElementById('pyaz');
const bodyy = document.getElementById('bodyy');

function darkM() {
    paragraph.classList.toggle('dark');
    heading.classList.toggle('dark');
    button.classList.toggle('dark');    
    pyazz.classList.toggle('border1');
    bodyy.classList.toggle('style2');
}

