const navLinks = document.querySelectorAll("#header nav a");
const pageContent = document.getElementById("page-content");
const dropdown = document.querySelector(".dropdown-content");

function blurContent()
{
    pageContent.style.filter = "blur(5px)";
}

function unblurContent(event) 
{
    if (!dropdown.contains(event.relatedTarget) && !event.currentTarget.contains(event.relatedTarget))     
    {
        pageContent.style.filter = "none";
  
    }
}
navLinks.forEach(link => 
{
    link.addEventListener("mouseenter", blurContent);
    link.addEventListener("mouseleave", unblurContent);
});

if (dropdown) 
{
    dropdown.addEventListener("mouseenter", blurContent);
    dropdown.addEventListener("mouseleave", unblurContent);
}

