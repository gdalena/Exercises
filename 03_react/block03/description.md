## Exercise 1

    Write a stateful component, with an input that takes the data from the user, the data is then displayed (rendered) as an h1 in the page, if no text is provided it should display a text saying "no text provided!" 

## Exercise 2

    Extend the previous exercise, the onChange input will work the same way, however you 
    need to have a child component to which you pass the data (using props) and have that render the data.

## Exercise 3

    create a div which contains 2 inputs and one button.
    each of these should be a separate components, all rendered by a parent component called App.
    you should collect the data from the inputs and make it available in the parent component (using a function would work for this).
    input 1 should collect the data  for the firstname
    and input 2 should collect the data for the lastname.
    to make thigs easier you may use refs in the input fileds.
    when the button (also a separate component) is clicked then you should alert the data collectd by the two inputs.
