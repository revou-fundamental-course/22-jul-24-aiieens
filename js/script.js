//autoslide image
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("image-slideshow");
    if (n > imgList.length) slideIndex = 1;
    if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}  

//interval
setInterval(() => {
plusDivs(1);
}, 5000);


 function formValidation() {
    //references
    let nameInput = document.getElementById('input-name');
    let emailInput = document.querySelector('input[type="text"]:nth-of-type(2)');
    let selectOption = document.querySelector('.option');
    let errorName = document.getElementById('error-name');
    let errorEmail = document.getElementById('error-email');
    let errorOption = document.getElementById('error-option');
    let successMessage = document.getElementById('submitted');

    //values from the inputs
    const name = nameInput.value;
    const email = emailInput.value;
    const option = selectOption.value;

    //reset error messages and success message
    errorName.innerHTML = '';
    errorEmail.innerHTML = '';
    errorOption.innerHTML = '';
    successMessage.innerHTML = '';

    let isValid = true;

    //validate name
    if (name === '') {
        errorName.innerHTML = '🛈 Please fill in your name.';
        isValid = false;
    }

    //validate email
    if (email === '') {
        errorEmail.innerHTML = '🛈 Please fill in your email.';
        isValid = false;
    }

    //validate select option
    if (option === 'opt0') { 
        errorOption.innerHTML = '🛈 Please select an option.';
        isValid = false;
    }

    //success message if all fields are valid
    if (isValid) {
        successMessage.innerHTML = 'Form successfully submitted!';
    }

    //return validation status
    return isValid;
}


                
    
