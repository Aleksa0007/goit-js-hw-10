import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
let isFulfielled = true;

form.addEventListener("submit", event => {
    event.preventDefault();

    const inputValue = parseInt(form.elements.delay.value.trim(), 10);
    const checked = form.querySelector('input[name="state"]:checked');
    isFulfielled = checked.value == "fulfilled";

    makeNotification(inputValue)
    .then( () => {
        iziToast.success({
            title: "success",
            message: `✅ Fulfilled promise in ${inputValue}ms`
        });
    })
    .catch(() => {
        iziToast.error({
            title: "Error",
            message: `❌ Rejected promise in ${inputValue}ms`
        });
    });
})

function makeNotification(delay) {
    
    return new Promise ((resolve, rejected) => {
         setTimeout(() => {
            
            if(isFulfielled){
                resolve();
            } else {
                rejected();
            }

        }, delay)
    })
}
