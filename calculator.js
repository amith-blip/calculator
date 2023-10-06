let calculation = '';
function updateCalculation(value){
  calculation+= value;
  document.querySelector('.js-console')
  .innerHTML = `${calculation}`;
}