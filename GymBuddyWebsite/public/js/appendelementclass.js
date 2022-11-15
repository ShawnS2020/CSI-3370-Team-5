class AppendElement {

  // This static method is used to append any String property of an object to a preexisting html element
  static appendElement(property, element) {

    // Creates an html span element
    const span = document.createElement("span");
    // Populates span element with the respective data
    span.innerHTML = property;
    // Appends the span element to the preexisting html element passed to the function
    element.appendChild(span);
  }

}

export {AppendElement};
