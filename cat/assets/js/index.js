// ViewModel
const loadBtn = document.querySelector('.load-btn')
const catFactEl = document.querySelector('.cat-fact');
const errorMessageEl = document.querySelector('.error-message');

const api = new Api();

loadBtn.onclick = loadCatFact;

loadCatFact();

function showCatFact({ fact, length }) {
    const cat = new CatResponse(fact, length);
    catFactEl.classList.remove('invisible');
    errorMessageEl.classList.add('invisible');
    catFactEl.textContent = cat.fact;
}

function showError(message) {
    catFactEl.classList.add('invisible');
    errorMessageEl.classList.remove('invisible');
    errorMessageEl.textContent = message;
}

function loadCatFact() {
    showLoader();
    api.fetchCatFact()
        .then((data) => {
            showCatFact(data);
        }).catch(err => {
            showError(err.message);
        }).finally(() => hideLoader())
}