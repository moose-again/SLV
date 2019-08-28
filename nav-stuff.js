 let metas = document.getElementsByTagName('meta');

// Find the tag and get its content
let pageTitle;

for(let i = 0; i < metas.length; i++) {
  if(metas[i].getAttribute("name") === "application-name") {
    pageTitle = metas[i].getAttribute("content");
  }
}

// Find the nav a and give it the link
let container = document.getElementById("navbarSupportedContent");
let links = container.getElementsByClassName("nav-link");

for(let i = 0; i < links.length; i++) {
  if(links[i].getAttribute("data-page").toLowerCase() === pageTitle.toLowerCase()) {
    links[i].className += " active";
    links[i].href = "#";
    links[i].dataset.toggle = "popover";
    links[i].dataset.title = "Dude!";
    links[i].dataset.placement = "bottom";
    links[i].dataset.content = "Why are clicking me? You are already on my page 🤕. Thank you.";
  }
}
