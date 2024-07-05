document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form') //select the form element
    const feedback = document.createElement('p');//create a parargraph element for feedback
    feedback.style.color = 'green';

    form.addEventListener('submit' , function(event){
        event.preventDefault(); //prevent the default form submission behaviour

        const formData = new FormData(form)//create FormData object from the form
        const data = {
            name: formData.get('name'), //geet the value of name input
            email: formData.get('email'), //get the value of email input
        } ;

        fetch('/form' , {
            method : 'POST', //specify request method
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
        body : JSON.stringify(data) //convert data object to a JSOn string)
    })
    .then(response => response.json()) //convert the response to JSON
    .then(json => {
        feedback.textContent = json.message; //set feedack mesege to repnse messege 
        form.insertAdjacentElement('beforebegin', feedback); //insert the feedback messege before the form
        form.reset(); //reset the form fields
    })
    .catch(error => {
        feedback.textContent = 'error submitting form. try again'; //set feedback messge to error
        feedback.style.color = 'red'; 
        form.insertAdjacentElement('beforebegin', feedback); //insert the feedback messege before the form
    });
});
});