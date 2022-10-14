function ShowPic(picture)
{
    var src = picture.getAttribute("href");
    var newImg = document.createElement("img");
    newImg.setAttribute("src", src);
    newImg.setAttribute("class", "newImg"); 
    var figure = document.getElementById("placeholder");
    var element = figure.children[0];
    var imgTitle = picture.getAttribute("title");
    var description = document.getElementById("description");
    description.innerHTML = imgTitle;
    
    if (document.getElementById("placeholder").childElementCount != 0)
    {
        figure.replaceChild(newImg, element)
        
    }
    else
    {
        figure.appendChild(newImg);
    }
    
}