var portrait = document.getElementById('portrait');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var projects = document.getElementById('projects');

var pages = { about, contact, projects }

function menurouter(e) {

}

window.onload = async function () {

    var githubdata = await fetch('https://api.github.com/users/ErikSkinnari/repos');
    var githubprofile = await githubdata.json();

    console.log(githubprofile);
};