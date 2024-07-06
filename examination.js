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

// tag the search and initiate the focus
const searchNavigation = document.querySelector(".search-nav");
const searchSchool = document.querySelector(".search-name");
const AllExamLists = document.querySelectorAll(".exam-all");
const AllExamsHeader = document.querySelectorAll(".exam-all h3");

// the exam tags
const Jamb = document.querySelector(".jamb-all");
const Waec = document.querySelector(".waec-all");
const Neco = document.querySelector(".neco-all");
const Ielts = document.querySelector(".ielts-all");
const Jubep = document.querySelector(".jubep-all");
const Nabteb = document.querySelector(".nabteb-all");

searchNavigation.addEventListener("click", () => {
  searchSchool.focus();
  searchSchool.dispatchEvent(new Event("input"));
});

// creating a function for the term
const Header = Array.from(AllExamsHeader);

searchSchool.addEventListener("keyup", (e) => {
  e.preventDefault();
  Header.forEach((element) => {
    if (searchSchool.value.trim() === "jamb") {
      Jamb.style.display = "grid";
    } else if (searchSchool.value.trim() === "waec") {
      Waec.style.display = "grid";
    } else if (searchSchool.value.trim() === "neco") {
      Neco.style.display = "grid";
    } else if (searchSchool.value.trim() === "ielts") {
      Ielts.style.display = "grid";
    } else if (searchSchool.value.trim() === "jubep") {
      Jubep.style.display = "grid";
    } else if (searchSchool.value.trim() === "nabteb") {
      Nabteb.style.display = "grid";
    } else {
      AllExamLists.forEach((element) => {
        // element.style.display = 'none';
        element.classList.add("remove");
      });
    }
  });
});

// using a javascript object array to store the data of various examinations body in nigeria

const ExamSvgButton = document.querySelectorAll(".exam-back");
const ExamsTemplate = document.querySelector(".exam-displays");
const gridAll = document.querySelector(".exam-grid-all");
const headerTemplate = document.querySelector(".exams-all h1");
const BackButton = document.querySelector(".exam-btn");

const svgArray = Array.from(ExamSvgButton);

BackButton.classList.add("remove");

// the object array
const ExamsArray = [
  // jamb contents
  {
    content: `
                        <div class="about-exam">
                            <p>
                                JAMB (Joint Admissions and Matriculation Board) is a Nigerian examination board that conducts entrance examinations 
                                for prospective undergraduates into Nigerian universities,polytechnics, and colleges of education. Established in 1978, 
                                JAMB serves as a centralized body responsible for coordinating admissions into tertiary institutions in Nigeria.
                            </p>                            
                        </div>
                        <div class="reg-lists">
                            <h3>How to register for JAMB</h3>   
                            <ol>
                                <li>Create a profile -  Visit the JAMB registration portal and create a profile with a valid email address and phone number.</li>
                                <li>Get the JAMB e-pin - Purchase the JAMB registration e-PIN from designated banks, online payment platforms, or accredited JAMB centers.</li>
                                <li>Complete Registration: Use the e-PIN to complete your registration online on the JAMB portal, providing necessary personal and academic information.</li>
                                <li>Capture Biometrics: Visit an accredited JAMB center for biometric verification and capture.</li>
                                <li>Print Registration Slip: After successful registration and biometric capture, print your registration slip as evidence of registration.</li>
                            </ol> 

                            <h3>Subjects offered by JAMB</h3>
                            <ol class="subjects-lists">
                               <li>Use of English (Compulsory)</li>
                               <li>Mathematics</li>
                               <li>Physics</li>
                               <li>Chemistry</li>
                               <li>Biology</li>
                               <li>Literature in english</li>
                               <li>Government</li>
                               <li>Economics</li>
                               <li>Commerce</li>
                               <li>Geography</li>
                               <li>agrcultural science</li>
                               <li>accounting</li>
                               <li>christian religious studies</li>
                               <li>islamic religious studies</li>
                               <li>history</li>
                               <li>french</li>
                               <li>music</li>
                               <li>arts</li> 
                            </ol>
                        </div>
        `,
  },
  // waec content
  {
    content: `
                        <div class="about-exam">
                            <p>
                                The west african examination council (WAEC) is a foremost examining board in west africa, established by law to conduct examinations 
                                and award certifications in English-speaking west african countries. It is more or less the final lap and the begining journey for all secondary
                                school students from secondary school to tetiary institutions.
                                waec registrations are handled by secondary schools in cooporation with the west african examinations council board. Students must be enrolled to 
                                a government approved secondary school to be valid for registration.
                            </p>                            
                        </div>
                        <div class="reg-lists">
                            <h3>Waec  examinations are conducted in the following countries</h3>   
                            <ol>
                                <li>Nigeria</li>
                                <li>Ghana</li>
                                <li>Sierra Leone</li>
                                <li>Liberia</li>
                                <li>The Gambia</li>
                            </ol>

                            <h3>Subjects offered by WAEC</h3>
                            <ol class="subjects-lists">
                               <li>Use of English (Compulsory)</li>
                               <li>Mathematics</li>
                               <li>Physics</li>
                               <li>Chemistry</li>
                               <li>Biology</li>
                               <li>Literature in english</li>
                               <li>Government</li>
                               <li>Economics</li>
                               <li>Commerce</li>
                               <li>Geography</li>
                               <li>agrcultural science</li>
                               <li>accounting</li>
                               <li>christian religious studies</li>
                               <li>islamic religious studies</li>
                               <li>history</li>
                               <li>french</li>
                               <li>music</li>
                               <li>arts</li> 
                               <li>Arabic</li>
                               <li>Book keeping</li>
                               <li>woodwork</li>
                               <li>Home economics</li>
                               <li>Further mathematics</li>
                               <li>Metal works</li>
                               <li>Technical Drawings</li>
                            </ol>

                            <h3>How waec calculates and Grades (A1 - F9)</h3>   
                            <ol class="grades">
                                <li>A1 - Excellent (80% - 100%)</li>
                                <li>B2 - Very Good (70% - 79%)</li>
                                <li>B3 - Good (65% - 69%)</li>
                                <li>C4 - Credit (60% - 64%)</li>
                                <li>C5 - Credit (55% - 59%)</li>
                                <li>C6 - Credit (50% - 54%)</li>
                                <li>D7 - Pass (45% - 49%)</li>
                                <li>E8 - Pass (40% - 44%)</li>
                                <li>F9 - Fail (0% - 39%)</li>
                            </ol>
                        </div>
        `,
  },
  // neco content
  {
    content: `
                        <div class="about-exam">
                            <p>
                                National examination council (NECO) is an examination body in Nigeria that conducts
                                senior secondary school certifications (SSCE)  and general certificate examinations. 
                                Neco conducts examinations on various subjects and issues certificates to successful 
                                candidates which are recognized by tetiary instituitions in nigeria and beyond.
                                Neco examinaition is a nigerian based exam, therefore unlike waec it is only 
                                conducted in nigeria.
                            </p>                            
                        </div>  
                        <div class="reg-lists">
                            <h3>Subjects offered by NECO</h3>
                            <ol class="subjects-lists">
                               <li>Use of English (Compulsory)</li>
                               <li>Mathematics</li>
                               <li>Physics</li>
                               <li>Chemistry</li>
                               <li>Biology</li>
                               <li>Literature in english</li>
                               <li>Government</li>
                               <li>Economics</li>
                               <li>Commerce</li>
                               <li>Geography</li>
                               <li>agrcultural science</li>
                               <li>christian religious studies</li>
                               <li>islamic religious studies</li>
                               <li>history</li>
                               <li>french</li>
                               <li>music</li>
                               <li>arts</li> 
                               <li>Arabic</li>
                               <li>Book keeping</li>
                               <li>woodwork</li>
                               <li>Home economics</li>
                               <li>Further mathematics</li>
                               <li>Metal works</li>
                               <li>Technical Drawings</li>
                            </ol>

                            <h3>How Neco calculates and Grades (A1 - F9)</h3>   
                            <ol class="grades">
                                <li>A1 - Excellent (80% - 100%)</li>
                                <li>B2 - Very Good (70% - 79%)</li>
                                <li>B3 - Good (65% - 69%)</li>
                                <li>C4 - Credit (60% - 64%)</li>
                                <li>C5 - Credit (55% - 59%)</li>
                                <li>C6 - Credit (50% - 54%)</li>
                                <li>D7 - Pass (45% - 49%)</li>
                                <li>E8 - Pass (40% - 44%)</li>
                                <li>F9 - Fail (0% - 39%)</li>
                            </ol>
                        </div>
        `,
  },
  // ielts content
  {
    content: `
                        <div class="about-exam">
                            <p>
                                The international English Language Testing system (IELTS)
                                is a standardized test designed to assess the English 
                                language proficiency of non-native speakers. It is accepted by over 10,000
                                universities, and governments worldwide as proof of English language proficiency.
                                The test assesses four  lanaguage skills - listening, Reading, writing and speaking.
                                IELTS has two test formats, Academic(for students applying to higher education or professional registration),
                                and General Training(for those migrating to English-speaking countries or seeking work opportunities).
                            </p>                            
                        </div>  
                        <div class="reg-lists">
                            <h3>Overview of IELTS</h3>
                            <ol>
                               <li><b>Purpose: </b> To evaluate language skills of individuals 
                                    for academic, and professional, and imigration purposes. 
                                </li>
                               <li><b>Administered By: </b> Jointly managed by the British Council, 
                                   IDP:IELTS Australia, and Cambridge Assessment English. 
                               </li>
                            </ol>

                            <h3>IELTS Test structures</h3>   
                            <ol>
                                <li><b>Listening: </b> 30 minutes - Four sections with 40 questions and monologues
                                    in various accents.
                                </li>
                                <li><b>Reading: </b> 60 minutes - Three sections with 40 questions, Varying between Academic
                                    and General Training.</li>
                                <li><b>Writing: </b> 60 minutes - Two task; Task 1 (150 words) and Task 2 (250 words). Academia 
                                involves graphs, charts, or diagrams while general training focuses on letters or essays.</li>
                                <li><b>Speaking: </b> 11-14 minutes - A face-to-face interview divided into three parts - introduction,
                                long turn, and a discussion.</li>
                            </ol>

                            <h3>IELTS Scoring</h3>   
                            <ol>
                                <li><b>Scale: </b> 0-9, with half-band increments.</li>
                                <li><b>Skills Assessed: </b> Listening, reading, writing and speaking.</li>
                                <li><b>Score Validity: </b> Generally Valid for two years.</li>
                            </ol>

                            <h3>IELTS Test Availability, Locations, Registrations and Fees</h3>   
                            <ol>
                                <li><b>Frequency: </b> Offered multiple  times a year</li>
                                <li><b>Locations: </b> Available at over 1600 test centers in more than 140 countries.</li>
                                <li><b>Registration: </b> Online or at test centers.</li>                            
                                <li><b>Registration: </b> Vary by country, typically ranging from $150 - $250</li>                            
                            </ol>
                        </div>
        `,
  },
  // jubep content
  {
    content: `
                        <div class="about-exam">
                            <p>
                               The joint Universities Preliminary Examinations Board (JUBEP) is an 
                               initiative in Nigeria that provides an alternative route for gaining 
                               admission into Nigerian universities.
                            </p>                            
                        </div>  
                        <div class="reg-lists">
                            <h3>Overview of JUBEP</h3>
                            <ol>
                               <li><b>Purpose: </b> To offer an alternative route for admission into Nigerian
                               universities, particularly into the 200 level (direct entry) after a one year pre-degree
                               program.
                                </li>
                            </ol>

                            <h3>JUBEP Establishments and Administration</h3>   
                            <ol>
                                <li><b>Year established: </b> JUBEP was established in 2013</li>
                                <li><b>Initiator: </b> JUBEP was initiated by the university of lagos (UNILAG) 
                                    in collaboration with other partnering universities. It is also coordinated and managed 
                                    by UNILAG as it's headquarters.
                                </li>
                            </ol>

                            <h3>JUBEP Program structure</h3>   
                            <ol>
                                <li><b>Duration: </b> The program runs for one academic year, typically divided into two semesters.</li>
                                <li><b>Curriculum: </b> It includes a mix of course work and examinations in various subjects aligned with nigeria university standards</li>
                            </ol>

                            <h3>JUBEP Subjects and combinations</h3>
                            <p>
                                JUBEP offers subjects across arts, social sciences and sciences. 
                                Students choose three to four subjects relevant to their intended university course.
                                the following subjects are popular subjects offered by JUBEP as regards the course
                                the student choose to study in the university: 
                            </p>   
                            <ol class="subjects-lists">
                               <li>English Language</li>
                               <li>Mathematics</li>
                               <li>Physics</li>
                               <li>Chemistry</li>
                               <li>Biology</li>
                               <li>Literature in english</li>
                               <li>Economics</li>
                               <li>History</li>
                               <li>Geography</li>
                               <li>Business studies</li>
                               <li>christian religious studies</li>
                            </ol>

                            <h3>JUBEP Admission and Requirements</h3>   
                            <ol>
                                <li><b>Eligibility: </b> Open to candidates with at least five credit passes in relevant O-level subjects, including
                                    English language and mathematics.
                                </li>
                                <li><b>Application: </b> Interested candidates apply through any of the approved JUBEP  affiliate universities of colleges.</li>
                                <li><b>Fees: </b> Vary by institution but generally cover tutio, examination fees, and other administrative costs.</li>
                            </ol>

                            <h3>List of Universities that offers JUBEP Program</h3> 

                            <ol class="subjects-lists">
                               <li>University of Lagos (UNILAG)</li>
                               <li>Obafemi Awolowo University (OAU)</li>
                               <li>University of Benin (UNIBEN)</li>
                               <li>Federal University of Agriculture, Abeokuta (FUNAAB)</li>
                               <li>University of Nigeria (UNN)</li>
                               <li>University of Port Harcourt (UNIPORT)</li>
                            </ol>

                            <h3>Challenges you might face - JUBEP</h3>

                            <p>
                                Challenges to look out for are the cost for some students. JUBEP is a very expensive program and it's availability 
                                is not open to all universities in Nigeria. for more information regarding this program for your desired choice of instituition 
                                it's best you check in with the requirements of the school to get more informaton and help you out in your registration. Check our schools page
                                for the the desired school portal and get more info on how it works.
                            </p>
                        </div>
        `,
  },
  // nabteb content
  {
    content: `
                        <div class="about-exam">
                            <p>
                               The National Business and Technical Examinations Board(NABTEB) is a Nigerian examination body that
                               focuses on business and technical education. 
                            </p>                            
                        </div>  
                        <div class="reg-lists">
                            <h3>Overview of NABTEB</h3>
                            <ol>
                               <li><b>Purpose: </b> To conduct examinations and issue certifications ini business and technical subjects to enhance 
                                  vocational educational in Nigeria.
                                </li>
                            </ol>

                            <h3>NABTEB Establishments and Administration</h3>   
                            <ol>
                                <li><b>Year established: </b> NABTEB was established in 1992</li>
                                <li><b>Headquarters: </b> NABTEB was initiated in Benin City, Edo state, Nigeria.</li>
                            </ol>

                            <h3>NABTEB Examination  Types</h3>   
                            <ol>
                                <li><b>National Technical Certificate (NTC): </b> For technical trades like electrical mechanical and building trades.</li>
                                <li><b>National Business Certificate (NBC): </b> For business subjects like bookkeeping, accounting and secretarial studies.</li>
                                <li><b>Advanced National Technical Certificate: </b> Higher level of the NTC, focusing on Advanced technical skills.</li>
                                <li><b>Advanced National Business Certificate: </b> Higher level of the NBC, focusing on advanced business skills.</li>
                                <li><b>Modular Trade Certificate: </b> For short term course in specific trades and skills.</li>
                                </ol>

                            <h3>NABTEB Subjects and courses</h3>
                            <p>
                                NABTEB offers Technical subjects which includes electrical installation, welding, motor vehicle, mechanics, building construction,
                                and electronics. They also offer Business subjects like office practice, accounting, commerce, shorthand, and typewriting.
                                Lastly they offer vocational subjects like fashion design, catering, cosmetology, and woodwork.  
                            </p>   

                            <h3>NABTEB Registration and Requirements</h3>   
                            <ol>
                                <li><b>Eligibility: </b> Open to candidates who have completed junior secondary school or equivalent.</li>
                                <li><b>Application: </b> Registration can be done online through the NABTEB portal or at accredited centers.</li>
                                <li><b>Fees: </b> Vary depending on the type of examination and the number of subjects</li>
                            </ol>

                            <h3>Examination Grading of NABTEB</h3> 

                            <ol>
                                <li><b>Examination schedule: </b> Conducted annually, usually in May/June and November/December.</li>
                                <li><b>Examination Centers: </b> Available in accredited technical colleges, business schools, and vocational centers across Nigeria.</li>
                                <li><b>Grading system: </b> Uses grades such as A(Excellent), B(Very good), C(Cdredit), P(Pass), and F(Fail).</li>
                            </ol>

                            <h3>Certification and Recognition of NABTEB</h3> 

                            <ol>
                                <li><b>Certification: </b> NABTEB ccertificates are recognized for employment andfurther education within nigeria and internationally.</li>
                                <li><b>Acceptance: </b> Accepted by technical colleges, polytechnics, and universities for admission into higher education programs.</li>
                            </ol>

                            <h3>Benefits</h3>

                            <P>
                              skill development - Focuses on practical  skills that are directly applicable in various industries.
                              Employment Opportunities is also a benefit as the skills obtained would enhance employability recognized certifications in technical and business
                              fields. Lastly Entrepreneurship which would support self-employment and entrepreneurship through vocational training.
                            </P>
                        </div>
        `,
  },
];

// the array functionality
// jamb
svgArray[0].addEventListener("click", () => {
  ExamsTemplate.classList.add("show");
  gridAll.classList.add("remove");
  BackButton.classList.remove("remove");

  ExamsTemplate.innerHTML = `
    ${ExamsArray[0].content}
  `;
  headerTemplate.textContent = "Joint admission and matriculation board";
});
// waec
svgArray[1].addEventListener("click", () => {
  ExamsTemplate.classList.add("show");
  gridAll.classList.add("remove");
  BackButton.classList.remove("remove");

  ExamsTemplate.innerHTML = `
    ${ExamsArray[1].content};
    `;
  headerTemplate.textContent = "West African Examination Council";
});
// neco
svgArray[2].addEventListener("click", () => {
  ExamsTemplate.classList.add("show");
  gridAll.classList.add("remove");
  BackButton.classList.remove("remove");

  ExamsTemplate.innerHTML = `
    ${ExamsArray[2].content};
    `;
  headerTemplate.textContent = "National Examination Council";
});
//  ielts
svgArray[3].addEventListener("click", () => {
  ExamsTemplate.classList.add("show");
  gridAll.classList.add("remove");
  BackButton.classList.remove("remove");

  ExamsTemplate.innerHTML = `
    ${ExamsArray[3].content};
    `;
  headerTemplate.textContent = "The International English Language Testing";
});
// jubep
svgArray[4].addEventListener("click", () => {
  ExamsTemplate.classList.add("show");
  gridAll.classList.add("remove");
  BackButton.classList.remove("remove");

  ExamsTemplate.innerHTML = `
    ${ExamsArray[4].content};
    `;
  headerTemplate.textContent =
    "The Joint Universities Preliminary Examinations Board";
});
//nabteb
svgArray[5].addEventListener("click", () => {
  ExamsTemplate.classList.add("show");
  gridAll.classList.add("remove");
  BackButton.classList.remove("remove");

  ExamsTemplate.innerHTML = `
    ${ExamsArray[5].content};
    `;
  headerTemplate.textContent =
    "The National Business and Technical Examination Board";
});
