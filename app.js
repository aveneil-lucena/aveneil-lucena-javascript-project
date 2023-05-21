// Get the form, input field, and list element
const form = document.querySelector('form');
const input = form.querySelector('input');
const list = document.querySelector('ul');

// Listen for form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
    event.preventDefault();

  // Get the text from the input field, trimmed of whitespace
    const text = input.value.trim();

  // If text box isn't empty, add the input from the user into a list
  if (text !== '') {
    // Create a new list item element, span element for the text, and button element for deleting
    const listItem = document.createElement('li');
    const textSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    const checkbox = document.createElement('input');
    
    // Add the span and button elements to the list item element
    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);

    // Adds checkbox functionality
    checkbox.type = 'checkbox';

    // Add the new list item element to the list
    list.appendChild(listItem);
    
    // Set the text content of the span element to the input text
    textSpan.textContent = text;

    // Sets the input field blank
    input.value = '';    

    // Set the text content of the delete button
    deleteButton.textContent = 'Delete';
    
    // Listen for clicks on the delete button
    deleteButton.addEventListener('click', function() {
    // Remove the list item from the list
    list.removeChild(listItem);
    });
  }
  // If input is empty
  else {
    alert('Empty! Please add a task.');
  }
});