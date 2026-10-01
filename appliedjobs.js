const back = document.querySelector('#back-btn');
const container = document.querySelector('.job-cards-container');

const data = sampleJobs;

const appliedid = JSON.parse(localStorage.getItem('appliedids')) || [];
const filterdata = data.filter(card=>appliedid.includes(card.id));

render(container,filterdata);

container.addEventListener('click', (event) => {
    const btn = event.target.closest('.btn-details');
    if (!btn) {
        return;
    }
    const jobcard = btn.closest('.job-card');
    const jobid = jobcard.dataset.id;

    window.location.href = `jobDetails.html?id=${jobid}`;
});

back.addEventListener('click',()=>{
    window.history.back();
});

findToggle(container);

