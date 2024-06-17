// the mobile navigation responsive design
const HarmburgerButton = document.querySelector('.menu-Ham');
const MenuListAll = document.querySelector('header nav ul');

HarmburgerButton.addEventListener('click', ()=>{
    MenuListAll.classList.toggle('show-list');
})


// the FAQ accordion functionality

const svgMinus = document.querySelectorAll('.minus');
const svgPlus = document.querySelectorAll('.plus');
const svgAll = document.querySelectorAll('.faq-content');

// converting to array
const PlusArray = Array.from(svgPlus);
const MinusArray = Array.from(svgMinus);
const svgArray = Array.from(svgAll);


PlusArray[0].addEventListener('click', ()=>{
    svgPlus[0].style.display = 'none';
    svgMinus[0].style.display = 'block';
    svgAll[0].style.display = 'block'; 
});

MinusArray[0].addEventListener('click', ()=>{
    svgPlus[0].style.display = 'block';
    svgMinus[0].style.display = 'none';
    svgAll[0].style.display = 'none'; 
});

PlusArray[1].addEventListener('click', ()=>{
    svgPlus[1].style.display = 'none';
    svgMinus[1].style.display = 'block';
    svgAll[1].style.display = 'block'; 
});

MinusArray[1].addEventListener('click', ()=>{
    svgPlus[1].style.display = 'block';
    svgMinus[1].style.display = 'none';
    svgAll[1].style.display = 'none'; 
});

PlusArray[2].addEventListener('click', ()=>{
    svgPlus[2].style.display = 'none';
    svgMinus[2].style.display = 'block';
    svgAll[2].style.display = 'block'; 
});

MinusArray[2].addEventListener('click', ()=>{
    svgPlus[2].style.display = 'block';
    svgMinus[2].style.display = 'none';
    svgAll[2].style.display = 'none'; 
});

PlusArray[3].addEventListener('click', ()=>{
    svgPlus[3].style.display = 'none';
    svgMinus[3].style.display = 'block';
    svgAll[3].style.display = 'block'; 
});

MinusArray[3].addEventListener('click', ()=>{
    svgPlus[3].style.display = 'block';
    svgMinus[3].style.display = 'none';
    svgAll[3].style.display = 'none'; 
});

PlusArray[4].addEventListener('click', ()=>{
    svgPlus[4].style.display = 'none';
    svgMinus[4].style.display = 'block';
    svgAll[4].style.display = 'block'; 
});

MinusArray[4].addEventListener('click', ()=>{
    svgPlus[4].style.display = 'block';
    svgMinus[4].style.display = 'none';
    svgAll[4].style.display = 'none'; 
});


// the footer date getFullyear functionality();
const date = new Date();
const PresentDate = document.querySelector('.present-date');
PresentDate.textContent = date.getFullYear();
