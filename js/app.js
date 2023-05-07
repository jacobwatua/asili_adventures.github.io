//PROJECT DATA - this section contains data used for the project
const navItems = [
    "Home",
    "Our Services",
    "Tour Sites",
    "Contact Us",
];





//services

const providedServices = {
    title : "What we do best",
    services : [
        {   title: 'Accommodation services',
            serviceIcon : "./images/services/accomodation.jpeg",
            description: "Experience luxury and comfort in our condo. Book now for an unforgettable stay!",
            chargePerPerson : "sh" + 1000,

        },

        {   title: 'Transportation services',
            serviceIcon : "./images/services/transportation.jpeg",
            description: "Get around like a local with our transportation services! From nearby airports to local bike rentals, we've got you covered. Explore cities/regions with ease!",
            chargePerPerson : "sh" + 1000,

        },

        {   title: 'Food and beverage services',
            serviceIcon : "./images/services/food.jpeg",
            description: "Indulge in delicious flavors and local cuisine with our food and beverage services! From trendy cafes to authentic markets, there's something for everyone. Satisfy your cravings today!",
            chargePerPerson : "sh" + 1000,

        },

        {   title: 'Tour and activity services',
            serviceIcon : "./images/services/tour.jpeg",
            description: "Explore cities/regions like never before with our tour and activity services! From iconic landmarks to hidden gems, our guided tours will take you on an unforgettable journey",
            chargePerPerson : "sh" + 1000,

        }
    ],

}

//make an array of tour places

const tourPlaces = [
    "Masai Mara National Reserve",
    "Amboseli National Park",
    "Tsavo National Park",
    "Lake Nakuru National Park",
    "Samburu National Reserve",
    "Mount Kenya National Park",
    "Lamu Island",
    "Hell's Gate National Park",
    "Aberdare National Park",
    "Nairobi National Park",
    "Diani Beach",
    "Watamu Marine National Park",
    "Ol Pejeta Conservancy",
    "Lake Naivasha",
    "Nairobi",
    "Chyulu Hills National Park",
    "Meru National Park",
    "Malindi Marine National Park",
    "Mombasa Old Town",
    "Taita Hills Wildlife Sanctuary",
    "Shimba Hills National Reserve"
];


//popular sites object

const mostPopularSites  = [
    {
        title : "Masai Mara National Reserve",
        siteImage : "./images/popularSites/masaiMara.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Amboseli National Park",
        siteImage : "./images/popularSites/amboseli.jpeg",
        ratings : 4.6,
        reviews : 102,
    },

    {
        title : "Tsavo National Park",
        siteImage : "./images/popularSites/tsavo.jpeg",
        ratings : 4.5,
        reviews :200,
    },

    {
        title : "Lake Nakuru National Park",
        siteImage : "./images/popularSites/lakeNakuru.jpeg",
        ratings : 4.6,
        reviews : 230,
    },

    {
        title : "Samburu National Reserve",
        siteImage : "./images/popularSites/samburu.jpeg",
        ratings : 4.8,
        reviews : 100,
    },

    {
        title : "Mount Kenya National Park",
        siteImage : "./images/popularSites/mountKenya.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Lamu Island",
        siteImage : "./images/popularSites/lamu.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Hell's Gate National Park",
        siteImage : "./images/popularSites/hellsGate.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Aberdare National Park",
        siteImage : "./images/popularSites/aberdares.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Nairobi National Park",
        siteImage : "./images/popularSites/nairobiPark.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Diani Beach",
        siteImage : "./images/popularSites/diani.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Watamu Marine National Park",
        siteImage : "./images/popularSites/watamu.jpeg",
        ratings : 4.5,
        reviews : 100,
    },

    {
        title : "Ol Pejeta Conservancy",
        siteImage : "./images/popularSites/olPejeta.jpeg",
        ratings : 5,
        reviews : 100,
    },

    {
        title : "Lake Naivasha",
        siteImage : "./images/popularSites/lakeNaivasha.jpeg",
        ratings : 5,
        reviews : 150,
    },

    {
        title : "Nairobi",
        siteImage : "./images/popularSites/nairobiCity.jpeg",
        ratings : 5,
        reviews : 500,
    },

]



//footer object

const footerItems = {
    contacts : {
        title : "Contacts",
        itemChildren : ["Phone", "+254792650720", "Email", "jacobwatua254@gmail.com", "Community"],
    },
    socialMedia : {
        title : "Follow Us",
        itemChildren : ["Facebook", "Twitter", "Instagram", "Pintrest"],
    },
    faqs : {
        title : "Site Maps",
        itemChildren: ["FAQs", "Careers" , "Customer Care", "Careers", "Terms"],
    },
};




//Functions section

/**
 * navBar - Creates a DOM object an ul
 * @void - Accepts no params
 * @Descrtiption - creates an unordered lists and appends..
 * li as its children. li items are read from the...
 * navItems array.
 * Finally, the created DOM elements are appended on the..
 * document
 * @Return - has no return value
 */

function navBar() {
    const ul = document.createElement('ul');
    const root = document.getElementsByTagName('nav')[0];
    navItems.forEach(function(item) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = `#${item.includes(" ") ? item.split(" ").join("") : item}`;
      a.textContent = item;
      a.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
    root.appendChild(ul);
    ul.setAttribute('data-section-type', 'navbar');
    logo();
    humburger();
  }


/**
 * @logo - creates an image element with the page logo
 * @returns - no return value
 */

function logo () {
    const div = document.createElement('div');
    div.className = "pageLogo";
    const logo = document.createElement('img');
    logo.setAttribute("src", "./images/logo.png");
    logo.alt = "logo";
    logo.classList.add("logo");

    const businessTitle = document.createElement('h1');
    businessTitle.textContent = "Asili Adventures";
    div.appendChild(logo);
    div.appendChild(businessTitle);
    document.body.appendChild(div);
}



/**
 * @humburger - togles side menu div
 */

function humburger () {
    const burger = document.createElement("div");
    burger.id = "burger";
    for (let i = 0; i < 3; i ++) {
        const dash = document.createElement("div");
        dash.className = "dash"
        burger.appendChild(dash);
    }
    burger.addEventListener('click', () => {
        const sideMenu = document.querySelector(".side-menu");
        sideMenu.classList.toggle('visible-item');
    });
    document.body.appendChild(burger);
}



/**
 * @hero - this is the banner section of the page.
 * @void - acccepts no arguments
 * @description - creates a banner that contains a check in form
 * @returns - no return value
 */

function heroSection () {
    const hero = document.getElementsByClassName("hero--section")[0];
    const container = document.createElement('div');
    container.setAttribute('class', "hero--container");
    const signUpButton = document.createElement('button');
    signUpButton.id = 'sign--up--button';

    signUpButton.textContent = "Sign Up";

    const heroHead = document.createElement('div');
    heroHead.id = 'hero--head';
    heroHead.innerHTML = `<h1>Travel Anywhere, Book a Unique Home</h1>`

    heroSectionForm(container);
    hero.appendChild(heroHead);
    hero.appendChild(container);
    hero.append(signUpButton);
}

/**
 * @heroSectionForm - creates a form in the DOM
 * @param {*} root - the DOM location where the created form will be appended
 * @returns - no return value
 */

function heroSectionForm  (root) {
    const checkInForm = document.createElement('form');
    checkInForm.role = "form";
    //TODO: Store location details
    const lableForLocation = document.createElement('label');
    lableForLocation.setAttribute('for', 'travel-location');
    lableForLocation.textContent = "Where do you wish to travel to?";
    const travleLocation = document.createElement('input');
    travleLocation.id = 'travel-location'
    travleLocation.labels = "Where are you travelling to?"
    travleLocation.placeholder = "Travelling to";

    //TODO: Store Date details
    const checkInDate = document.createElement('input');
    checkInDate.type = "date";
    checkInDate.id = "chek-in-date";
    const lableForDate = document.createElement('label');
    lableForLocation.setAttribute('for', 'check-in-date');
    lableForDate.textContent = "Travel Date";

    //TODO: store number of people expected
    const numberOfAdults = document.createElement('input');
    numberOfAdults.type = "number";
    numberOfAdults.id = "number-of-adults";
    numberOfAdults.value = 1;
    const lableForNumberofAdults= document.createElement('label');
    lableForNumberofAdults.setAttribute('for', 'number-of-aduls');
    lableForNumberofAdults.textContent = "Adults";

    //Get number of children travelling
    const numberOfChildren = document.createElement('input');
    numberOfChildren.type = "number";
    numberOfChildren.id = "number-of-children";
    numberOfChildren.value = 0;
    const lableForNumberofChilddren= document.createElement('label');
    lableForNumberofChilddren.setAttribute('for', 'number-of-children');
    lableForNumberofChilddren.textContent = "children";

    //create a div that holds two inputs

    const inputGroup = document.createElement("div");
    inputGroup.appendChild(lableForNumberofAdults);
    inputGroup.append(numberOfAdults);
    inputGroup.appendChild(lableForNumberofChilddren);
    inputGroup.appendChild(numberOfChildren);
    inputGroup.id = "hero-stats";

    //create a p tag
    const text = document.createElement('p');
    text.textContent = "How many people are travelling?";

    let locations = tourLocations();
    locations.style.display = "none";

    //Search button
    const searchButton = document.createElement('button');
    searchButton.id = 'search-btn';
    searchButton.textContent = "Search";

    //Event listerners

    travleLocation.addEventListener("click", function () {
        if (locations.style.display == "none") {
            locations.style.display = "block";
        }
        else {
            locations.style.display = "block";
        }
    }, {capture : true});

    travleLocation.addEventListener('keypress', (event)=> {
        if (event.key == "Enter"){
            locations.style.display = "none";
        }
    });

    travleLocation.addEventListener('keypress', (event)=> {
        if (event.key == "Enter"){
            locations.style.display = "none";
        }
    });

    travleLocation.addEventListener('input', (input)=> {
        locations.style.display = "none";
        let filteredArray;
        if (input.target.value != "") {
            filteredArray = tourPlaces.filter((item) => {
                return performSearch(item, travleLocation.value);
            });
        }
        const container = document.querySelector('.result-container');
        if (!container) {
            // Create a new container element if it doesn't exist yet
            const newContainer = document.createElement('div');
            newContainer.className = 'result-container';
            const ul = document.createElement('ul');
            filteredArray.map((el) => {
                const li = document.createElement('li');
                li.innerHTML = el;
                li.addEventListener('click', ()=> {
                    travleLocation.value = li.textContent;
                    document.querySelector('.result-container').style.display = "none";
                }, true);
                ul.appendChild(li);
            });
            newContainer.appendChild(ul);
            travleLocation.insertAdjacentElement('afterEnd' ,newContainer);
        } else {
            // Update the contents of the existing container element
            const ul = container.querySelector('ul');
            ul.innerHTML = '';
            filteredArray.map((el) => {
                const li = document.createElement('li');
                li.innerHTML = performSearch(el, travleLocation.value) ? `${el} <img src="./images/icons/location.png" alt="location">` : "Sorry we do not travel to this location at the moment";
                li.addEventListener('click', ()=> {
                    travleLocation.value = li.textContent;
                    document.querySelector('.result-container').style.display = "none";
                }, true);
                ul.appendChild(li);
            });
        }
        // set display for container to none if ul is empty
        if ((filteredArray.length == 0 && container)) {
            container.style.display = "none";
        } else if (container) {
            container.style.display = "block";
        }
    });

    // Check if backspace or delete is pressed and the length of the input is 0
    travleLocation.addEventListener('keydown', (event) => {
        if ((event.key === "Backspace" || event.key === "Delete") && travleLocation.value.length <= 1) {
            const container = document.querySelector('.result-container');
            if (container) {
                container.style.display = "none";
            }
        }
    });


    checkInForm.appendChild(inputGroup);
    checkInForm.appendChild(lableForLocation);
    checkInForm.appendChild(travleLocation);
    checkInForm.appendChild(locations);
    checkInForm.appendChild(lableForDate);
    checkInForm.appendChild(checkInDate);
    checkInForm.appendChild(text);
    checkInForm.appendChild(inputGroup);
    checkInForm.appendChild(searchButton);
    root.appendChild(checkInForm);

}


/**
 * @ourServices - displays services cards
 * @void - accepts no parameters
 * @description - reads properties from the providedServices object..
 * and creates a form
 * @returns - no return value
 */
function ourServices () {
    const {title, services} = providedServices;
    const root = document.getElementById("services--section");

    const servicesTitle = document.createElement("h1");
    servicesTitle.textContent = title;
    root.appendChild(servicesTitle);

    const allServices = document.createElement('div');
    allServices.className = 'services';

    services.map((service) => {
        const serviceCard = document.createElement("div");
        serviceCard.className = "service-card";
        serviceCard.innerHTML = `<img src=${service.serviceIcon} alt=${service.title}>` +
        `<p><b><i>${service.title}</i></b></p>` +
        `<p class=charges>From ${service.chargePerPerson} per person</p>` +
        `<p>${service.description}</p>`
        allServices.appendChild(serviceCard);
    });

    root.appendChild(allServices);
}

/**
 * @tourLocations - creates an ul for tour locations
 * @description - reads from tourPlaces objects
 */
const tourLocations = () => {
    const div = document.createElement('div');
    div.className = 'locations--container';
    const ul = document.createElement('ul');
    ul.className = "tour-locations";
    tourPlaces.map((place) => {
        const li = document.createElement('li');
        li.innerHTML = `${place} <img src=./images/icons/location.png alt=location>`;
        ul.appendChild(li);
        li.addEventListener('click', ()=> {
            const inputItem = document.querySelector("#travel-location");
            inputItem.value = li.textContent;
            ul.style.display = "none";
        }, {capture : true});
    });
    div.appendChild(ul);
    return div;
}



/**
 * capitalizeWords - capitalizes the first letter in each word
 * @param {*} str - string argument
 * @returns - no str with capitalized first letters for each word
 */
function capitalizeWords(str) {
    str = str.toLowerCase();
    return str.replace(/\b\w/g, function(txt) {
      return txt.toUpperCase();
    });
}

/**
 * performSearch - matches strings ny checking it's first letters
 * @param {*} str - string to be matched
 * @param {*} substr - first part of the string
 * @returns - checks if str stars with substr and returns true or false
 */
function performSearch (str, substr) {
    return str.startsWith(capitalizeWords(substr));
}


/**
 * popularSites - creates cards for popular sites
 * @void - accepts no arguements
 * @returns - returns no value
 */
function popularSites () {
    const root = document.querySelector(".popularSites");
    mostPopularSites.map(function (site) {
        div = document.createElement('div');
        div.className = 'site';
        const {title, siteImage, ratings, reviews} = site;
        div.innerHTML = `<img src=${siteImage} alt=${title}>` +
        `<h3>${title}</h3>` +
        `<p><img src=./images/icons/star.png alt=star class=star> ${ratings.toFixed(1)}/5 (${reviews} reviews)</p>`;
        root.appendChild(div);
    });
    //add a function that sets height of site div to auto when view more button is clicked
    const btn = document.querySelector(".view-more");
    btn.addEventListener('click', ()=>{
        const sites = document.querySelector(".popularSites");
        if (btn.textContent === "View More Sites") {
            sites.style.height = "auto";
            btn.textContent = "Show Less";
        }
        else if (btn.textContent === "Show Less") {
            sites.style.height = "340px";
            btn.textContent = "View More Sites";
        }
    }, true);
}


/**
 * @pageFooter - creates the footer for the website
 * @description - creates a div .footerItems which contains footer elements
 * @returns - no return value
 */
function pageFooter () {
    const root = document.querySelector(".footer");
    const {contacts ,socialMedia , faqs} = footerItems;
    function buildfooterSection (section) {
        const container = document.createElement('div');
        container.className = "footer-section";
        const title = document.createElement('h3');
        title.textContent = section.title;
        const ul = document.createElement('ul');
        section.itemChildren.map((child) => {
            const li = document.createElement('li');
            li.innerHTML = child;
            ul.appendChild(li);
        });
        container.appendChild(title);
        container.appendChild(ul);
        root.appendChild(container);
    }

    buildfooterSection(contacts);
    buildfooterSection(socialMedia);
    buildfooterSection(faqs);
}

/**
 * sideMenu - creates the side menu for the website
 * @void - accepts no args
 * @returns - no return value
 */

function sideMenu () {
    const div = document.createElement('div');
    div.className = "side-menu";
    const ul = document.createElement('ul');
    navItems.map((item) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href=#${item.includes(" ") ?  item.split(" ").join("") : item}>${item}</a>`;
        ul.appendChild(li);

        li.addEventListener('click', (event)=> {
            event.preventDefault();
            const target = document.querySelector(li.querySelector('a').getAttribute('href'));
            target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            div.classList.toggle('visible-item');
        }, true);
    });

    div.appendChild(ul);
    document.body.appendChild(div);

    div.addEventListener('mouseleave', ()=> {
        div.classList.toggle('visible-item');
    }, true);
}




/**
 * @contactUs - creates a contact us form with two input fields
 * @returns - No return value
 */
function contactUs () {
    const root = document.querySelector("#contact-form");

    const formTitle = document.createElement('h1');
    formTitle.textContent = "Contact us";
    const contactForm = document.createElement('form');
    const emailLable =document.createElement('p');
    emailLable.textContent = "Enter email"

    const userEmail = document.createElement('input');
    userEmail.setAttribute('type', 'email');
    userEmail.id = "userEmail";
    const messageLabel = document.createElement('p');
    messageLabel.textContent = "Message"
    const userMessage = document.createElement('textarea');
    userMessage.id = "userMessage";
    userMessage.cols = 30;
    userMessage.rows = 5;

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.className = 'submit-button';
    submitButton.innerText = "Send Message";

    contactForm.appendChild(formTitle)
    contactForm.appendChild(emailLable);
    contactForm.appendChild(userEmail);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(userMessage);
    contactForm.appendChild(submitButton);
    root.appendChild(contactForm);
}


function highlightSection() {
  const navLinks = document.querySelectorAll('nav ul li');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const linkHref = link.querySelector('a').getAttribute('href').substring(1);
      if (linkHref === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        section.classList.add('current');
      } else {
        section.classList.remove('current');
      }
    });
  });
}





//MAIN APP FUNCTION
/**
 * @main - calls all functions that build the page
 * @void -no arguments accepted
 * @description - calls individual functions that build different
 * parts/sections of the webpage.
 * @returns - no return value
 */
function main () {
    document.addEventListener('DOMContentLoaded', ()=> {
        navBar();
        sideMenu();
        heroSection ();
        ourServices();
        popularSites();
        contactUs();
        pageFooter();
        highlightSection();
    });

    window.addEventListener('resize', () => {
        const menu =document.querySelector(".side-menu");
        if (window.innerWidth > 680) {
            if (menu.classList.contains('visible-item')) {
                menu.classList.toggle("visible-item");
            }
        }
    }, true);
}

main ();
