# Lesson 13 - Strings

We've used strings since the start of the course for text, and we've seen that `.value()` from an input box gives us a string. This lesson looks at how to work with the characters **inside** a string.

## Strings are a Sequence of Characters

A string is a list of characters in order. Like an array, each character has an **index** that starts at 0, and `.length` tells us how many characters there are.

```javascript
let word = "p5.js rocks";

word.length            // 11 (spaces and punctuation count!)
word[0]                // "p"
word[3]                // "j"
word[word.length - 1]  // "s" (the last character)
```

One difference from arrays: you **can't** change a single character. `word[0] = "P"` does nothing. To change a string, you create a new one.

## Joining Strings

Strings are joined (concatenated) with `+`, or with template literals:

```javascript
let first = "Ada";
let last = "Lovelace";

let full = first + " " + last;     // "Ada Lovelace"
let greeting = `Hello ${first}!`;  // "Hello Ada!"
```

We can also build a string piece by piece:

```javascript
let stars = "";
stars += "*";
stars += "*";   // stars is now "**"
```

### Review: Strings and Numbers

Remember from the More Input lesson: `+` joins strings, but adds numbers. If either side is a string, JavaScript joins them.

```javascript
5 + 3          // 8
"5" + 3        // "53"
"5" + "3"      // "53"
```

This matters because `.value()` from an input box is always a string, even if the user typed a number. Convert it with `Number()` before doing math:

```javascript
let typed = myInputBox.value();   // "5"

typed + 3            // "53"
Number(typed) + 3    // 8
```

## Iterating Through a String

Since a string has an index and a length, a for loop can go through it one character at a time, exactly like an array:

```javascript
let word = "banana";
let count = 0;

for (let i = 0; i < word.length; i += 1) {
  if (word[i] == "a") {
    count += 1;
  }
}
// count is 3
```

Building a new string in the loop lets us transform the original. This loop goes backwards to reverse a word:

```javascript
let word = "stressed";
let reversed = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
  reversed += word[i];
}
// reversed is "desserts"
```

## String Methods

Strings have many built-in methods ([full list here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)). None of them change the original string; they **return** a new value.

```javascript
let msg = "  Hello World  ";

msg.trim()                  // "Hello World" (removes spaces at the ends)
msg.toUpperCase()           // "  HELLO WORLD  "
msg.toLowerCase()           // "  hello world  "
msg.includes("World")       // true
msg.indexOf("o")            // 6 (the first "o", -1 if not found)
msg.trim().slice(0, 5)      // "Hello" (from index 0, up to but NOT including 5)
msg.replace("World", "Mr. K")  // "  Hello Mr. K  "
"a,b,c".split(",")          // ["a", "b", "c"] (splits into an array)
```

Methods can be chained, as in `msg.trim().slice(0, 5)`. Each method works on the result of the one before it.

## Comparing Strings

`==` compares strings exactly, and capital letters matter: `"Yes" == "yes"` is `false`. Converting first makes the comparison ignore case:

```javascript
let answer = myInputBox.value();

if (answer.trim().toLowerCase() == "yes") {
  // works for "yes", "YES", " Yes " etc.
}
```

This is a cleaner fix for the problem from the Specific Input lesson, where we had to check `key == 'g' || key == 'G'`.

### Greater Than and Less Than

`<` and `>` compare strings in "alphabetical" order, one character at a time from the left:

```javascript
"apple" < "banana"   // true ("a" comes before "b")
"cat" < "car"        // false ("t" comes after "r")
"car" < "cart"       // true (a shorter match comes first)
```

Behind the scenes, every character has a number code, and the codes are in this order:

**digits** `"0"` to `"9"`, then **capital letters** `"A"` to `"Z"`, then **lowercase letters** `"a"` to `"z"`

So capitals come before all lowercase letters:

```javascript
"Zebra" < "apple"    // true
"Zebra".toLowerCase() < "apple"   // false
```

Since the codes are in order, we can check what type of character something is by testing if it falls in a range:

```javascript
let char = "G";

if (char >= "A" && char <= "Z") {
  // char is a capital letter
}

if (char >= "0" && char <= "9") {
  // char is a digit
}
```

Be careful with numbers stored as strings. They are compared character by character, not by value:

```javascript
"10" < "9"           // true ("1" comes before "9")
Number("10") < Number("9")   // false
```

> **AP CSP:** The AP exam's questions use concatenation and substrings (part of a string). In the exam's pseudocode, indexes start at 1.
