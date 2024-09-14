import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
let intervalId = null;
let isFulfielled = true;

form.addEventListener("submit", event => {
    event.preventDefault();

    const inputValue = form.elements.delay.value.trim();
    const checked = form.querySelector('input[name="state"]:checked');
    isFulfielled = checked.value == "fulfilled";

    makeNotification(inputValue)
    .then( () => {
        iziToast.success({
            title: "success",
            message: `✅ Fulfilled promise in ${inputValue}ms`
        });
        clearTimeout(intervalId);
    })
    .catch(() => {
        iziToast.error({
            title: "Error",
            message: `❌ Rejected promise in ${inputValue}ms`
        });
        clearTimeout(intervalId);
    });
})

function makeNotification(delay) {
    
    return new Promise ((resolve, rejected) => {
        intervalId = setInterval(() => {
            
            if(isFulfielled){
                resolve();
            } else {
                rejected();
            }

        }, delay)
    })
}
