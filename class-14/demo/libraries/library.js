var siteTitle = "Welcome to John's Amazing";

function showTitle(pageName = "Page") {
  var main = document.getElementsByTagName('main')[0];
  var title = `${siteTitle} ${pageName}`;
  addElement(main, 'h1', title);
}

function randomNumberBetween(min = 0, max = 1) {

}

function addElement(parent, child, content, id, classname) {
  var childElement = document.createElement(child);
  var textNode = document.createTextNode(content);
  childElement.appendChild(textNode);
  if (id) {
    childElement.id = id;
  }
  if (classname) {
    childElement.classList.add(classname);
  }
  parent.appendChild(childElement);
}