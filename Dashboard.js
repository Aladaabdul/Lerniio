// the api key from the backend



// the api fetch data (calling the api to the frontend)



//  the functionalities for other events in the Dashboard of lerniio
const allSchool = document.querySelectorAll('.school-name');
const searchSchool = document.querySelector('.search-name');

allSchool.forEach(element => {
  element.addEventListener('click', ()=>{
    
    searchSchool.value = element.textContent;

  })
});

// navigate to the university page
const viewAllBtn = document.querySelector('.filtering-header h5');
const uniPage = document.querySelector('.main-content');

viewAllBtn.addEventListener('click', ()=>{
  
  uniPage.innerHTML =`
            <div class="content-search">
            <div class="search-icon">
                <img src="./asset/search-alt-2-svgrepo-com.svg" alt="">
                <input class="search-name"  type="search" name="searchcontents" placeholder="search">
            </div>
            <!-- the light theme -->
            <div class="light-person">
                <img src="./asset/light-svgrepo-com.svg" alt="">
                <img src="./asset/image-thomas.jpg" alt="">
            </div>
        </div>
        
        <div class="display-uni">
          <div class="filtering-header">
                    <h1>Universities in Nigeria</h1>
                    <div class="filterss">
                      <p>All</p>
                      <p>Federal</p>
                      <p>state</p>
                      <p>private</p>
                      <p>poly</p>
                    </div>
                </div>
                
                 <div class="filtering">
                    <p class="school-name">Unilag</p>
                    <p>300 courses</p>
                    <p>15 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Lagos state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Uniben</p>
                    <p>350 courses</p>
                    <p>10 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Benin state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Caleb</p>
                    <p>200 courses</p>
                    <p>11 Dept</p>
                    <p>Private</p>
                    <p>Lagos state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Yabatech</p>
                    <p>200 courses</p>
                    <p>15 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Lagos state</p>
                 </div>

                                  <div class="filtering">
                    <p class="school-name">Unilag</p>
                    <p>300 courses</p>
                    <p>15 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Lagos state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Uniben</p>
                    <p>350 courses</p>
                    <p>10 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Benin state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Caleb</p>
                    <p>200 courses</p>
                    <p>11 Dept</p>
                    <p>Private</p>
                    <p>Lagos state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Yabatech</p>
                    <p>200 courses</p>
                    <p>15 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Lagos state</p>
                 </div>

                  <div class="filtering">
                    <p class="school-name">Unilag</p>
                    <p>300 courses</p>
                    <p>15 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Lagos state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Uniben</p>
                    <p>350 courses</p>
                    <p>10 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Benin state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Caleb</p>
                    <p>200 courses</p>
                    <p>11 Dept</p>
                    <p>Private</p>
                    <p>Lagos state</p>
                 </div>
                 <div class="filtering">
                    <p class="school-name">Yabatech</p>
                    <p>200 courses</p>
                    <p>15 Dept</p>
                    <p>Jamb/wassce</p>
                    <p>Lagos state</p>
                 </div>
              </div>
  `
});

// the school search functionality begisn from here

// Date functionalities
const DateBoard = document.querySelectorAll('.date-content');
const dateARRAY = Array.from(DateBoard);

// get new date function
const date = new Date;

// the array of the months in a year
const monthNames = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = date.getMonth();

dateARRAY.forEach(element => {
  element.textContent = `${date.getDate()} ${monthNames[month]} ${date.getFullYear()}`;
});

// using chart.js for the data collection

// const datamain = document.getElementById('data');
// new chart(datamain, {
//         labels: [
//           'Red',
//           'Blue',
//           'Yellow'
//         ],
//         datasets: [{
//           label: 'My First Dataset',
//           data: [300, 50, 100],
//           backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//             'rgb(255, 205, 86)'
//           ],
//           hoverOffset: 4
//         }]
//       }
// )


