

document.addEventListener('DOMContentLoaded', function(){
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    var userDataElem = document.querySelector(".userData");

    // use the compiled the template
    var userDataHTML = userTemplate({
        username : 'lindani',
        firstName : 'Lindani',
        lastName : 'Pani',
        email : 'lindani@pani.com'
    });
    userDataElem.innerHTML = userDataHTML;
});