const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const header = document.querySelector('header');
//  const navBar =Array.forEach(document.querySelectorAll('nav a'));
 const navBar = Array.from(document.querySelectorAll('nav a'));
const h1 = document.querySelector('h1');
const cta = document.getElementById('cta-img');
const startButton = document.querySelector('.cta button');
const h4 = document.querySelectorAll('h4');
const middleImg = document.getElementById("middle-img");
const p = document.querySelectorAll('p');


//would not work
// navBar[0].textContent = siteContent["nav"]["nav-item-1"];
// navBar[1].textContent = siteContent["nav"]["nav-item-2"];
// navBar[2].textContent = siteContent["nav"]["nav-item-3"];
// navBar4[3].textContent = siteContent["nav"]["nav-item-4"];
// navBar[4].textContent = siteContent["nav"]["nav-item-5"];
// navBar[5].textContent = siteContent["nav"]["nav-item-6"];

h1.textContent = "DOM Is Awesome";
//will not show images,cant figure out why
cta.setAttribute = ('src',siteContent["cta"]["img-src"]);

startButton.textContent = "Get Started";

h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];



p[0].textContent = siteContent['main-content']["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];
p[5].textContent = siteContent["contact"]["123 Way 456 Street <br> Somewhere, USA"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];
p[8].textContent = siteContent["footer"]["copyright"];

middleImg.setAtrribute('src',siteContent['main-content']["middle-img-src"]);