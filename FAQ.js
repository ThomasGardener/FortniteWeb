let questionButton = document.getElementById("insideFaq");

questionButton.addEventListener("click", (event) => {
  if (event.target.tagName === "A")
  {
    let anchor = event.target;
    let paragraph = anchor.nextElementSibling;
    if (paragraph.classList.contains("show"))
    {
      paragraph.classList.remove("show");
      paragraph.style.display = "none";
    }
    else
    {
    paragraph.className += "show";
    paragraph.style.display = "block";
  }
  }
})
