const btn = document.getElementById('my-btn')
const myForm = document.getElementById('my-form')

var err = document.getElementById('err');
var result = document.getElementById('result');
var btnReset = document.getElementById('btnReset');
let firstName = document.getElementById('icon_prefix');
let phoneNum = document.getElementById('icon_telephone');
let story = document.getElementById('icon_prefix2')

function oneCheckedBox(checkbox_id) {
    if (document.getElementById(checkbox_id).checked) {
        for (var i = 1; i <= 2; i++) {
            document.getElementById("CheckId"+i).checked = false;
        }
        document.getElementById(checkbox_id).checked = true;
    }
}

var person = {
    firstName: [],
    phoneNum: [],
    story: []
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    myForm.style.display = "none"
    var valueName = firstName.value;
    var valueNum = phoneNum.value;
    var valueStory = story.value;
   

    if(valueName !== '' && valueNum !== '' && valueStory !== ''){
        err.innerText = ''
        title.innerText = "Your application successfully sent!"
        person.firstName.push(valueName),
        person.phoneNum.push(valueNum),
        person.story.push(valueStory),        
        success()
       
    } else {
        title.innerText = ''
        err.innerText = 'The form is not full'
    }
});

function success(){
    result.innerHTML = '';
    for(var i=0; i<person.firstName.length && i<person.phoneNum.length && i<person.story.length; i++){
        result.innerHTML += '<ol>' + '<li>' + person.firstName[i] + '</li>' + '<li>' + person.phoneNum[i] + '</li>' +  '<li>' + person.story[i] + '</li>' + '</ol>'
    }
}

