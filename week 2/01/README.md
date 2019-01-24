Labs from https://github.com/erja/pilvi/blob/master/w2%20Javascript%20Asynchronous/01%20AJAX/README.md

## TODO 1 Test your Understanding 

- Add a new div containing some text<br>
- Add a “click" and "mousemove” event listener on your new div<br>
- Add a handlers which alerts the user which element ID was clicked on and moved over

## TODO 2 Test your Understanding
- Use the createElement method of the document object to add a new list `<ul>` to the DOM<br>
- Populate this list using a JS for loop (name your buttons as B1, B2, ..)<br>
- Test also how you could use appendChild()and innerHTML assignmentto your page.

## TODO 3 Test your understanding
- Define a new JS object in the JSON.html script which also contains nested objects (recall that JS objects can be nested multiple times) as some of its properties. For example:
```
var animal = {
    breed: { 
        latin: "Boidae",
        swedish: "Jätteorm"
    },
    sound: "none"
}
```
- Convert your object to a JSON string myString and display it in a `<div>` somewhere on the page.
- Convert the string back to a JS object myObject and assign one of the nested objects to a new variable. For example:
```
var animalBreed = myObject.breed;
```
- Stringify the new subobject and display it in another `<div>` elsewhere on the page.
## TODO 4 Test your Understanding
You can make a simple “404” checker as follows.// NOTE: this is the same excercise you have done earlier. Do not have a look there but try to solve the problem now!

- Add a text input element to the page which the user can type a URL in to.
- Add a button that when clicked tries to do an AJAX http request to the given URL.
- Define a new callback function, similar to `alertContents` which checks whether the requested URL has a "404" status or not.
- If it does, pop up an alert saying “Site is DOWN!”
- Adjust the appropriate event listener in the `makeRequest` function of `ajax_basic.html`, so that your new callback is set as the handler for all HTTP requests made by your checker page.
## TODO 5 Test your Understanding
this is an important feature; test it over and add some other element you did on your web course!

- Have a look at `dom_utils_global.js`, which is an implementation of a few additional DOM/event helpers

- In particular note that it is defined as a module.

- Carefully think about how `$live` is defined here:

  - an immediately invoked function returns a (closure) function which adds handlers to events and which stores these associations in an object containing event handler arrays
  - in addition, the `dispatchEvent()` is a closure over the `eventRegistry` object and is therefore able to be called against this registry whenever a listened-to event happens, even when the event happens on an element that was not defined in the DOM when the event handler was added!
  - this is the power of closures
- Adjust `dom_scripting.html` to include the `dom_utils_global.js` file (as well as the original `dom_utils.js`)

- Now refactor the JS code in the HTML file to use `window.$live` to register the events and handlers previously dealt with by the U object.

- Try adding a DOM element dynamically to the page, which has a “live” listener already defined earlier in your code. It should react to the listened- to event even though it was not present when you added the `$live` event association.
## TODO 6 Test your Understanding
- Parse the content of the `chapter` objects returned by the `getJsonSync` as they come in from the server:
  - If the HTML attribute contains the word “dictum” then make a AJAX call to a dictionary API that returns JSON, such as one of the API endpoints listed on the [Wordnik API documentation](https://developer.wordnik.com/docs#!/word/get_definitions)
  - Parse the JSON response for a definition of the word and dynamically add a DOM element to the HTML page containing the term “dictum” along with the returned definition.
- Now make your AJAX call and JSON response parsing dynamic, by allowing the user to double-click any word on the screen: double clicking it should provide a new entry in the “word dictionary list” somewhere on the page, containing the definition or “not found”. You may find this [StackOverflow question on handling double-clicks on words](https://stackoverflow.com/questions/878637/how-to-make-a-click-or-double-click-on-a-word-on-a-webpage-to-trigger-an-event-h) useful.
<br>
