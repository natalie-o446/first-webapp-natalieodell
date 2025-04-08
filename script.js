// Add JavaScript code for your web site here and call it from index.html.
document.getElementById("myBtn")?.addEventListener("click",() => {
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").innerHTML = "you typed: " + input;
});

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
