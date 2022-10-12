const body = document.getElementsByTagName("body")[0];
body.style.border = "2px solid black";
body.style.padding = " 0 20px"
body.style.fontFamily = "Monospace"

// upside

const header = document.createElement("header");
header.setAttribute("class", "ylatunniste");

const title = document.createElement("h1");
const titleText = document.createTextNode("Tämä on artikkeli otsikko");
title.appendChild(titleText);
const upsideTextP = document.createElement("p");
const upsideText = document.createTextNode("Ensimainnen kappalle. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ");
upsideTextP.appendChild(upsideText);
header.appendChild(title);
header.appendChild(upsideTextP);
header.style.borderBlockEnd = "2px solid";


// downside
const section = document.createElement("section");
section.setAttribute("id", "rinnakkain");
const downsideP = document.createElement("p");
const downsideText = document.createTextNode("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
downsideP.appendChild(downsideText);
const figure = document.createElement("figure");
figure.setAttribute("id", "kuvapaikka");
const image = document.createElement("img");
image.style.width = "100%";
image.src = "https://dri.es/files/cache/blog/javascript-powered-multichannel-640w.gif";
figure.appendChild(image);

section.appendChild(downsideP);
section.appendChild(figure);
section.style.borderBlockEnd = "2px solid"

// footer
const footer = document.createElement("footer");
const footerP = document.createElement("p");
const footerText = document.createTextNode("© 2022. Ivan Dubinnikov")
footerP.appendChild(footerText);
footer.appendChild(footerP);


body.appendChild(header);
body.appendChild(section);
body.appendChild(footer);