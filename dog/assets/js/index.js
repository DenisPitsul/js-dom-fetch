// ViewModel
const loadBtn = document.querySelector('.load-btn')
const imageEl = document.querySelector('.image');
const errorMessageEl = document.querySelector('.error-message');

const api = new Api();

loadBtn.onclick = loadDog;
imageEl.onclick = loadDog;

loadDog();

function showDog({ message, status }) {
    const dog = new DogResponse(message, status);
    imageEl.src = dog.message;
}

function showError(message) {
    errorMessageEl.textContent = message;
    imageEl.src = '../../../assets/images/defaultImage.jpg';
}

function loadDog() {
    showLoader();
    api.fetchRandomDogImage()
        .then((data) => {
            showDog(data);
        }).catch(err => {
            showError(err.message);
        }).finally(() => hideLoader())
}