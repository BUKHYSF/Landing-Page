
let navList = document.querySelector('#navbar__list');
let allsections = document.querySelectorAll('section');


// build the nav
function createNav() {
    let list_of_li = [];
    for (let i = 0, j=1; i <= allsections.length-1; i++, j++) {
        let li = document.createElement('LI');
        let a = document.createElement('A');
        a.textContent = 'section ' + j;
        a.href = '#section' + j;
        a.id = 'a' + j;
        a.classList.add('menu__link');
        li.appendChild(a);
        list_of_li.push(li);

    }
    navList.append(...list_of_li);
}

createNav();



window.addEventListener('scroll', Throttle(activate, 500), false);

// Add class 'active' to section when near top of viewport
function activate() {


    let id;
    for (let section of allsections) {
        if (isInViewerPoint(section)) {
            section.classList.add('now_active');
        } else {

            section.classList.remove('now_active');
        }

    }

}

window.addEventListener('scroll', alterLinks, true);


// this fun will return to me the anchor that has the href with the same section;


function alterLinks() {

    let id;
    let mains = document.querySelectorAll('section');
    for (let section of mains) {
        if (isInViewerPoint(section)) {
            id = section.getAttribute('id');
            document.querySelector('#a' + id.substr(id.length - 1)).classList.add('inView');

        } else {
            id = id = section.getAttribute('id');
            document.querySelector('#a' + id.substr(id.length - 1)).classList.remove('inView');

        }



    }


}


function Throttle(fn, wait) {
    let time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

function isInViewerPoint(target) {
    
    const ywin = window.scrollY;

    return target.offsetTop <= ywin && target.offsetHeight + target.offsetTop > ywin;
}

let scroll = function (target) {
    if (target.nodeName === 'LI')
        target.scrollTo(target.x, target.y);
}

let links = document.querySelectorAll('.menu__link');
for (let j = 0; j < links.length; j++) {
    links[j].addEventListener('click', function (event) {
        e.preventDefault();
         
        document.querySelector(
        `section[id = ${e.target.getAttribute("href").slice(1)}]`

      );

    }, true);
}








