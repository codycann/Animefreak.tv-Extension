var buttonOnSite = document.getElementById("player"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("MARK WATCHED");

button.appendChild(text);
button.className = "button";
if (next) parent.insertBefore(button, next);
else parent.appendChild(button);