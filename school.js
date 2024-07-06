// the mobile navigation
const MenuAll = document.querySelector('.navigation-section');
const MenuButton = document.querySelector('.mobile-menu');
const MenuRemove = document.querySelector('.menu-Ham');

MenuButton.addEventListener('click', ()=>{

  MenuAll.classList.add('mobile-nav-show');

});

MenuRemove.addEventListener('click', ()=>{

  MenuAll.classList.remove('mobile-nav-show');
  MenuAll.classList.add('mobile-nav-remove');

});

// the school functionality
const searchNavigation = document.querySelector('.search-nav');
const searchName = document.querySelector('.searches-btn');
const schoolHeader = document.querySelector('.filtering-header h1');
const schoolNav = document.querySelector('.filterss');
const filterssSecond = document.querySelector('.filterss-2');
const filteringAll = document.querySelector('.filteringss-all');
const TemplateSchools = document.querySelector('.filtering-btn');
const secondFilterTemplate = document.querySelector('.filtering-template');
const searchSchool = document.querySelector('.search-name');
const formSearch = document.querySelector('.form-search');
const backBtn = document.querySelector('.back-btn');

searchNavigation.addEventListener('click', () => {
    searchSchool.focus();
    searchSchool.dispatchEvent(new Event('input'));
});

// the search inputs functionality
searchName.addEventListener('click', () => {

    // the search input button
    searchSchool.focus();
    searchSchool.dispatchEvent(new Event('input'));


    // innerHtml template for the schools navigation
    filterssSecond.style.display = 'flex';
    schoolNav.style.display = 'none';



});

formSearch.addEventListener('submit', (e) => {
    // prevent default of the form
    e.preventDefault();

    // grabbing the value of the search content
    schoolHeader.textContent = searchSchool.value;

    // innerHtml template for the schools navigation
    filterssSecond.style.display = 'flex';
    schoolNav.style.display = 'none';


    // the innerText template of the html written in the form
    TemplateSchools.style.display = 'none';
    secondFilterTemplate.style.display = 'block';

});

// the back btn would take the users back to the previous events
backBtn.addEventListener('click', () => {
    schoolNav.style.display = 'flex';
    filterssSecond.style.display = 'none';

    // the header
    schoolHeader.textContent = 'University in nigeria';


    // the innerText template of the html written in the form
    TemplateSchools.style.display = 'block';
    secondFilterTemplate.style.display = 'none';
});

// the image carousel effects - next and prev button effects


    // the button events for the courses display
    const courseBtn = document.querySelector('.course-button');
    const courseTemplate = document.querySelector('.courses-template');
    const courseClose = document.querySelector('.course-ham svg');
    
    courseBtn.addEventListener('click', ()=>{

        courseTemplate.style.display = 'flex';

    });

    courseClose.addEventListener('click', ()=>{

        courseTemplate.style.display = 'none';

    });

// using get and set attributes to change the source of the image on every click

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector(".form-search");
//     const searchInput = document.querySelector(".search-name");
//     const displayUni = document.querySelector(".filteringss-all");

//     form.addEventListener("submit", async function (event) {
//         event.preventDefault();
//         const query = searchInput.value;
//         const data = await fetchSchoolData(query);
//         updateHTML(data);
//     });

//     async function fetchSchoolData(query) {
//         const response = await fetch(`https://edutech-hmv7.onrender.com/v1/api/school/schoolname/${query}`);
//         const data = await response.json();
//         console.log(data)
//         updateHTML(data)
//         return data;

//     }

//     function updateHTML(data) {
//         displayUni.innerHTML = ""; // Clear previous content
//         console.log(data)
//         const school = data.data
//         const schoolElement = document.createElement("div");
//         schoolElement.classList.add("filtering");
//         schoolElement.innerHTML = `
//               <p class="school-name">${school.name}</p>
//               <p>${school.courses} courses</p>
//               <p>${school.departments} Departments</p>
//               <p>${school.type}</p>
//               <p>${school.location}</p>
//             `;
//         displayUni.appendChild(schoolElement);

//     }
// });

// async function fetchSchoolData(query) {
//     try {
//         const response = await fetch(`https://edutech-hmv7.onrender.com/v1/api/school/schoolname/${query}`);
//         const data = await response.json();
//         console.log(data);
//         if (data.message === "single school data found") {
//             updateHTML(data);
//         } else {
//             console.error("No school data found");
//         }
//         return data;
//     } catch (error) {
//         console.error("Error fetching school data:", error);
//     }
// }

// function updateHTML(data) {
//     const school = data.data


//     document.querySelector('.filter-grid.filtgrid-1 p').innerText = school.schoolDescription;

//     document.querySelector('#fees ul').innerHTML = `
//         <li>New Students Total Fees: ₦16,325.00 (excluding Lab/Studio) and ₦166,300.00 (including Lab/Studio)</li>
//         <li>Returning Students Total Fees: ₦80,750.00 (excluding Lab/Studio) ₦120,250.00 (including Lab/Studio)</li>
//         <li>Medical/Pharmacy Students Total Fees: ₦170,250.00</li>
//     `;

//     document.querySelector('#accommodation ul').innerHTML = `
//         <li>male hostels</li>
//         <p>Include Eni Njoku, King Jaja, Mariere, and Sodeinde Halls, among others. They range from two-man to sixteen-man rooms and offer facilities like common rooms and regular water supply.</p>
//         <li>female hostels</li>
//         <p>Include Fagunwa, Honours, Kofo Ademola, Madam Tinubu, and others. They typically have four occupants per room and face varying conditions regarding cleanliness and water supply.</p>
//     `;

//     document.querySelector('#administration ul').innerHTML = `
//         <li>Vice Chancellor: ${school.vice_chancellor || 'N/A'}</li>
//         <li>Registrar: Dr. Folasade Ipaye</li>
//     `;

//     document.querySelector('#admission ul').innerHTML = `
//         <li>JAMB Cut-off Mark: 200</li>
//         <li>JAMB: 50%</li>
//         <li>O'Level: 20%</li>
//         <li>PUTME: 30%</li>
//         <li>Application Deadline: July 31</li>
//     `;

//     document.querySelector('#student-life ul').innerHTML = `
//         <li>Sports and Recreation</li>
//         <li>Student Union Government</li>
//         <li>Clubs and Societies</li>
//     `;
// }

// // Example usage
// fetchSchoolData('mapoly');
