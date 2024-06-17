// the api key from the backend



// the api fetch data (calling the api to the frontend)


// the functionality for the search icon begins from here

//  the functionalities for other events in the Dashboard of lerniio
const allSchool = document.querySelectorAll('.school-name');
const searchSchool = document.querySelector('.search-name');

allSchool.forEach(element => {
  element.addEventListener('click', ()=>{
    
    searchSchool.value = element.textContent;

  })
});


const searchNavigation = document.querySelector('.search-nav');

searchNavigation.addEventListener('click', ()=>{
  searchSchool.focus();
  searchSchool.dispatchEvent(new Event('input'));
});

// navigate to the university page
const viewAllBtn = document.querySelector('.filtering-header h5');
const uniPage = document.querySelector('.main-content');

// viewAllBtn.addEventListener('click', ()=>{
  
//   uniPage.innerHTML =`
           
//   `
// });

// the school search functionality begisn from here

// Date functionalities
const DateBoard = document.querySelectorAll('.date-content');
const dateARRAY = Array.from(DateBoard);

// darktheme for the website


// get new date function
const date = new Date;

// the array of the months in a year
const monthNames = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = date.getMonth();

dateARRAY.forEach(element => {
  element.textContent = `${date.getDate()} ${monthNames[month]} ${date.getFullYear()}`;
});














