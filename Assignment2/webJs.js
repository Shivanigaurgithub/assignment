 // Create a request for the JSON data
 var apiData = 'https://random-data-api.com/api/users/random_user';
 let request = new XMLHttpRequest();
 request.open("GET", apiData, false);
 request.send(null);
 console.log('json data ==> '+request.responseText);
  // parsing the response as JSON 
  const jsonToShow = JSON.parse(request.responseText);
  console.log(jsonToShow.first_name);
  console.log(jsonToShow.last_name);
  console.log(jsonToShow.username);
  console.log(jsonToShow.email);
  console.log(jsonToShow.address);
  var address = jsonToShow.address
  console.log(jsonToShow.address);
 
 // // Note Instead of using "DOMContentLoaded" code we can place <script> file inside the body at the end.
 document.addEventListener("DOMContentLoaded", function() {
       document.getElementById("firstname").innerHTML = jsonToShow.first_name;
       document.getElementById("lastname").innerHTML = jsonToShow.last_name;
       document.getElementById("username").innerHTML = jsonToShow.username;
       document.getElementById("email").innerHTML = jsonToShow.email;
       document.getElementById("street").innerHTML = address.street_address;
       document.getElementById("city").innerHTML = address.city;
       document.getElementById("state").innerHTML = address.state;
       document.getElementById("country").innerHTML = address.country;
       document.getElementById("code").innerHTML = address.zip_code;
      
       // to open account dialoge box
       const accdialog = document.getElementById("accDialog");
       const leaddialog = document.getElementById("leadDialog");
       const openDialogButton = document.getElementById("account");
       const closeButton = document.getElementById("colseButton");
 
       openDialogButton.addEventListener("click", function handleClick(){
              console.log('click me');
              accdialog.show();
              leaddialog.close();            
        });
        closeButton.addEventListener("click", function closeClick(){
               console.log('close me');
               accdialog.close();      
         });
 
       // to open lead dialog box
       console.log('leaddialog '+leaddialog);
       const openLeadDialogButton = document.getElementById("lead");
       openLeadDialogButton.addEventListener("click", function handleClick(){
             leaddialog.show();  
             accdialog.close();      
     
       });
       const cancelButton = document.getElementById("cancel");
       cancelButton.addEventListener("click", function closeClick(){
              console.log('close me');
              leaddialog.close();      
        });
 
      
  });
 
 // Submission of Lead Form and if required fields are null throw validation error.
   function formSumbit() {
       const name = document.getElementById("name");
       const nameError = document.getElementById("nameError");  
       const email = document.getElementById("leademail");
       const emailError = document.getElementById("emailError");  
       const leadName = document.getElementById("leadname");
       const leadNameError = document.getElementById("leadNameError");
 
       let hasErrors = false;
       if (name.value === "") {
             nameError.innerHTML = "Please enter your name.";
             name.focus();
             hasErrors = true;
       } else {
             nameError.innerHTML = "";
       }
 
       if (email.value === "") {
             emailError.innerHTML = "Please enter your email.";
             email.focus();
             hasErrors = true;
       } else {
             emailError.innerHTML = "";
       }
       if (leadName.value === "") {
             leadNameError.innerHTML = "Please enter your Lead Name.";
             leadName.focus();
             hasErrors = true;
       } else {
             leadNameError.innerHTML = "";
       }
 
       if (hasErrors) {
             return false;
       } else {
             showDialog();
             return true;
       }
 }
 
 //dispaly alert box
 function showDialog() {
       document.getElementById("alert-box").style.display = "block";
 }
     
 // handler on OK button of alert box
 function closeDialog() {
       document.getElementById("alert-box").style.display = "none";
       document.getElementById("leadDialog").close();
 }
     
  
  
    
    