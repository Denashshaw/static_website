function newParagraph() {
	
	 var element=document.createElement("p");
	 
	 var main = document.getElementById("main");
	 
	 main.appendChild(element);
	 
	 var text = document.createTextNode(" The Paragraph is visible now ");
	 
	 element.approachChild(text);
	 
}