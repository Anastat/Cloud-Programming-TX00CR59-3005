## TODO 1 Test Your Knowledge
1. locate the input variable declaration (just inside the ``do`` loop)
- substitute it for a constant by replacing the var with const, what effect does this have.
- now substitute a block-scoped variable by substituting ``const`` for ``let``, what effect does this have?
The ``const`` and ``let`` variables are block scoped. Because input is defined inside ``do`` loop the expression ``while (input !== 'exit')`` throws an error "input is not defined"
2. the array at the top of the script is defined using var. What happens if you make this immutable (use const)?
Nothing happens, works the same as with ``var``. If values, such as string or numbers, defined as ``const``, they cannot be edited, but arrays and objects can be modified.
3. Items are added to the array using its ``push()`` method.
- substitute ``push()`` for the ``unshift`` method. How does this change the script?
The ``unshift()`` method adds items to the top of the list instead of ``push()`` which adds to the end