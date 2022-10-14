function ShowPic(picture)
{
    var src = picture.getAttribute("href");
    var newImg = document.createElement("img");
    newImg.setAttribute("src", src); 
    var figure = document.getElementById("placeholder");
    var element = figure.children[0];
    
    if (document.getElementById("placeholder").childElementCount != 0)
    {
        figure.replaceChild(newImg, element)
        
    }
    else
    {
        figure.appendChild(newImg);
    }
    
}