contentScriptMessage = "contentScriptMessage";
var buttonOnSite = document.getElementById("player"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("MARK WATCHED");

button.appendChild(text);
button.className = "button";
button.onclick=function(){
	alert("Contentscript is sending a message to background script: '" + contentScriptMessage  + "'");
	chrome.extension.sendRequest({message: contentScriptMessage});
};
if (next) parent.insertBefore(button, next);
else parent.appendChild(button);

chrome.runtime.onMessage.addListener(
 function(request, sender) {
  alert("Contentscript has received a message from from background script: '" + request.message + "'");
  });