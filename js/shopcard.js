function plus(x){
  let count = document.querySelector(`#count${x}`);
  let number = +count.innerHTML;

  if (number <= 9) {
    number++;
    count.innerHTML = number;
  }
}

function minus(x){
  let count = document.querySelector(`#count${x}`);
  let number = +count.innerHTML;
  
  if (number >= 2) {
    number--;
    count.innerHTML = number;
  }
}