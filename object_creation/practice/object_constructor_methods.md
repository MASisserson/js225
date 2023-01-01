# Learning Practice

## Problem 1

```javascript
function newPerson(name) {
  let obj = { name: name };
  Object.defineProperties(obj, {
    log: {
      value: function() {
        console.log(name);
      },
      writable: false,
    }
  });

  return obj;
}
```
