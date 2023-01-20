Library app

Functionality:
- On screen add button
- When add button clicked pop up appears with inputs for: title, author, page count, read yes/no, submit button
- On submit a new element is created displaying all information.
- Book elements should have a 'switch' to diplay whether the book has been read or not as well as a delete button.

Add button:
on click event listener >> creates new div/element(input element)

Input element:
- input fields
- submit button 

Submit Function:
- event.preventDefault
- capture information as object
- creates new element with rendered information from object

Book Elements:
- displayes information
- red/not read button >> toggle function using book protoype instance
- remove book button >> use array index to select individual books
- loops through array of book and displays sequentially when added