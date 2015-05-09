var buttonOnSite = document.getElementById("player"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("test");

button.appendChild(text);
button.className = "watch";
if (next) parent.insertBefore(button, next);
else parent.appendChild(button);