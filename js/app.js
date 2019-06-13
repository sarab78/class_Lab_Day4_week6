document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#button') //element is button
  button.addEventListener('click', handleButtonClick); //its a function which takes two arument event listener and callback

const textInput = document.querySelector('#input');
textInput.addEventListener('input', handleInput);

const select = document.querySelector('#select');
select.addEventListener('change', handleSelectChange);

const form = document.querySelector('#form');
form.addEventListener('submit',handleFormSubmit);



  // console.log('JavaScript has loaded');
});

const handleButtonClick = function(){
  //logic to change the text and paragraphs is below
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = "The button has definitely been clicked"
  // console.log('Button has been clicked');
}

const handleInput = function(event){
  //1.Get the value from input.
  const result = document.querySelector('#input-result')

  // console.log(event);
  //2.update the pragraph text.
result.textContent = `You typed: ${event.target.value}`;
}


const handleSelectChange = function(event){
  const result = event.target.value;
  const selectedResult = document.querySelector('#select-result');
  selectedResult.textContent = `You typed: ${result}`;
}

const handleFormSubmit = function(event){
  event.preventDefault();
  // console.log(event.target.first_name);
const resultParagraph = document.querySelector('#form-result')
// resultParagraph.textContent = `Your name: ${event.target.first_name.value} ${event.target.last_name.value}`
resultParagraph.textContent = `your name: ${this.first_name} ${this.last_name}`

}
  // console.log('Input has been typed in');
