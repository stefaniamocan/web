document.addEventListener("DOMContentLoaded", function() {
    var myForm = document.forms.contactForm
    var submitButton = myForm.querySelector('submit')
  
    var error = document.querySelector('#errorAlert')
    function showError(message) {
        removeError(message)
        error.innerText += message
    }
  
    function removeError(message) {
        error.innerText = error.innerText.replace(message, '')
    }
  
    function isValidForm() {
        var firstname = myForm.firstname.value
        var lastname = myForm.lastname.value
        var email = myForm.email.value
  
        if(firstname.length < 3) {
            showError('Please enter a valid first name.')
            return false
        } else {
            removeError('Please enter a valid first name.')
        }
  
        if(lastname.length < 3) {
            showError('Please enter a valid last name.')
            return false
        } else {
            removeError('Please enter a valid last name.')
        }
  
    
        if(email.includes('@') && email.includes('.')) {
            removeError('Please enter a valid email.')
        } else {
            showError('Please enter a valid email.')
            return false
        }
  
  
        return true
    }
  
    
    function onSubmit(event) {
        event.preventDefault();
    }
  
    myForm.addEventListener('submit', onSubmit, false)
  
    submitButton.addEventListener('click', function(event) {
        var isValid = isValidForm()
  
        if(isValid) {
            var successElement = document.querySelector('#successMessage')
            successElement.classList.remove('hidden')
        }
    })
  
  });
  