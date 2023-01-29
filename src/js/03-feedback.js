import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const formData = {
   email: '',
   message: '',
}

const LOCAL_STOTAGE_KEY = "feedback-form-state";

fillForm();



formEl.addEventListener('input', throttle(e => {
   //================================= Якесь таке вирішення, як нижче, але зробити так як казав Репета, не вийшло
   formData.email = formEl.elements.email.value;
   formData.message = formEl.elements.message.value;
   //formData[e.target.name] = e.target.value;  ======================== тобто ось так
   localStorage.setItem(LOCAL_STOTAGE_KEY, JSON.stringify(formData));
}, 500));


formEl.addEventListener('submit', e => {
   localStorage.removeItem(LOCAL_STOTAGE_KEY);
   if (inputEl.value === '' || textareaEl.value === '') {
      alert('Заповніть усі поля форми')
   } else {
   e.preventDefault();
   e.currentTarget.reset();
   console.log(formData);}
  
});


function fillForm() {
   const savedData = JSON.parse(localStorage.getItem(LOCAL_STOTAGE_KEY));
   if (savedData) {
      inputEl.value = savedData?.email;    //============================= Ще питання, ось ці знаки запитання в коді, вони перевіряють, чи елемент true, і якщо так, то читає код далі?
      textareaEl.value = savedData?.message;
   }
};
