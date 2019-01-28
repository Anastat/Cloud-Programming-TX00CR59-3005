labs from https://github.com/erja/pilvi/tree/master/w2%20Javascript%20Asynchronous/02%20Promises

## TODO 1 Test your Understanding
- Add an additional then() call at an appropriate place in ajax_async.html (you will need to be careful with nesting) which pops up a confirmation dialog after each new chapter is displayed.
- The confirmation should ask whether the user wishes to continue downloading the next chapter
  - if so, progress as normal
  - if not, throw an exception, for example:
```
var err = {message: "User aborted download"};
throw(err);
```
- Throwing an err object like this will pass it on to the `.catch()` method down the chain, which will show the message on the screen.

## TODO 2 Test your understanding
You will have done well to understand this code by the end of the lab!

- Insert a new `.then()` block directly after the call to `getJson('data/story.json')`.
- Your new `.then()` block should create a Promise object that:
  - Prompts the user to break the promise or keep the promise.
  - `resolve()s` itself if the user clicked “OK”, and passes the story on to the next then() block.
  - `reject()s` itself if the user clicked “Cancel”, and passes an appropriate error object with a message key containing appropriate information.
- The `then()` block should return the new Promise object that you created.

## TODO 3 Test Your Understanding
Try to define a map-reduce chain of promises corresponding to button click events.

- Add five buttons to an HTML page
- Define five promise objects in JS that resolve when the corresponding button is clicked (the promises will probably contain listeners - ideally “one shot” listeners that remove themselves afterwards)
  - NB: you will need to use a closure here to keep your code readable
- Create an array of these promise objects
- Apply map-reduce to the array such that the DOM is updated to display the longest sequence of buttons clicked so far (similar to the AJAX calls completing above). For example:
  - User clicks 2, 1, 3, 5, 4
  - DOM updates none, (1,2), (1,2,3), none, (1,2,3,4,5)
  - User clicks 5, 4, 3, 2, 1
  - DOM updates none, none, none, none, (1,2,3,4,5)
  - etc.
