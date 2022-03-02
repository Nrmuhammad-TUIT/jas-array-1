var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elButton = document.querySelector(".form__btn");
var elSpan = document.querySelector(".form__span"); 


 var number1 = []
 var number2 = []

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

  var elInputVal = elInput.value

   if (elInputVal <= 0 || isNaN(elInputVal)) {
      elSpan.textContent = "0 dan katta son kiriting";
      elInputVal = "";
   }

  else if (elInputVal % 2 == 0 ) {
      elSpan.textContent = elInputVal + "  soni juft";
      number1.push(elInputVal);
      console.log(number1);
      elInputVal = "";
   }

   else {
      elSpan.textContent = elInputVal + " soni toq";
      number2.push(elInputVal);
      console.log(number2);
      elInputVal = "";
   }
})