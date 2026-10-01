const data = sampleJobs;
const options = document.querySelector('#location-filter');
const category = document.querySelector('.filter-group');
const allcards = document.querySelector('.job-cards-container');
const applybtn = document.querySelector('#applybtn');
const clearbtn = document.querySelector('#clearbtn');
const bookmarkbtn = document.querySelector('#bookmark');
const sortorder = document.querySelector('#job-sort');
const sidebar = document.querySelector('#filters-sidebar button');
const pagenumbers = document.querySelector('#page-numbers');
const prev = document.querySelector('#prev-page');
const next = document.querySelector('#next-page');
const bookmarkicon = document.querySelector('.bookmark-btn');

const jobsperpage = 10;
let currentpage = 1;
let currentFullList = data;


function paginate(data,page){
    const start = (page - 1) * jobsperpage;
    const end = start + jobsperpage;

    return data.slice(start,end);
}

function renderPageNumbers(totalItems,activePage){
    const pages = Math.ceil(totalItems / jobsperpage);
    const section = document.querySelector('#page-numbers');
    section.innerHTML = Array.from({length: pages},(_,i)=>i+1)
    .map(num => `<button type="button" class="page-btn ${num === activePage ? 'active' : ''}">${num}</button>`).join('');
}

function renderpage(fullList,page){
    currentFullList = fullList;
    currentpage = page;
    const totalPages = Math.ceil(fullList.length / jobsperpage);

    if (currentpage <= 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if (currentpage >= totalPages || totalPages === 0) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }

    const pageItems = paginate(fullList, page);
    render(allcards,pageItems);
    renderPageNumbers(fullList.length,page);
}

pagenumbers.addEventListener('click',(event)=>{
    const btn = event.target.closest('.page-btn');
    if(!btn){
        return;
    }
    renderpage(currentFullList,Number(btn.textContent));
});

prev.addEventListener('click',()=>{
    if (currentpage>1){
        renderpage(currentFullList,currentpage-1);
    }
});

next.addEventListener('click', () => {
    if (currentpage < Math.ceil(currentFullList.length / jobsperpage)){
        renderpage(currentFullList, currentpage + 1);
    }
});

const locations = [...new Set(data.map(value => value.locationValue))];

    options.innerHTML = `<option value="all locations">All Locations</option>` +
    locations.map(loc=>`<option value=${loc}>${loc}</option>` 
).join();

const categories = [...new Set(data.map(cat=>cat.category))];

category.innerHTML = categories.map(value =>
    `<label class="filter-option">
            <input type="checkbox" name="category" value="${value}">
            ${value}
</label>`).join('');

const params = new URLSearchParams(window.location.search);

const item = params.get('category');

if(item){
    const categoryMatched = document.querySelector(`input[name="category"][value="${item}"]`);
    if (categoryMatched){
        categoryMatched.checked = true;
        const filtered = data.filter((card)=>card.category==item);
        console.log("data id");
        renderpage(filtered,1);
    }
}
else {
    renderpage(data, 1);
}

function findvalid(salary,job){
    const [minjob,maxjob] = job.salary.split('-').map(Number);

    return salary.length==0 || salary.some(range=>{
        if(range.includes('+')){
           const num = Number(range.replace('+',''));
            return maxjob>=num;
        }

        const [cardmin,cardmax] = range.split('-').map(Number);

        return minjob<=cardmax && maxjob>=cardmin;
    });
}

const isValid = function(job){
    const category = [...document.querySelectorAll('input[name="category"]:checked')].map(cat=>cat.value);
    const experience = [...document.querySelectorAll('input[name="experience"]:checked')].map(cat => cat.value);
    const jobtype = [...document.querySelectorAll('input[name="job-type"]:checked')].map(cat => cat.value);
    const salary = [...document.querySelectorAll('input[name="salary"]:checked')].map(cat => cat.value);
    const workmode = document.querySelector('input[name="work-mode"]:checked');
    const optionvalue = options.value;

    const cval = category.length==0 || category.includes(job.category);
    const exval = experience.length == 0 || experience.includes(job.experience);
    const sval = findvalid(salary,job);
    const jobval = jobtype.length == 0 || jobtype.includes(job.jobType);
    const workval = workmode.value=='all' || workmode.value==job.workMode;
    const optionval = optionvalue==job.locationValue || optionvalue=='all locations';

    return cval && exval && sval && jobval && workval && optionval;
}

/* apply button */

applybtn.addEventListener('click',()=>{
    const list = data.filter(card=> isValid(card));
    const datasorted = sort(sortorder.value,list);
    renderpage(datasorted,1);
});


/* clear button */

clearbtn.addEventListener('click',()=>{
    const category = [...document.querySelectorAll('input[name="category"]')].forEach((cat)=>cat.checked=false);
    options.value = 'all locations';
    const experience = [...document.querySelectorAll('input[name="experience"]')].forEach((cat) => cat.checked = false);
    const salary = [...document.querySelectorAll('input[name="salary"]')].forEach((cat) => cat.checked = false);
    const jobtype = [...document.querySelectorAll('input[name="job-type"]')].forEach((cat) => cat.checked = false);
    document.querySelector('input[name="work-mode"][value="all"]').checked = true;
    renderpage(data,1);
});

/* bookmark */

bookmarkbtn.addEventListener('click',()=>{
    const bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];
    const filter = data.filter(job => bookmark.includes(job.id));
    renderpage(filter,1);
});

/* sort */

const label = function(date){
    if(date==='Today'){
        return 0;
    }
    if(date.includes('week')){
        return 7;
    }
    return Number(date.split(' ')[0]);
}

const sort = function(order,data){
    let sorted;
    if(order==='latest'){
        sorted = [...data].sort((a, b) => label(a.postedDate) - label(b.postedDate));
    }
    else if (order ==='salary-desc'){
        sorted = [...data].sort((a,b)=>{
            const [mina,maxa] = a.salary.split('-').map(Number);
            const [minb, maxb] = b.salary.split('-').map(Number);

            const compare = maxb - maxa;

            if(compare!=0){
                return compare;
            }
            return minb - mina;
        });
    }
    else if (order ==='salary-asc'){
        sorted = [...data].sort((a, b) => {
            const [mina, maxa] = a.salary.split('-').map(Number);
            const [minb, maxb] = b.salary.split('-').map(Number);

            const compare = maxa - maxb;

            if (compare != 0) {
                return compare;
            }

            return mina - minb;
        });
    }
    else{
        sorted = [...data].sort((a,b)=>a.title.localeCompare(b.title));
    }
    
    return sorted;
}

sidebar.addEventListener('click',()=>{
    window.history.back();
})

findToggle(allcards);

allcards.addEventListener('click', (event) => {
    const btn = event.target.closest('.btn-details');
    if (!btn) {
        return;
    }
    const jobcard = btn.closest('.job-card');
    const jobid = jobcard.dataset.id;

    window.location.href = `jobDetails.html?id=${jobid}`;
});


