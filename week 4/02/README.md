## TODO 1 Test Your Knowledge
1. locate the input variable declaration (just inside the ``do`` loop)
- substitute it for a constant by replacing the var with const, what effect does this have.
- now substitute a block-scoped variable by substituting ``const`` for ``let``, what effect does this have?<br>
Answer: The ``const`` and ``let`` variables are block scoped. Because ``input`` is defined inside ``do`` loop, the expression ``while (input !== 'exit')`` throws an error "input is not defined"
2. the array at the top of the script is defined using var. What happens if you make this immutable (use const)?<br>
Answer: Nothing happens, works the same as with ``var``. If values, such as string or numbers, defined as ``const``, they cannot be edited, but arrays and objects can be modified.
3. Items are added to the array using its ``push()`` method.
- substitute ``push()`` for the ``unshift`` method. How does this change the script?<br>
Answer: The ``unshift()`` method adds items to the top of the list instead of ``push()``, which adds to the end

## TODO 2 Test Your Knowledge

Open the ``membership.js`` file. Run the script, it works correctly.

Notice the red error circles and yellow warning triangles in the left margin. If you hover the mouse pointer over these you can find out more. These

1. locate any errors in the script and fix
2. locate the warnings and fix the code to remove these

## TODO 3 Test Your Knowledge
1. modify the code to prevent duplicate items being added. You will need to use the ``Array.indexOf()`` method.
2. create a remove option so an item such as cheese can be removed using the syntax `remove cheese`. You may need to use the ``Array.splice()`` method.
3. The current version is case sensitive. Modify the code so that items are converted to lowercase before being added or searched for. You will need to use the ``String.toLowerCase()`` method.
