// Model
class DogResponse {
    constructor(message, status) {
        if (status !== 'success') {
            throw Error(`Faield loading cat image, status: ${status}`);
        }
        this.message = message;
        this.status = status;
    }
}