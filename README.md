# special-waddle
A basic counter app made with Javascript

## Feature
Making basic calculations: increment, save and refresh while showing the results after each count

![DEMO](https://user-images.githubusercontent.com/57369792/137103029-bf63381c-46e0-4282-bbdc-c0e12acd4144.png)
### Try it yourself [here!](https://silly-wilson-bcf85c.netlify.app/)

### Learning Purpose
- Manipulate HTML to generate Text with JavaScript
- Using the document method: getElementById 
- Use of assignment operators

### Goals
- Coding an extra button to refresh the page
- Making the app responsive for all devices
- Layout rework for better accessibility

## Example
```javascript 
// Code away!
function save() {
    let countStr = count + " - " 
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}
```
