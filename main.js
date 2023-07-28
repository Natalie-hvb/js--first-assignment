const btn = document.getElementById('mybtn')
const myform = document.getElementById('my-form')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    myform.style.display = 'none';
});

let firstName = document.getElementById('icon_prefix');
let phoneNum = document.getElementById('phoneNum');
let story = document.getElementById('story')
console.log(firstName)

var person = {
    firstName: [],
    phoneNum: [],
    story: []
};

function success() {
    result.innerHTML = '';
    for (let i = 0; i < person.firstName.length && i < person.phoneNum.length && i < person.story.length; index++) {
        result.innerHTML += '<ul>' + '<li>' + person.firstName[i] + '/li' + '<li>' + person.phoneNum[i] + '</li>' + '<li>' + person.story[i] + '</li>' + '</ul'
    }
}