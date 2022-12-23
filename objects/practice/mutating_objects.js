/*

1. What will it print?

Hello from the function scope!
Hello from the global scope!

This is because the `message` variable within the function is local to the
function. Assigning it to a new value does not affect the external variable.

2. What will it print?

Greetings from the function scope!
Greetings from the function scope!

In this example, the `obj` variable in the function points to a reference to
the object's memory location. The mutation of the object within the function
is felt outside of the function because both `obj` and `myObj` have pointers
that point to the same object in memory.

3. What will it print?

Hello from the function scope!
Hello from the function scope!

There is no function scoped variable `message` declared within the function.
Instead, the globally scoped variable `message` is reassigned within the
function to point to `'Hello from the function scope!'`

4. What will it print?

false
true

When `newObj` is initialized to `obj`, `newObj` is given a pointer that
references the same object in memory that `obj`'s pointer references.
`newObj.a += 10` mutates that object. The variable `a` is not reassigned.

5. If objects are mutable, why does the second to last line in the given code
   return false?

`animal` is reassigned on `line 10` to a different object than that referenced
by `menagerie.warthog`.

*/
