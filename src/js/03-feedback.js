import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
formData = {};
const localStorageKey = "feedback-form-state";

fillForm();



formEl.addEventListener('input', throttle(e => {
   formData[e.target.name] = e.target.value
   localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500));


formEl.addEventListener('submit', e => {
   localStorage.removeItem(localStorageKey);
   if (inputEl.value === '' || textareaEl.value === '') {
      alert('Заповніть усі поля форми')
   } else {
   e.preventDefault();
   e.currentTarget.reset();
   console.log(formData);}
  
});




function fillForm() {
   const savedData = JSON.parse(localStorage.getItem(localStorageKey));
   if (savedData) {
      inputEl.value = savedData.email
      textareaEl.value = savedData.message
   }
};