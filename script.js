function submit(){
    alert("Done!");
    var review = document.getElementById("message").value;
    var parent = document.getElementById("recommendations");

    let newChild = document.createElement("div");
    newChild.textContent = review;
    newChild.classList.add("recommendation");
    parent.appendChild(newChild);
}