import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
formData = {}
const localStorageKey = "feedback-form-state"

fillForm()



formEl.addEventListener('input', throttle(e => {
   formData[e.target.name] = e.target.value
   localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500))

formEl.addEventListener('submit', e => {
   e.preventDefault();
   localStorage.removeItem(localStorageKey);
   e.currentTarget.reset()
   console.log(formData)
});


function fillForm() {
   const savedData = JSON.parse(localStorage.getItem(localStorageKey));
   if (savedData) {
      document.querySelector('input').value = savedData.email
      document.querySelector('textarea').value = savedData.message
   }
};