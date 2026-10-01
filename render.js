let bookmarks = JSON.parse(localStorage.getItem('bookmark')) || [];
const createcards = function (job) {

    const mark = bookmarks.includes(job.id);

    return (`<div class="job-card"
    data-category="${job.category}"
    data-location="${job.locationValue}"
    data-experience="${job.experience}"
    data-salary="${job.salary}"
    data-type="${job.jobType}"
    data-id="${job.id}">
    <div class="card-header">
        <div class="company-logo latest-badge">${job.logo}</div>
        <div class="top-details">
            <h3 class="role">${job.title}</h3>
            <span class="company-name">${job.company}</span>
        </div>
        <i class="fa-${mark ? 'solid' : 'regular'} fa-bookmark fa-2x"></i>
    </div>
    <div class="details">
        <div class="left-details">
            <span class="location">📍 ${job.location}</span>
            <span class="experience">💼 ${job.experienceLabel}</span>
            <!-- Fix 4: field is workMode (capital M), not workmode -->
            <span class="mode">🏠 ${job.workMode}</span>
            <span class="time-stamp">⏰ ${job.postedDate}</span>
        </div>
        <div class="right-details">
            <span class="salary">${job.salaryLabel}</span>
        </div>
    </div>
    <ul class="skills">
        ${job.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
    <div class="card-actions">
        <button type="button" class="btn-details">Job Details</button>
    </div>
</div>`
    )
}

const render = function (container,jobs){
    container.innerHTML = jobs.length ? jobs.map(createcards).join('') : `<p class="no-jobs">No jobs found</p>`;
    const count = document.querySelector('#job-count');
    if(count){
        count.textContent = jobs.length;
    }
}

const toggle = function(jobid){
    if(bookmarks.includes(jobid)){
        bookmarks = bookmarks.filter(id=>id!=jobid);
    }
    else{
        bookmarks.push(jobid);
    }
    localStorage.setItem('bookmark',JSON.stringify(bookmarks));
}

const findToggle = function(container){
    container.addEventListener('click', (event) => {
        const bookmarkbtn = event.target.closest('.fa-bookmark');
        if(!bookmarkbtn){
            return;
        }
        const singlecard = bookmarkbtn.closest('.job-card');
        toggle(Number(singlecard.dataset.id));

        bookmarkbtn.classList.toggle('fa-regular');
        bookmarkbtn.classList.toggle('fa-solid');
    });
}

