filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Formulaire

errorFirstName = document.querySelector('#erreurfirstname');
firstNameInput = document.querySelector('#firstname');
errorMessage = document.querySelector('#erreurmessage');
messageInput = document.querySelector('#message');
errorMail = document.querySelector('#erreurmail');
mailInput = document.querySelector('#mail');
errorValidation = document.querySelector('#erreurvalidation');
validationInput = document.querySelector('#submit');


firstNameInput.addEventListener('blur', erreurFirstName);
messageInput.addEventListener('blur', erreurMessage);
mailInput.addEventListener('blur', erreurMail);
document.querySelector('#submit').addEventListener('click', validation);


validationFirstName = false;
validationMessage = false;
validationMail = false;

function erreurFirstName() {

	var letters = /^[A-Za-z-é'èàçêâîôëäïö]+$/;
	

	if (document.querySelector('#firstname').value.match(letters)) {
		errorFirstName.innerHTML = "";
		validationFirstName = true;

	} else if (document.querySelector('#firstname').value === ("")) {
		errorFirstName.innerHTML = "Veuillez renseigner votre prénom";
		console.log("aa");
		validationFirstName = false;

	} else {

		errorFirstName.innerHTML = "Veuillez utiliser des caractere.";
		validationFirstName = false;
	}
}


function erreurMessage() {

	var letters = /^[A-Z0-9a-z-é'èàçêâîôëäïö,0-9]+$/;
	if (document.querySelector('#message').value.match(letters)) {

		errorMessage.innerHTML = "";
		validationMessage = true;

	} else if (document.querySelector('#message').value == ("")) {	
    errorMessage.innerHTML = "Veuillez renseigner votre Message";
    console.log("yep");
		validationMessage = false;

	} else {	
    errorMessage.innerHTML = "Veuillez utiliser les caractères autorisés";
    console.log("test");
		validationMessage = false;
	}
}


function erreurMail () {

  var letters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var lettersValide = /\S+@\S+\.\S+/;

 
	if (document.querySelector('#mail').value.match(letters) && document.querySelector('#mail').value.match(lettersValide)) {

		errorMail.innerHTML = "";
		validationMail = true;

	} else if (document.querySelector('#mail').value == ("")) {	
    errorMail.innerHTML = "Veuillez renseigner votre E-mail";
    console.log("yep");
		validationMail = false;

	} else {	
    errorMail.innerHTML = "Veuillez utiliser les caractères autorisés";
    console.log("test");
		validationMail = false;
	}

}


function validation(e) {
	console.log("gg");

	if(validationFirstName === false || validationMessage === false || validationMail === false){

			errorValidation.innerHTML = "Un champs est manquant ou invalide";
			e.preventDefault();
			return false;
	} 

	
	 else {
			alert("Formulaire envoyé !");


			formulaire.submit();
	}	 
}; 