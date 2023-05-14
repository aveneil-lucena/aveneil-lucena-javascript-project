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

  // Check if the text is not empty 
   if (text !== '') {
    // Create a new list item element, span element for the text, and button element for deleting
    const listItem = document.createElement('li');
    const textSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    // Add the span and button elements to the list item element
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    
    // Add the new list item element to the list
    list.appendChild(listItem);
    
    // Set the text content of the span element to the input text
    textSpan.textContent = text;
    
    // Set the text content of the delete button
    deleteButton.textContent = 'Delete';
    
    // Clear the input field and give it focus
    input.value = '';
    input.focus();
    
    // Listen for clicks on the delete button
    deleteButton.addEventListener('click', function() {
    // Remove the list item from the list
    list.removeChild(listItem);
    });
  }
  else {
    alert('Empty! Please add a task.');
  }
});