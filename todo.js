var form = document.querySelector('form');
var ul = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.getElementById('activity');
var activityArray = localStorage.getItem('activity') ? JSON.parse(localStorage.getItem('activity')) : [];

localStorage.setItem('activity', JSON.stringify(activityArray));
var data = JSON.parse(localStorage.getItem('activity'));

var makeList = function(text) {
    var list = document.createElement('li');
    list.textContent = text;
    ul.appendChild(list);
};


form.addEventListener('submit', function(e) {
    e.preventDefault();
    // prevent the form from the default
    // submit action
    activityArray.push(input.value);
    localStorage.setItem('activity', JSON.stringify(activityArray));

    makeList(input.value);
    input.value = " ";

});

data.forEach(activity => {
    makeList(activity);
});

button.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});

var activity;
if (localStorage.getItem('activity')) {
    activity = JSON.parse(localStorage.getItem('activity'));
} else {
    activity = [];
}