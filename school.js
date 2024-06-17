    // the school functionality
    const searchNavigation = document.querySelector('.search-nav');
    const searchName = document.querySelector('.searches-btn');
    const schoolHeader = document.querySelector('.filtering-header h1');
    const schoolNav = document.querySelector('.filterss');
    const filterssSecond = document.querySelector('.filterss-2');
    const filteringAll = document.querySelector('.filteringss-all');
    const TemplateSchools = document.querySelector('.filtering-btn');
    const secondFilterTemplate =  document.querySelector('.filtering-template');
    const searchSchool = document.querySelector('.search-name');
    const formSearch = document.querySelector('.form-search');
    const backBtn = document.querySelector('.back-btn');

    searchNavigation.addEventListener('click', ()=>{
        searchSchool.focus();
        searchSchool.dispatchEvent(new Event('input'));
    });

    // the search inputs functionality
    searchName.addEventListener('click', ()=> {

        // the search input button
        searchSchool.focus();
        searchSchool.dispatchEvent(new Event('input'));


        // innerHtml template for the schools navigation
        filterssSecond.style.display= 'flex';
        schoolNav.style.display = 'none';



    });

    formSearch.addEventListener('submit', (e)=>{
        // prevent default of the form
        e.preventDefault();

        // grabbing the value of the search content
        schoolHeader.textContent = searchSchool.value;

        // innerHtml template for the schools navigation
        filterssSecond.style.display= 'flex';
        schoolNav.style.display = 'none';


        // the innerText template of the html written in the form
        TemplateSchools.style.display = 'none';
        secondFilterTemplate.style.display = 'block';
        
    });

    // the back btn would take the users back to the previous events
    backBtn.addEventListener('click', ()=>{
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

    courseBtn.addEventListener('click', (e)=>{
        e.preventDefault();

        // template for the course button pops up
    });
    
    // using get and set attributes to change the source of the image on every click

