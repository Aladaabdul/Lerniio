// the api functionality and call response goes in here
// const apikEY = 'https://nigerian-universities.onrender.com/';


const getSchools = async ()=>{
    // the base school
    const baseSchools =  `https://nigerian-universities.onrender.com/`;
   
    const response = await fetch(baseSchools);
    const data = await response.json();
    console.log(data[0]);


};

getSchools();







