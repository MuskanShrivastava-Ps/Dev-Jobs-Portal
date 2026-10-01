const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const data = sampleJobs;
const detailcontainer = document.querySelector('#container');
const back = document.querySelector('#back-btn');
const form = document.querySelector('#subdiv-form');
const successScreen = document.querySelector('#success-section');
const subdiv = document.querySelector('#subdiv');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
});

const createdetailcards = function(detailcard){
    return(
        `<div id="details-card">
                <h2 id="company-name">${detailcard.company}</h2>
                <div class="brief">
                    <h3>Job Description:</h3>
                    ${detailcard.description.map(card=>`<p class="brief-details">${card}</p>`).join('')}
                </div>
                <div class="brief">
                    <h3>Responsibilities:</h3>
                    ${detailcard.responsibilities.map(card =>`<p class="brief-details">${card}</p>`).join('')}
                </div>
                <div class="brief">
                    <h3>Requirement:</h3>
                    ${detailcard.requirements.map(card => `<p class="brief-details">${card}</p>`).join('')}
                </div>
                <div class="sub-headings" id="skills">
                    <h3>Skills:</h3>
                    <ul>
                        ${detailcard.skills.map(skill=>`<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="job-meta">
                    <div class="meta-item" id="benefits">
                        <label class="sub-headings">Benifits:</label>
                        ${detailcard.benefits.map(benifit => `<p class="brief-details">${benifit}</p>`).join('')}
                    </div>

                    <div class="meta-item" id="salary">
                        <label class="sub-headings">Salary:</label>
                        <span class="meta-text brief-details">${detailcard.salaryLabel}</span>
                    </div>

                    <div class="meta-item" id="experience">
                        <label class="sub-headings">Experience:</label>
                        <span class="meta-text brief-details">${detailcard.experienceLabel}</span>
                    </div>

                    <div class="meta-item" id="location">
                        <label class="sub-headings">Location:</label>
                        <span class="meta-text brief-details">${detailcard.location}</span>
                    </div>
                </div>
                <button type="button" id="apply-btn">Apply</button>
            </div>`
    )
}

const card = data.find(i=>i.id==id);
detailcontainer.innerHTML = createdetailcards(card);

back.addEventListener('click',()=>{
    window.history.back();
});

const applyBtn = document.querySelector('#apply-btn');
const multiStepApp = document.querySelector('#multi-step-app');
const closeFormBtn = document.querySelector('#close-form-btn');

function applyreset(){
    successScreen.classList.remove('step-active');
    successScreen.classList.add('step-hidden');
    subdiv.classList.remove('step-hidden');
    subdiv.classList.add('step-active');
}

applyBtn.addEventListener('click', () => {
    applyreset();
    multiStepApp.style.display = 'flex';
    showstep(0);
    form.reset();
});

closeFormBtn.addEventListener('click', () => {
    multiStepApp.style.display = 'none';
});

multiStepApp.addEventListener('click', (event) => {
    if (event.target === multiStepApp) {
        multiStepApp.style.display = 'none';
    }
});

const steps = ['#personal-info', '#professional-details', '#upload-section','#review-section'];
let currentpage = 0;

const dataObject = {
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: [],
    portfolio: '',
    linkdin: '',
    resume: null,
    coverletter: null,
}

function updateReview(){
        document.querySelector('#review-name').textContent = dataObject.name;

        document.querySelector('#review-email').textContent = dataObject.email;

        document.querySelector('#review-phone').textContent = dataObject.phone;

        document.querySelector('#review-experience').textContent =
            dataObject.experience;

        document.querySelector('#review-skills').textContent =
            dataObject.skills.join(', ');

        document.querySelector('#review-portfolio').textContent =
            dataObject.portfolio;

        document.querySelector('#review-linkedin').textContent =
            dataObject.linkdin;

        document.querySelector('#review-resume').textContent =
            dataObject.resume.name;

        document.querySelector('#review-coverletter').textContent =
            dataObject.coverletter.name;
}

const backbtn = document.querySelector('#back-btn-form');
const nextbtn = document.querySelector('#next-btn');
const subbtn = document.querySelector('#submit-btn');

function showstep(page){

    const currentr = document.querySelector(steps[currentpage]).classList.remove('step-active');
    const currenta = document.querySelector(steps[currentpage]).classList.add('step-hidden');
    const newr = document.querySelector(steps[page]).classList.remove('step-hidden');
    const newa = document.querySelector(steps[page]).classList.add('step-active');

    currentpage = page;

    const count = document.querySelector('#step-counter');
    const bar = document.querySelector('#progress-fill');

    count.textContent = `Step ${currentpage+1} of ${steps.length}`;
    bar.style.width = `${((currentpage+1)/steps.length)*100}%`;

    backbtn.classList.toggle('step-hidden', currentpage==0);
    nextbtn.classList.toggle('step-hidden', currentpage==steps.length-1);
    
    subbtn.classList.toggle('step-hidden', currentpage !== steps.length - 1);
}


function checkPersonalInfo() {
    const valid = [...document.querySelectorAll('#personal-info input')].every(input => input.reportValidity());
    return valid;
}

function professional(){
    const valid = [...document.querySelectorAll('#professional-details input')].every(input => input.reportValidity());
    return valid;
}

function savePersonalInfo(){
    dataObject.name = document.querySelector('#personal-info input[type="text"]').value;
    dataObject.email = document.querySelector('#personal-info input[type="email"]').value;
    dataObject.phone = document.querySelector('#personal-info input[type="tel"]').value;
}

function saveProfessionalInfo(){
    dataObject.experience = document.querySelector('#experience-id select').value;
    const skills = [...document.querySelectorAll('.skills-options input')];
    dataObject.skills = skills.filter(input=>input.checked).map(value=>value.value);
    dataObject.portfolio = document.querySelector('#portfolio input[type="url"]').value;
    dataObject.linkdin = document.querySelector('#linkdin input[type="url"]').value;
}

function saveUpload(){
    const upload = document.querySelectorAll('#upload-section input[type="file"]');
    dataObject.resume = upload[0].files[0];
    dataObject.coverletter = upload[1].files[0];
}

function uploadSection(){
    const valid = [...document.querySelectorAll('#upload-section input[type="file"]')];
    
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    for(let input of valid){
        let file = input.files[0];

        const filesize = 5 * 1024 * 1024;

        if(!file){
            input.reportValidity();
            return false;
        }

        if(!allowedTypes.includes(file.type)){
            alert('Please select a PDF, DOC, or DOCX file.');
            return false;
        }
        
        if(file.size>filesize){
            alert('Please put the valid file size.');
            return false;
        }
    }
    return true;
}

backbtn.addEventListener('click',()=>{
    if (currentpage>0){
        showstep(currentpage - 1);
    }
});

nextbtn.addEventListener('click', () =>{
    if (currentpage<steps.length-1){
        if(currentpage==0){
            if(!checkPersonalInfo()){
                return;
            }
            savePersonalInfo();
        }
        else if(currentpage==1){
            if(!professional()){
                return;
            }
            saveProfessionalInfo();
        }
        else if(currentpage===2){
            if (!uploadSection()){
                return;
            }
            saveUpload();
            updateReview();
        }
        showstep(currentpage + 1);
    }
});

function updateSuccess(){
    document.querySelector('#idValue').textContent = id;
    document.querySelector('#dateValue').textContent = new Date().toLocaleDateString();
}

subbtn.addEventListener('click',()=>{
    updateSuccess();
    const appliedid = JSON.parse(localStorage.getItem('appliedids')) || [];
    appliedid.push(Number(id));
    localStorage.setItem('appliedids', JSON.stringify(appliedid));
    successScreen.classList.remove('step-hidden');
    successScreen.classList.add('step-active');
    subdiv.classList.remove('step-active');
    subdiv.classList.add('step-hidden');
});

