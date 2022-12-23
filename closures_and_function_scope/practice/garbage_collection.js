// Problem 1

/*

Yes, JavaScript is a garbage-collected language. This means that the JS engine
handles memory deallocation rather than the developer.

*/

// Problem 2

/*

WRONG
['this is an array'] is available for GC on `line 5`, because nothing further
is done with the variable to which its reference is saved. Nothing seen is
eligible for garbage collection on line 12.

CORRECT
Neither value is eligible for garbage collection on line 5. Since variables
that contain numbers are stored on the stack, the value 1 is never eligible for
GC. The array is also not eligible for GC since it is still referenced by the
myArr variable.

['this is an array'] is eligible for garbage collection on line 10. Since myArr
is function-scoped, the variable's reference to ['this is an array'] is broken
after the function finishes running.

*/
