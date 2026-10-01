const data = sampleJobs;
const searchfield = document.querySelector('#search-bar input');
const btnsearch = document.querySelector('#search-bar button');
const latest = document.querySelector('#latest-jobs-section .job-cards-container');
const feature = document.querySelector('#featured-section .job-cards-container');
const category = document.querySelector('.category-cards-container');

console.log(data);


/* for rendering */
render(latest,data);

/* latest jobs section */

const isValid = function(card,value){
    return(
        card.title.toLowerCase().includes(value) ||
        card.company.toLowerCase().includes(value) ||
        card.skills.some(skill=>skill.toLowerCase().includes(value))
    );
}

btnsearch.addEventListener('click',()=>{
    const searchvalue = searchfield.value.trim().toLowerCase();
    render(latest,data.filter(job=> isValid(job,searchvalue)));
    document.querySelector('#latest-jobs-section').scrollIntoView({behavior : 'smooth'});
    searchfield.value = '';
});


/* sort the list for featured section */
const sortedlist = [...data].sort((a,b)=>{
    const[amin,amax] = a.salary.split('-').map(Number);
    const[bmin,bmax] = b.salary.split('-').map(Number);

    const compare = bmax - amax;

    if(compare!=0){
        return compare;
    }

    return bmin - amin;
}).slice(0,3);

render(feature,sortedlist);


/* jobs details button */

latest.addEventListener('click',(event)=>{
    const btn = event.target.closest('.btn-details');
    if(!btn){
        return;
    }
    const jobcard = btn.closest('.job-card');
    const jobid = jobcard.dataset.id;
    
    window.location.href = `jobDetails.html?id=${jobid}`;
});

feature.addEventListener('click', (event) => {
    const btn = event.target.closest('.btn-details');
    if (!btn) {
        return;
    }
    const jobcard = btn.closest('.job-card');
    const jobid = jobcard.dataset.id;

    window.location.href = `jobDetails.html?id=${jobid}`;
});


findToggle(latest);
findToggle(feature);

/* categories section */

const categories = [...new Set(data.map(cat => cat.category))];

const array = categories.map((cat)=>{
    const matchedjob = data.find(match=>cat==match.category);
    const jobcount = data.filter(jobs=>jobs.category==cat).length;

    return {
        category : cat,
        count : jobcount,
        logo : matchedjob.logo,
    }
});


category.innerHTML = array.map(card=>
        `<a href="filter.html?category=${card.category}" class="category-card" data-category="${card.category}">
            <div class="category-icon">${card.logo}</div>
            <h3 class="category-name">${card.category}</h3>
            <span class="category-count">${card.count}</span>
        </a>`
).join('');