let about = document.getElementById('about');
let contact = document.getElementById('contact');
let projects = document.getElementById('projects');
let menubutton = document.getElementById('menubutton');
let navigation = document.getElementById('navigation');

let mainRouter = async function (route) {

    if (route == '#menu_projects') {
        console.log("projects");
        about.classList.add('hidden');
        contact.classList.add('hidden');
        projects.classList.remove('hidden');
    }
    else if (route == '#menu_contact') {
        console.log("contact");
        about.classList.add('hidden');
        projects.classList.add('hidden');
        contact.classList.remove('hidden');
    }
    else {
        console.log("about");
        contact.classList.add('hidden');
        projects.classList.add('hidden');
        about.classList.remove('hidden');
    }
    navigation.classList.toggle('hide-mobile');
}

async function routeFunction() {
    var route = window.location.hash;
    await mainRouter(route);
}

window.addEventListener("hashchange", function () {
    routeFunction();
});

menubutton.addEventListener('click', function () {
    navigation.classList.toggle('hide-mobile');
})