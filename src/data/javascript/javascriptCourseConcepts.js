export const javascriptCourseConcepts = [
  {
    "id": 1,
    "title": "What is JavaScript?",
    "category": "basics",
    "level": "beginner",
    "description": "JavaScript is a programming language that makes websites interactive. It runs in the browser (frontend) and on servers (Node.js).",
    "why": "To add interactivity to websites, build web apps, servers, mobile apps, etc.",
    "when": "Every time you want to make a webpage dynamic or build any web application.",
    "code": "// JavaScript can do this:\nconsole.log(\"Hello, World!\");  // Prints to console\nalert(\"Welcome!\");            // Shows popup\ndocument.title = \"New Title\";    // Changes page title"
  },
  {
    "id": 2,
    "title": "How to Include JavaScript",
    "category": "basics",
    "level": "beginner",
    "description": "Three ways to add JavaScript to HTML: inline, internal, and external.",
    "why": "To separate HTML, CSS, and JS for cleaner code and better maintenance.",
    "when": "Always use external files for production; inline for quick testing.",
    "code": "<!-- 1. Inline (in HTML tag) -->\n<button onclick=\"alert('Hi')\">Click</button>\n\n<!-- 2. Internal (in <script> tag) -->\n<script>\n  console.log(\"Hello\");\n</script>\n\n<!-- 3. External (best practice) -->\n<script src=\"script.js\"></script>"
  },
  {
    "id": 3,
    "title": "console.log() & Comments",
    "category": "basics",
    "level": "beginner",
    "description": "console.log() prints to the browser console. Comments explain code.",
    "why": "To debug code, print values, and explain code logic.",
    "when": "Every time you write code!",
    "code": "// This is a single-line comment\n/* This is a \n   multi-line comment */\n\nconsole.log(\"Hello World\");  // Prints to console\nconsole.log(42);               // Prints a number\nconsole.log(true);            // Prints boolean\n\n// Use for debugging\nconsole.log(\"Variable value:\", myVar);"
  },
  {
    "id": 4,
    "title": "Variables (var, let, const)",
    "category": "basics",
    "level": "beginner",
    "description": "Containers for storing data. var (old), let (can change), const (can't change).",
    "why": "To store and manage data in your program.",
    "when": "Always! Use const by default, let when you need to reassign.",
    "code": "// var - old way (avoid in modern code)\nvar oldName = \"John\";\n\n// let - can be reassigned\nlet age = 25;\nage = 26;  // ✅ allowed\n\n// const - cannot be reassigned\nconst PI = 3.14159;\n// PI = 3.14; // ❌ Error\n\n// Best practice: Use const by default, let when needed"
  },
  {
    "id": 5,
    "title": "Data Types",
    "category": "basics",
    "level": "beginner",
    "description": "8 data types: String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object.",
    "why": "To represent different kinds of information (text, numbers, true/false, etc.).",
    "when": "Every time you store data.",
    "code": "// Primitive Types\nlet name = \"John\";        // String\nlet age = 25;              // Number\nlet isStudent = true;     // Boolean\nlet nothing = undefined;   // Undefined\nlet empty = null;          // Null\nlet bigNum = 9007199254740991n; // BigInt\nlet sym = Symbol(\"id\");   // Symbol\n\n// Reference Type\nlet person = { name: \"Alice\", age: 30 }; // Object"
  },
  {
    "id": 6,
    "title": "Type Coercion",
    "category": "basics",
    "level": "beginner",
    "description": "JavaScript automatically converts types. Be careful!",
    "why": "JavaScript is loosely typed - it tries to be helpful.",
    "when": "Always use explicit coercion to avoid bugs.",
    "code": "// Implicit Coercion (automatic)\nlet result = \"5\" + 3;    // \"53\" (string concatenation)\nlet result2 = \"5\" - 3;   // 2 (number subtraction)\nlet result3 = \"5\" * 2;   // 10 (number multiplication)\n\n// Explicit Coercion (manual - better)\nlet num = Number(\"5\");      // 5\nlet str = String(5);        // \"5\"\nlet bool = Boolean(0);       // false\nlet bool2 = Boolean(\"hello\"); // true"
  },
  {
    "id": 7,
    "title": "Operators",
    "category": "basics",
    "level": "beginner",
    "description": "Symbols that perform operations on values.",
    "why": "To perform calculations, comparisons, and logic.",
    "when": "Everywhere in your code!",
    "code": "// Arithmetic: +, -, *, /, %, **\nlet sum = 10 + 5;    // 15\nlet power = 2 ** 3;   // 8 (2³)\n\n// Comparison: ==, ===, !=, !==, >, =, \nlet isEqual = 5 == \"5\";   // true (loose)\nlet isStrict = 5 === \"5\"; // false (strict - recommended)\n\n// Logical: && (AND), || (OR), ! (NOT)\nlet and = true && false; // false\nlet or = true || false;  // true\nlet not = !true;        // false\n\n// Assignment: =, +=, -=, *=, /=\nlet x = 10;\nx += 5;  // x = 15"
  },
  {
    "id": 8,
    "title": "Conditionals (if, else, switch)",
    "category": "basics",
    "level": "beginner",
    "description": "Execute code based on conditions.",
    "why": "To make decisions in your code.",
    "when": "Whenever you need to check a condition.",
    "code": "// if/else\nlet age = 18;\nif (age >= 18) {\n    console.log(\"Adult\");\n} else {\n    console.log(\"Minor\");\n}\n\n// else if\nif (age \"Child\");\n} else if (age \"Teenager\");\n} else {\n    console.log(\"Adult\");\n}\n\n// Ternary operator (shortcut)\nlet status = age >= 18 ? \"Adult\" : \"Minor\";\n\n// switch\nswitch (day) {\n    case \"Monday\": console.log(\"Start of week\"); break;\n    case \"Friday\": console.log(\"TGIF!\"); break;\n    default: console.log(\"Midweek\");\n}"
  },
  {
    "id": 9,
    "title": "Loops (for, while, do-while)",
    "category": "basics",
    "level": "beginner",
    "description": "Execute code repeatedly.",
    "why": "To repeat actions and iterate over data.",
    "when": "Processing lists, repeating actions, etc.",
    "code": "// for loop - most common\nfor (let i = 0; i // 0,1,2,3,4\n}\n\n// while loop\nlet i = 0;\nwhile (i // do-while (runs at least once)\ndo {\n    console.log(\"At least once\");\n} while (false);\n\n// for...of (for arrays)\nlet arr = [1, 2, 3];\nfor (let val of arr) {\n    console.log(val);\n}"
  },
  {
    "id": 10,
    "title": "Functions (Declaration & Expression)",
    "category": "functions",
    "level": "beginner",
    "description": "Reusable blocks of code.",
    "why": "To organize code, reuse logic, and avoid repetition.",
    "when": "Any task you need to do multiple times.",
    "code": "// Function Declaration\nfunction greet(name) {\n    return \"Hello, \" + name + \"!\";\n}\n\n// Function Expression\nconst greet2 = function(name) {\n    return \"Hi, \" + name;\n};\n\nconsole.log(greet(\"Alice\")); // \"Hello, Alice!\"\n\n// Arrow function (ES6)\nconst greet3 = (name) => `Hello, ${name}!`;"
  },
  {
    "id": 11,
    "title": "Scope (Global, Function, Block)",
    "category": "basics",
    "level": "beginner",
    "description": "Where variables are accessible.",
    "why": "To control variable visibility and prevent conflicts.",
    "when": "Always! Understanding scope prevents bugs.",
    "code": "// Global scope\nlet globalVar = \"I'm global\";\n\nfunction myFunction() {\n    // Function scope\n    let localVar = \"I'm local\";\n    console.log(globalVar); // ✅ accessible\n    \n    if (true) {\n        // Block scope (let, const)\n        let blockVar = \"I'm block-scoped\";\n    }\n    // console.log(blockVar); // ❌ ReferenceError\n}"
  },
  {
    "id": 12,
    "title": "Hoisting",
    "category": "basics",
    "level": "beginner",
    "description": "JavaScript moves declarations to the top during compilation.",
    "why": "JavaScript's default behavior; understand it to avoid confusion.",
    "when": "Be aware of it; best to declare variables at the top.",
    "code": "// Hoisting with var\nconsole.log(x); // undefined (not error!)\nvar x = 5;\n\n// Hoisting with function declarations\nconsole.log(greet(\"John\")); // \"Hello, John!\"\nfunction greet(name) {\n    return \"Hello, \" + name;\n}\n\n// let and const are hoisted but not initialized (TDZ)\n// console.log(y); // ❌ ReferenceError\nlet y = 10;"
  },
  {
    "id": 13,
    "title": "Strict Mode (\"use strict\")",
    "category": "basics",
    "level": "beginner",
    "description": "Enforces stricter parsing and error handling.",
    "why": "To catch common coding errors and improve security.",
    "when": "Always use strict mode in modern JavaScript.",
    "code": "// Enable strict mode\n\"use strict\";\n\n// Without strict: allowed\nx = 10; // ❌ In strict: ReferenceError\n\n// Without strict: allowed\nfunction myFunction() {\n    this.name = \"John\"; // ❌ In strict: TypeError\n}\n\n// Must be at the top of file or function\nfunction strictFunction() {\n    \"use strict\";\n    // strict mode only in this function\n}"
  },
  {
    "id": 14,
    "title": "Truthy & Falsy Values",
    "category": "basics",
    "level": "beginner",
    "description": "Values that evaluate to true or false in boolean contexts.",
    "why": "To write cleaner conditions and default values.",
    "when": "Conditions, default values, short-circuiting.",
    "code": "// Falsy values (only 8)\nfalse, 0, \"\", null, undefined, NaN, 0n, -0\n\n// Everything else is truthy\nif (\"hello\") console.log(\"truthy\"); // ✅ runs\nif (0) console.log(\"falsy\"); // ❌ doesn't run\nif ([]) console.log(\"truthy\"); // ✅ runs (empty array is truthy)\n\n// Practical: default values\nlet name = userInput || \"Guest\";\nlet age = userAge ?? 18; // Nullish coalescing (only null/undefined)"
  },
  {
    "id": 15,
    "title": "Short-circuit Evaluation",
    "category": "basics",
    "level": "beginner",
    "description": "Logical operators stop evaluating once result is determined.",
    "why": "To write concise conditional code.",
    "when": "Default values, conditional execution, guarding against null/undefined.",
    "code": "// && stops at first falsy\nconsole.log(\"hello\" && \"world\"); // \"world\"\nconsole.log(0 && \"world\");      // 0\n\n// || stops at first truthy\nconsole.log(\"hello\" || \"world\"); // \"hello\"\nconsole.log(0 || \"world\");      // \"world\"\n\n// Practical uses\nlet name = user.name || \"Anonymous\"; // Default value\nuser && user.greet(); // Only call if user exists\nisLoggedIn && showDashboard(); // Only show if logged in"
  },
  {
    "id": 16,
    "title": "Arrow Functions",
    "category": "es6",
    "level": "intermediate",
    "description": "Shorter function syntax. Lexical 'this' binding.",
    "why": "Concise syntax, lexical 'this' binding.",
    "when": "Callbacks, array methods, React components.",
    "code": "// Regular function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;\n\n// With one parameter\nconst double = x => x * 2;\n\n// No parameters\nconst greet = () => console.log(\"Hello\");\n\n// Returning an object\nconst createUser = (name) => ({ name: name });\n\n// Arrow functions don't bind their own 'this'\nconst obj = {\n    name: \"Alice\",\n    greet: () => console.log(this.name) // this = global, not obj\n};"
  },
  {
    "id": 17,
    "title": "Template Literals",
    "category": "es6",
    "level": "intermediate",
    "description": "String literals with embedded expressions using backticks.",
    "why": "Cleaner string concatenation and multi-line support.",
    "when": "Almost always! Replaces string concatenation.",
    "code": "// Basic template literal\nconst name = \"Alice\";\nconst age = 30;\nconst message = `Hello, ${name}! You are ${age} years old.`;\n\n// Multi-line strings\nconst multi = `This is\na multi-line\nstring`;\n\n// Expressions\nconst result = `2 + 2 = ${2 + 2}`; // \"2 + 2 = 4\"\n\n// Tagged templates\nfunction tag(strings, ...values) {\n    console.log(strings); // [\"Hello \", \"!\"]\n    console.log(values);  // [\"Alice\"]\n}\ntag`Hello ${name}!`;"
  },
  {
    "id": 18,
    "title": "Destructuring (Objects & Arrays)",
    "category": "es6",
    "level": "intermediate",
    "description": "Extract values from objects and arrays into variables.",
    "why": "Cleaner, more readable code.",
    "when": "Extracting props in React, configuration objects.",
    "code": "// Object destructuring\nconst person = { name: \"Alice\", age: 30, city: \"NYC\" };\nconst { name, age } = person;\nconsole.log(name, age); // \"Alice\" 30\n\n// Renaming\nconst { name: firstName } = person;\n\n// Default values\nconst { job = \"Developer\" } = person;\n\n// Array destructuring\nconst colors = [\"red\", \"green\", \"blue\"];\nconst [first, second] = colors;\nconsole.log(first, second); // \"red\" \"green\"\n\n// Skipping elements\nconst [x, , z] = colors;"
  },
  {
    "id": 19,
    "title": "Spread & Rest Operators (...)",
    "category": "es6",
    "level": "intermediate",
    "description": "Spread expands, rest collects.",
    "why": "Flexible array/object manipulation.",
    "when": "Merging data, copying, function arguments.",
    "code": "// Spread: expand array/object\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst merged = [...arr1, ...arr2]; // [1,2,3,4,5,6]\n\n// Copy\nconst copy = [...arr1]; // new array\n\n// Object spread\nconst person = { name: \"Alice\", age: 30 };\nconst newPerson = { ...person, city: \"NYC\" };\n\n// Rest: collect remaining\nfunction logAll(first, ...rest) {\n    console.log(first); // 1\n    console.log(rest);  // [2,3,4]\n}\nlogAll(1, 2, 3, 4);"
  },
  {
    "id": 20,
    "title": "Default Parameters",
    "category": "es6",
    "level": "intermediate",
    "description": "Function parameters with default values.",
    "why": "To make functions robust and handle missing arguments.",
    "when": "Most functions with optional parameters.",
    "code": "function greet(name = \"Guest\", greeting = \"Hello\") {\n    return `${greeting}, ${name}!`;\n}\n\nconsole.log(greet());                // \"Hello, Guest!\"\nconsole.log(greet(\"Alice\"));       // \"Hello, Alice!\"\n\n// With destructuring\nfunction createUser({ name = \"Anonymous\", age = 0 } = {}) {\n    return { name, age };\n}"
  },
  {
    "id": 21,
    "title": "Map (Key-Value Collection)",
    "category": "collections",
    "level": "intermediate",
    "description": "A collection of key-value pairs where keys can be any type (not just strings).",
    "why": "More flexible than objects - keys can be any type, preserves insertion order.",
    "when": "When you need keys that aren't strings, or need ordered key-value pairs.",
    "code": "// Creating a Map\nconst map = new Map();\n\n// Adding values\nmap.set(\"name\", \"Alice\");\nmap.set(42, \"answer\");\nmap.set({ id: 1 }, \"user\"); // object as key\n\n// Getting values\nconsole.log(map.get(\"name\")); // \"Alice\"\nconsole.log(map.get(42));     // \"answer\"\n\n// Checking existence\nconsole.log(map.has(\"name\")); // true\n\n// Iterating\nfor (const [key, value] of map) {\n    console.log(key, value);\n}\n\n// Size\nconsole.log(map.size); // 3\n\n// Creating from array\nconst map2 = new Map([[\"a\", 1], [\"b\", 2]]);"
  },
  {
    "id": 22,
    "title": "Set (Unique Values)",
    "category": "collections",
    "level": "intermediate",
    "description": "A collection of unique values (no duplicates allowed).",
    "why": "To store unique values and remove duplicates efficiently.",
    "when": "Removing duplicates, checking existence, set operations (union, intersection).",
    "code": "// Creating a Set\nconst set = new Set();\n\n// Adding values\nset.add(1);\nset.add(2);\nset.add(2); // ignored (already exists)\nset.add(\"hello\");\n\nconsole.log(set); // Set { 1, 2, \"hello\" }\nconsole.log(set.size); // 3\n\n// Checking existence\nconsole.log(set.has(1)); // true\n\n// Iterating\nfor (const value of set) {\n    console.log(value);\n}\n\n// Remove duplicates from array\nconst arr = [1, 2, 2, 3, 3, 3, 4];\nconst unique = [...new Set(arr)]; // [1,2,3,4]"
  },
  {
    "id": 23,
    "title": "WeakMap & WeakSet",
    "category": "collections",
    "level": "advanced",
    "description": "Collections with weak references (garbage collected).",
    "why": "To prevent memory leaks with object keys.",
    "when": "Caching DOM elements, private data, metadata storage.",
    "code": "// WeakMap (keys must be objects)\nconst weakMap = new WeakMap();\nconst key = { id: 1 };\nweakMap.set(key, \"value\");\nconsole.log(weakMap.get(key)); // \"value\"\n\n// If key is garbage collected, entry is removed\n// WeakMap is not iterable\n\n// WeakSet (only objects)\nconst weakSet = new WeakSet();\nconst obj = {};\nweakSet.add(obj);\nconsole.log(weakSet.has(obj)); // true\n\n// Uses: memory management, private data\n// Great for caching DOM elements without memory leaks"
  },
  {
    "id": 24,
    "title": "Callback Functions",
    "category": "functions",
    "level": "intermediate",
    "description": "A function passed as an argument to another function.",
    "why": "To handle async operations and functional programming.",
    "when": "Event handlers, array methods, async operations.",
    "code": "// Basic callback\nfunction processUser(name, callback) {\n    const greeting = \"Hello, \" + name;\n    callback(greeting);\n}\n\nprocessUser(\"Alice\", (message) => {\n    console.log(message);\n});\n\n// Array methods use callbacks\nconst numbers = [1, 2, 3];\nnumbers.forEach((num) => console.log(num * 2));\n\n// Event listeners\ndocument.addEventListener(\"click\", () => {\n    console.log(\"Clicked!\");\n});"
  },
  {
    "id": 25,
    "title": "Higher-Order Functions",
    "category": "functions",
    "level": "intermediate",
    "description": "Functions that take other functions as arguments or return functions.",
    "why": "To write cleaner, more declarative code.",
    "when": "Processing arrays, composing functions.",
    "code": "// map: transform each element\nconst doubled = [1, 2, 3].map(n => n * 2); // [2,4,6]\n\n// filter: keep elements that pass test\nconst evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2,4]\n\n// reduce: accumulate values\nconst sum = [1, 2, 3].reduce((acc, n) => acc + n, 0); // 6\n\n// Creating HOF\nfunction multiplyBy(factor) {\n    return function(number) {\n        return number * factor;\n    };\n}\nconst double = multiplyBy(2);\nconsole.log(double(5)); // 10"
  },
  {
    "id": 26,
    "title": "Closures",
    "category": "advanced",
    "level": "advanced",
    "description": "A function that remembers its lexical scope even when executed outside it.",
    "why": "To create private variables, function factories.",
    "when": "Module pattern, event handlers, functional programming.",
    "code": "function outer(x) {\n    return function(y) {\n        return x + y; // inner function remembers 'x'\n    };\n}\n\nconst add5 = outer(5);\nconsole.log(add5(3)); // 8\n\n// Practical: private variables\nfunction counter() {\n    let count = 0;\n    return {\n        increment: () => ++count,\n        decrement: () => --count,\n        getCount: () => count\n    };\n}\n\nconst myCounter = counter();\nmyCounter.increment();\nmyCounter.increment();\nconsole.log(myCounter.getCount()); // 2"
  },
  {
    "id": 27,
    "title": "IIFE (Immediately Invoked Function Expression)",
    "category": "functions",
    "level": "intermediate",
    "description": "A function that runs as soon as it's defined.",
    "why": "To create a private scope, avoid polluting global scope.",
    "when": "One-time initialization, old-style modules.",
    "code": "// IIFE syntax\n(function() {\n    let privateVar = \"I'm private\";\n    console.log(\"IIFE executed!\");\n})();\n\n// Arrow function IIFE\n(() => {\n    console.log(\"Arrow IIFE\");\n})();\n\n// With parameters\n((name) => {\n    console.log(\"Hello, \" + name);\n})(\"John\");\n\n// Old module pattern\nconst module = (function() {\n    let private = \"secret\";\n    return {\n        getPrivate: () => private\n    };\n})();"
  },
  {
    "id": 28,
    "title": "'this' Keyword",
    "category": "objects",
    "level": "intermediate",
    "description": "Refers to the object executing the current function.",
    "why": "To access object properties within methods.",
    "when": "Methods, event handlers, class methods.",
    "code": "// In a method: refers to the object\nconst obj = {\n    name: \"Alice\",\n    greet() {\n        console.log(this.name); // \"Alice\"\n    }\n};\n\n// In a function (strict): undefined\nfunction showThis() {\n    \"use strict\";\n    console.log(this); // undefined\n}\n\n// In arrow functions: lexical 'this'\nconst arrow = () => console.log(this);\n\n// With call/apply/bind\nfunction greet() {\n    console.log(this.name);\n}\nconst user = { name: \"Bob\" };\ngreet.call(user); // \"Bob\""
  },
  {
    "id": 29,
    "title": "call, apply, bind",
    "category": "functions",
    "level": "advanced",
    "description": "Methods to explicitly set 'this' and call functions.",
    "why": "To control 'this' value and borrow methods.",
    "when": "Event handlers, method borrowing, partial application.",
    "code": "function greet(greeting, punctuation) {\n    console.log(`${greeting}, ${this.name}${punctuation}`);\n}\n\nconst user = { name: \"Alice\" };\n\n// call: pass arguments individually\ngreet.call(user, \"Hello\", \"!\"); // \"Hello, Alice!\"\n\n// apply: pass arguments as array\ngreet.apply(user, [\"Hi\", \"?\"]); // \"Hi, Alice?\"\n\n// bind: creates new function\nconst greetAlice = greet.bind(user, \"Hey\");\ngreetAlice(\".\"); // \"Hey, Alice.\"\n\n// bind with React components\nclass Component {\n    constructor() {\n        this.handleClick = this.handleClick.bind(this);\n    }\n}"
  },
  {
    "id": 30,
    "title": "Objects (Advanced)",
    "category": "objects",
    "level": "intermediate",
    "description": "Key-value pairs with properties and methods.",
    "why": "To group related data and functionality.",
    "when": "Almost always! Objects are fundamental to JS.",
    "code": "// Object creation\nconst person = {\n    name: \"Alice\",\n    age: 30,\n    greet() {\n        return `Hello, ${this.name}`;\n    }\n};\n\n// Computed properties\nconst key = \"job\";\nconst user = {\n    [key]: \"Developer\"\n};\n\n// Object methods\nObject.keys(person); // [\"name\", \"age\", \"greet\"]\nObject.values(person); // [\"Alice\", 30, function]\nObject.entries(person); // [[\"name\",\"Alice\"], [\"age\",30], ...]\n\n// Object.assign\nconst merged = Object.assign({}, person, { city: \"NYC\" });\n\n// Freeze (immutable)\nObject.freeze(person);\nperson.age = 31; // ignored in strict mode"
  },
  {
    "id": 31,
    "title": "Prototypes & Prototypal Inheritance",
    "category": "objects",
    "level": "advanced",
    "description": "JavaScript's underlying inheritance mechanism.",
    "why": "To understand how JavaScript inheritance works.",
    "when": "Understanding core JS, performance optimization.",
    "code": "// Every object has a prototype\nconst person = { name: \"Alice\" };\nconsole.log(person.__proto__); // {} (Object.prototype)\n\n// Prototypal inheritance\nconst animal = { eats: true };\nconst dog = { barks: true };\ndog.__proto__ = animal;\nconsole.log(dog.eats); // true\n\n// Modern: Object.create\nconst animalProto = { eats: true };\nconst dog2 = Object.create(animalProto);\ndog2.barks = true;\n\n// Constructor functions\nfunction Person(name) {\n    this.name = name;\n}\nPerson.prototype.greet = function() {\n    return \"Hello, \" + this.name;\n};"
  },
  {
    "id": 32,
    "title": "Classes (ES6)",
    "category": "oop",
    "level": "intermediate",
    "description": "Blueprints for creating objects with shared properties and methods.",
    "why": "To create objects with similar structure and behavior.",
    "when": "When you need multiple similar objects.",
    "code": "class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    greet() {\n        return `Hello, I'm ${this.name}`;\n    }\n\n    static isAdult(age) {\n        return age >= 18;\n    }\n\n    get bio() {\n        return `${this.name} is ${this.age} years old`;\n    }\n\n    set bio(value) {\n        const [name, age] = value.split(\", \");\n        this.name = name;\n        this.age = parseInt(age);\n    }\n}\n\nconst alice = new Person(\"Alice\", 30);\nconsole.log(alice.greet()); // \"Hello, I'm Alice\"\nconsole.log(Person.isAdult(20)); // true\nconsole.log(alice.bio); // \"Alice is 30 years old\""
  },
  {
    "id": 33,
    "title": "Inheritance (extends)",
    "category": "oop",
    "level": "intermediate",
    "description": "A class can inherit properties and methods from another class.",
    "why": "To reuse code and create hierarchical relationships.",
    "when": "When classes share common behavior.",
    "code": "class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    speak() {\n        console.log(`${this.name} makes a sound`);\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name, breed) {\n        super(name); // call parent constructor\n        this.breed = breed;\n    }\n    speak() {\n        console.log(`${this.name} barks!`); // override\n    }\n    getBreed() {\n        return this.breed;\n    }\n}\n\nconst dog = new Dog(\"Rex\", \"German Shepherd\");\ndog.speak(); // \"Rex barks!\""
  },
  {
    "id": 34,
    "title": "Encapsulation (Private Fields)",
    "category": "oop",
    "level": "advanced",
    "description": "Hiding internal state and exposing controlled interfaces.",
    "why": "To protect data and enforce proper usage.",
    "when": "When you need to control access to internal state.",
    "code": "// Private fields (ES2022)\nclass BankAccount {\n    #balance = 0; // private field\n    \n    constructor(initialBalance) {\n        this.#balance = initialBalance;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) this.#balance += amount;\n        return this.#balance;\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n}\n\nconst account = new BankAccount(100);\nconsole.log(account.getBalance()); // 100\n// console.log(account.#balance); // ❌ SyntaxError\n\n// Private methods\nclass MyClass {\n    #privateMethod() {\n        return \"private\";\n    }\n    publicMethod() {\n        return this.#privateMethod();\n    }\n}"
  },
  {
    "id": 35,
    "title": "Polymorphism",
    "category": "oop",
    "level": "intermediate",
    "description": "Different classes can implement the same method differently.",
    "why": "To write code that works with different types.",
    "when": "When you have related classes with different behavior.",
    "code": "class Shape {\n    area() { return 0; }\n}\n\nclass Circle extends Shape {\n    constructor(radius) {\n        super();\n        this.radius = radius;\n    }\n    area() {\n        return Math.PI * this.radius ** 2;\n    }\n}\n\nclass Rectangle extends Shape {\n    constructor(width, height) {\n        super();\n        this.width = width;\n        this.height = height;\n    }\n    area() {\n        return this.width * this.height;\n    }\n}\n\nfunction printArea(shape) {\n    console.log(shape.area()); // Works with any Shape\n}"
  },
  {
    "id": 36,
    "title": "Promises",
    "category": "async",
    "level": "advanced",
    "description": "Objects representing the eventual completion/failure of async operations.",
    "why": "To handle async operations more cleanly than callbacks.",
    "when": "Any async operation (fetch, database queries).",
    "code": "// Creating a Promise\nconst fetchData = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        const success = true;\n        if (success) {\n            resolve(\"Data received!\");\n        } else {\n            reject(\"Error fetching data\");\n        }\n    }, 1000);\n});\n\n// Using a Promise\nfetchData\n    .then(data => console.log(data))\n    .catch(error => console.error(error))\n    .finally(() => console.log(\"Done\"));\n\n// Promise chaining\nfetchUser()\n    .then(user => fetchPosts(user.id))\n    .then(posts => console.log(posts))\n    .catch(err => console.error(err));"
  },
  {
    "id": 37,
    "title": "async/await",
    "category": "async",
    "level": "advanced",
    "description": "Syntactic sugar over Promises for cleaner async code.",
    "why": "To write async code that looks synchronous and readable.",
    "when": "Almost always! Preferred over .then chains.",
    "code": "async function getData() {\n    try {\n        const response = await fetch('https://api.example.com/data');\n        const data = await response.json();\n        console.log(data);\n        return data;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        throw error;\n    }\n}\n\n// Arrow function async\nconst fetchUser = async (id) => {\n    const user = await db.findUser(id);\n    return user;\n};\n\n// Top-level await (ES2022)\nconst data = await fetchData();"
  },
  {
    "id": 38,
    "title": "Promise Methods (all, race, allSettled)",
    "category": "async",
    "level": "advanced",
    "description": "Handling multiple promises together.",
    "why": "To handle multiple async operations efficiently.",
    "when": "Batch operations, parallel requests.",
    "code": "// Promise.all: wait for all to resolve\nconst [user, posts] = await Promise.all([\n    fetchUser(),\n    fetchPosts()\n]);\n\n// Promise.race: first to settle wins\nconst fastResult = await Promise.race([\n    fetchFromAPI1(),\n    fetchFromAPI2()\n]);\n\n// Promise.allSettled: wait for all to finish\nconst results = await Promise.allSettled([\n    fetchData(),\n    fetchData2()\n]);\n\nresults.forEach(result => {\n    if (result.status === \"fulfilled\") {\n        console.log(\"Success:\", result.value);\n    } else {\n        console.log(\"Failed:\", result.reason);\n    }\n});\n\n// Promise.any: first fulfilled (ignores rejections)\nconst result = await Promise.any([api1(), api2()]);"
  },
  {
    "id": 39,
    "title": "Event Loop",
    "category": "advanced",
    "level": "expert",
    "description": "How JavaScript handles async operations despite being single-threaded.",
    "why": "To understand async behavior and order of execution.",
    "when": "Debugging async code, performance optimization.",
    "code": "// Event Loop in action\nconsole.log(\"1: Start\");\n\nsetTimeout(() => {\n    console.log(\"2: Timeout (macrotask)\");\n}, 0);\n\nPromise.resolve().then(() => {\n    console.log(\"3: Promise (microtask)\");\n});\n\nqueueMicrotask(() => {\n    console.log(\"4: Microtask\");\n});\n\nconsole.log(\"5: End\");\n\n// Output: 1, 5, 3, 4, 2\n// Microtasks (Promise) run before macrotasks (setTimeout)"
  },
  {
    "id": 40,
    "title": "Fetch API",
    "category": "async",
    "level": "intermediate",
    "description": "Modern way to make HTTP requests (returns Promises).",
    "why": "To make network requests (API calls).",
    "when": "Almost all web apps that talk to servers.",
    "code": "// GET request\ntry {\n    const response = await fetch('https://api.example.com/users');\n    if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    const users = await response.json();\n    console.log(users);\n} catch (error) {\n    console.error(\"Error:\", error);\n}\n\n// POST request\nconst response = await fetch('https://api.example.com/users', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ name: \"Alice\", age: 30 })\n});\n\n// AbortController (timeout)\nconst controller = new AbortController();\nconst timeout = setTimeout(() => controller.abort(), 5000);\nconst response = await fetch(url, { signal: controller.signal });"
  },
  {
    "id": 41,
    "title": "Error Handling (try/catch/finally)",
    "category": "error",
    "level": "intermediate",
    "description": "Gracefully handle errors without crashing your app.",
    "why": "To prevent crashes and handle errors gracefully.",
    "when": "Async operations, user input, API calls.",
    "code": "// Basic try/catch\ntry {\n    let data = JSON.parse('{\"invalid\": json');\n    console.log(data);\n} catch (error) {\n    console.error(\"Parsing failed:\", error.message);\n} finally {\n    console.log(\"Always runs\");\n}\n\n// Custom errors\nclass ValidationError extends Error {\n    constructor(message, field) {\n        super(message);\n        this.name = \"ValidationError\";\n        this.field = field;\n    }\n}\n\ntry {\n    throw new ValidationError(\"Invalid input\", \"email\");\n} catch (error) {\n    if (error instanceof ValidationError) {\n        console.log(`Error in ${error.field}: ${error.message}`);\n    }\n}\n\n// Global error handler\nwindow.addEventListener('error', (event) => {\n    console.error('Global error:', event.error);\n});"
  },
  {
    "id": 42,
    "title": "Modules (import/export)",
    "category": "modules",
    "level": "intermediate",
    "description": "Organize code into reusable modules.",
    "why": "To organize code, avoid global namespace pollution.",
    "when": "Every JavaScript project!",
    "code": "// math.js (export)\nexport const PI = 3.14159;\nexport function add(a, b) { return a + b; }\nexport default function multiply(a, b) { return a * b; }\n\n// main.js (import)\nimport multiply, { PI, add } from './math.js';\nconsole.log(PI);       // 3.14159\nconsole.log(add(2,3)); // 5\n\n// Import all\nimport * as math from './math.js';\n\n// Dynamic import\nconst module = await import('./module.js');"
  },
  {
    "id": 43,
    "title": "DOM Manipulation",
    "category": "dom",
    "level": "intermediate",
    "description": "Interacting with HTML elements using JavaScript.",
    "why": "To create dynamic, interactive web pages.",
    "when": "Any time you need to update the page based on user interaction or data.",
    "code": "// Selecting elements\nconst element = document.getElementById('myId');\nconst elements = document.querySelectorAll('.myClass');\nconst first = document.querySelector('#myId');\n\n// Creating elements\nconst div = document.createElement('div');\ndiv.textContent = \"Hello\";\ndiv.classList.add('my-class');\ndocument.body.appendChild(div);\n\n// Modifying elements\nelement.innerHTML = \"New content\";\nelement.style.color = 'red';\nelement.setAttribute('data-id', '123');\n\n// Removing elements\nelement.remove();\n// or\nparent.removeChild(child);"
  },
  {
    "id": 44,
    "title": "Events & Event Listeners",
    "category": "dom",
    "level": "intermediate",
    "description": "Handling user interactions and browser events.",
    "why": "To make websites interactive and responsive.",
    "when": "Every time you need to respond to user actions.",
    "code": "// Adding event listener\nelement.addEventListener('click', (event) => {\n    console.log('Clicked!', event.target);\n});\n\n// Event object properties\nelement.addEventListener('click', (e) => {\n    console.log(e.type);        // \"click\"\n    console.log(e.target);      // element clicked\n    console.log(e.clientX, e.clientY); // mouse position\n});\n\n// Common events\nelement.addEventListener('mouseover', () => {});\nelement.addEventListener('keydown', (e) => {\n    console.log(e.key); // pressed key\n});\nelement.addEventListener('submit', (e) => {\n    e.preventDefault(); // prevent form submission\n});\n\n// Removing event listener\nelement.removeEventListener('click', handler);"
  },
  {
    "id": 45,
    "title": "Event Delegation",
    "category": "dom",
    "level": "advanced",
    "description": "Attaching an event listener to a parent element to handle events on its children.",
    "why": "To improve performance and handle dynamic content.",
    "when": "Lists, tables, any dynamic content.",
    "code": "// Without delegation (inefficient)\ndocument.querySelectorAll('li').forEach(item => {\n    item.addEventListener('click', () => {\n        console.log('Item clicked');\n    });\n});\n\n// With delegation (efficient)\ndocument.querySelector('ul').addEventListener('click', (e) => {\n    if (e.target.tagName === 'LI') {\n        console.log('Item clicked:', e.target.textContent);\n    }\n});\n\n// Works with dynamically added elements\n// No need to re-attach listeners!\n\n// Using data attributes\ndocument.addEventListener('click', (e) => {\n    const item = e.target.closest('[data-action]');\n    if (item) {\n        console.log(item.dataset.action);\n    }\n});"
  },
  {
    "id": 46,
    "title": "LocalStorage & SessionStorage",
    "category": "advanced",
    "level": "intermediate",
    "description": "Store data in the browser (key-value storage).",
    "why": "To persist data between sessions and page reloads.",
    "when": "User preferences, themes, auth tokens, caching.",
    "code": "// LocalStorage (persistent)\nlocalStorage.setItem('key', 'value');\nconst value = localStorage.getItem('key');\nlocalStorage.removeItem('key');\nlocalStorage.clear();\n\n// SessionStorage (per tab/session)\nsessionStorage.setItem('key', 'value');\n\n// Storing objects (JSON)\nconst user = { name: \"Alice\", age: 30 };\nlocalStorage.setItem('user', JSON.stringify(user));\nconst stored = JSON.parse(localStorage.getItem('user'));\n\n// Storage events (cross-tab)\nwindow.addEventListener('storage', (e) => {\n    console.log('Storage changed:', e.key, e.newValue);\n});"
  },
  {
    "id": 47,
    "title": "Cookies",
    "category": "advanced",
    "level": "intermediate",
    "description": "Small pieces of data stored by the browser, sent with every request.",
    "why": "To store small amounts of data that need to be sent to the server.",
    "when": "Authentication, user preferences, tracking.",
    "code": "// Setting a cookie\ndocument.cookie = \"username=John; expires=Wed, 1 Jan 2025 00:00:00 UTC; path=/\";\n\n// Reading cookies\nconsole.log(document.cookie); // \"username=John; other=value\"\n\n// Cookie helper functions\nfunction setCookie(name, value, days) {\n    const date = new Date();\n    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));\n    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;\n}\n\nfunction getCookie(name) {\n    const value = `; ${document.cookie}`;\n    const parts = value.split(`; ${name}=`);\n    if (parts.length === 2) return parts.pop().split(';').shift();\n}"
  },
  {
    "id": 48,
    "title": "Recursion",
    "category": "advanced",
    "level": "advanced",
    "description": "A function that calls itself to solve problems.",
    "why": "For problems with recursive structure (trees, nested data).",
    "when": "Tree traversal, complex algorithms.",
    "code": "// Factorial recursion\nfunction factorial(n) {\n    if (n return 1;\n    return n * factorial(n - 1);\n}\nconsole.log(factorial(5)); // 120\n\n// Tree traversal\nfunction walkTree(node) {\n    console.log(node.value);\n    if (node.children) {\n        for (const child of node.children) {\n            walkTree(child);\n        }\n    }\n}\n\n// Fibonacci (with memoization)\nconst cache = {};\nfunction fib(n) {\n    if (n return n;\n    if (cache[n]) return cache[n];\n    cache[n] = fib(n - 1) + fib(n - 2);\n    return cache[n];\n}"
  },
  {
    "id": 49,
    "title": "Memoization",
    "category": "advanced",
    "level": "advanced",
    "description": "Caching function results to optimize performance.",
    "why": "To optimize expensive repeated computations.",
    "when": "Expensive functions with repeated inputs.",
    "code": "function memoize(fn) {\n    const cache = {};\n    return function(...args) {\n        const key = JSON.stringify(args);\n        if (cache[key] !== undefined) {\n            return cache[key];\n        }\n        const result = fn(...args);\n        cache[key] = result;\n        return result;\n    };\n}\n\n// Expensive function\nconst slowFib = memoize(function(n) {\n    if (n return n;\n    return slowFib(n - 1) + slowFib(n - 2);\n});\n\nconsole.log(slowFib(40)); // Fast!\n\n// React useMemo equivalent\nconst memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]);"
  },
  {
    "id": 50,
    "title": "Debouncing & Throttling",
    "category": "advanced",
    "level": "advanced",
    "description": "Techniques to limit the rate of function execution.",
    "why": "To improve performance and user experience.",
    "when": "Search inputs, scroll events, resize events.",
    "code": "// Debounce: wait for pause\nfunction debounce(fn, delay) {\n    let timer;\n    return function(...args) {\n        clearTimeout(timer);\n        timer = setTimeout(() => fn(...args), delay);\n    };\n}\n\n// Throttle: limit to once per interval\nfunction throttle(fn, limit) {\n    let inThrottle = false;\n    return function(...args) {\n        if (!inThrottle) {\n            fn(...args);\n            inThrottle = true;\n            setTimeout(() => inThrottle = false, limit);\n        }\n    };\n}\n\n// Usage\nconst handleSearch = debounce((query) => {\n    console.log(\"Searching:\", query);\n}, 300);\n\n// React useDebounce hook\nconst debouncedValue = useDebounce(searchTerm, 500);"
  },
  {
    "id": 51,
    "title": "Generators (function*)",
    "category": "advanced",
    "level": "expert",
    "description": "Functions that can be paused and resumed, yielding multiple values.",
    "why": "To generate sequences, handle infinite streams.",
    "when": "Custom iterators, lazy evaluation, async streams.",
    "code": "function* countUp(max) {\n    for (let i = 1; i yield i;\n    }\n}\n\nconst counter = countUp(3);\nconsole.log(counter.next()); // { value: 1, done: false }\nconsole.log(counter.next()); // { value: 2, done: false }\nconsole.log(counter.next()); // { value: 3, done: false }\nconsole.log(counter.next()); // { value: undefined, done: true }\n\n// Infinite generator\nfunction* infiniteId() {\n    let id = 1;\n    while (true) {\n        yield id++;\n    }\n}\n\n// Async generators\nasync function* asyncGenerator() {\n    yield await fetchData();\n    yield await fetchMoreData();\n}"
  },
  {
    "id": 52,
    "title": "Symbol",
    "category": "advanced",
    "level": "expert",
    "description": "Unique and immutable primitive values used as object keys.",
    "why": "To create unique property keys.",
    "when": "Creating hidden/metadata properties, avoiding collisions.",
    "code": "// Creating Symbols\nconst sym1 = Symbol(\"id\");\nconst sym2 = Symbol(\"id\");\nconsole.log(sym1 === sym2); // false (always unique)\n\n// As object keys\nconst obj = {\n    [sym1]: \"value1\",\n    name: \"Alice\"\n};\nconsole.log(obj[sym1]); // \"value1\"\n\n// Hidden from iteration\nfor (const key in obj) {\n    console.log(key); // \"name\" (symbol not shown)\n}\n\n// Well-known symbols\nconsole.log(Symbol.iterator); // Symbol(Symbol.iterator)\n// Used for custom iteration\nconst myIterable = {\n    [Symbol.iterator]() {\n        let i = 0;\n        return {\n            next() {\n                return { value: i++, done: i > 3 };\n            }\n        };\n    }\n};"
  },
  {
    "id": 53,
    "title": "Currying",
    "category": "advanced",
    "level": "expert",
    "description": "Transforming a function that takes multiple arguments into a sequence of functions.",
    "why": "For function composition and partial application.",
    "when": "Functional programming, configuration functions.",
    "code": "// Regular function\nfunction add(a, b) { return a + b; }\n\n// Curried version\nfunction curriedAdd(a) {\n    return function(b) {\n        return a + b;\n    };\n}\n\nconst add5 = curriedAdd(5);\nconsole.log(add5(3)); // 8\n\n// Arrow function curry\nconst multiply = a => b => a * b;\nconsole.log(multiply(3)(4)); // 12\n\n// Advanced curry\nfunction curry(fn, arity = fn.length) {\n    return function curried(...args) {\n        if (args.length >= arity) {\n            return fn(...args);\n        }\n        return (...more) => curried(...args, ...more);\n    };\n}\n\nconst curriedSum = curry((a, b, c) => a + b + c);\nconsole.log(curriedSum(1)(2)(3)); // 6"
  },
  {
    "id": 54,
    "title": "Proxy",
    "category": "advanced",
    "level": "expert",
    "description": "Create a proxy for another object to intercept operations.",
    "why": "To intercept and customize operations on objects.",
    "when": "Validation, logging, reactivity, data binding.",
    "code": "// Creating a proxy\nconst target = { message: \"Hello\" };\nconst handler = {\n    get(obj, prop) {\n        if (prop in obj) {\n            return obj[prop];\n        }\n        return \"Property not found\";\n    },\n    set(obj, prop, value) {\n        if (prop === \"age\" && value throw new Error(\"Age cannot be negative\");\n        }\n        obj[prop] = value;\n        return true;\n    }\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.message); // \"Hello\"\nconsole.log(proxy.nonExistent); // \"Property not found\"\nproxy.age = 25; // ✅ works\n// proxy.age = -5; // ❌ Error\n\n// Use cases: validation, logging, reactivity (Vue 3)"
  },
  {
    "id": 55,
    "title": "Reflect",
    "category": "advanced",
    "level": "expert",
    "description": "Built-in object that provides methods for interceptable operations.",
    "why": "To provide a cleaner way to perform object operations.",
    "when": "Working with Proxies, meta-programming.",
    "code": "// Reflect methods\nconst obj = { name: \"Alice\", age: 30 };\n\n// Instead of\nconsole.log(obj.name);\n// Use\nconsole.log(Reflect.get(obj, 'name'));\n\n// Instead of\nobj.age = 31;\n// Use\nReflect.set(obj, 'age', 31);\n\n// Instead of\nif ('age' in obj) {}\n// Use\nif (Reflect.has(obj, 'age')) {}\n\n// Proxy with Reflect\nconst proxy = new Proxy(obj, {\n    get(target, prop, receiver) {\n        console.log(`Getting ${String(prop)}`);\n        return Reflect.get(target, prop, receiver);\n    },\n    set(target, prop, value, receiver) {\n        console.log(`Setting ${String(prop)} to ${value}`);\n        return Reflect.set(target, prop, value, receiver);\n    }\n});"
  },
  {
    "id": 56,
    "title": "BigInt",
    "category": "advanced",
    "level": "advanced",
    "description": "For numbers larger than 2^53 - 1.",
    "why": "To safely handle very large integers.",
    "when": "Database IDs, timestamps, crypto operations.",
    "code": "// Creating BigInt\nconst bigNum = 9007199254740991n; // n suffix\nconst bigNum2 = BigInt(9007199254740991);\n\n// Operations\nconst result = bigNum + 1n;\nconsole.log(result); // 9007199254740992n\n\n// Comparison\nconsole.log(10n === 10); // false (different types)\nconsole.log(10n == 10);  // true\n\n// Cannot mix with regular numbers\n// const sum = 10n + 5; // ❌ TypeError\n\n// Use cases\n// - Database IDs, timestamps, crypto"
  },
  {
    "id": 57,
    "title": "Web Workers",
    "category": "advanced",
    "level": "expert",
    "description": "Run JavaScript in background threads.",
    "why": "To run CPU-intensive tasks without blocking the UI.",
    "when": "Heavy computations, image processing, large data processing.",
    "code": "// main.js\nconst worker = new Worker('worker.js');\n\nworker.postMessage({ data: \"Hello\" });\n\nworker.onmessage = (e) => {\n    console.log('Received:', e.data);\n};\n\nworker.onerror = (error) => {\n    console.error('Worker error:', error);\n};\n\n// worker.js\nself.onmessage = (e) => {\n    console.log('Worker received:', e.data);\n    // Do heavy computation\n    const result = heavyCalculation(e.data);\n    self.postMessage(result);\n};\n\n// Terminate\nworker.terminate();"
  },
  {
    "id": 58,
    "title": "Service Workers",
    "category": "advanced",
    "level": "expert",
    "description": "Network proxy that enables offline experiences.",
    "why": "To enable offline support and improve performance.",
    "when": "PWAs, offline-first apps, caching assets.",
    "code": "// Register service worker\nif ('serviceWorker' in navigator) {\n    navigator.serviceWorker.register('/sw.js')\n        .then(reg => console.log('SW registered'))\n        .catch(err => console.error('SW failed:', err));\n}\n\n// sw.js\nself.addEventListener('install', (event) => {\n    event.waitUntil(\n        caches.open('v1').then(cache => {\n            return cache.addAll([\n                '/',\n                '/styles.css',\n                '/script.js'\n            ]);\n        })\n    );\n});\n\nself.addEventListener('fetch', (event) => {\n    event.respondWith(\n        caches.match(event.request)\n            .then(response => response || fetch(event.request))\n    );\n});"
  },
  {
    "id": 59,
    "title": "Intersection Observer",
    "category": "advanced",
    "level": "advanced",
    "description": "Observe when elements enter/exit the viewport.",
    "why": "To improve performance and implement lazy loading.",
    "when": "Lazy loading images, infinite scroll, analytics.",
    "code": "// Lazy loading images\nconst observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n        if (entry.isIntersecting) {\n            const img = entry.target;\n            img.src = img.dataset.src;\n            observer.unobserve(img);\n        }\n    });\n});\n\ndocument.querySelectorAll('img[data-src]').forEach(img => {\n    observer.observe(img);\n});\n\n// Infinite scrolling\nconst sentinel = document.querySelector('#sentinel');\nconst loadMore = new IntersectionObserver((entries) => {\n    if (entries[0].isIntersecting) {\n        fetchMoreData();\n    }\n});\nloadMore.observe(sentinel);"
  },
  {
    "id": 60,
    "title": "Mutation Observer",
    "category": "advanced",
    "level": "expert",
    "description": "Observe changes to the DOM.",
    "why": "To respond to DOM changes.",
    "when": "Auto-save, analytics, DOM change detection.",
    "code": "// Watch for DOM changes\nconst observer = new MutationObserver((mutations) => {\n    mutations.forEach(mutation => {\n        if (mutation.type === 'childList') {\n            console.log('Nodes added/removed', mutation.addedNodes);\n        }\n        if (mutation.type === 'attributes') {\n            console.log(`Attribute ${mutation.attributeName} changed`);\n        }\n    });\n});\n\nobserver.observe(document.body, {\n    childList: true,\n    attributes: true,\n    subtree: true\n});\n\n// Disconnect\nobserver.disconnect();\n\n// Use cases: auto-save, DOM change tracking"
  },
  {
    "id": 61,
    "title": "Resize Observer",
    "category": "advanced",
    "level": "advanced",
    "description": "Observe when an element's size changes.",
    "why": "To respond to element size changes.",
    "when": "Responsive design, charts, dynamic layouts.",
    "code": "// Watch element resizing\nconst observer = new ResizeObserver(entries => {\n    entries.forEach(entry => {\n        const { width, height } = entry.contentRect;\n        console.log(`Size: ${width} x ${height}`);\n        \n        // Adjust layout\n        if (width 'mobile');\n        } else {\n            entry.target.classList.remove('mobile');\n        }\n    });\n});\n\nobserver.observe(document.querySelector('.container'));\n\n// Better than window.resize (specific elements)"
  },
  {
    "id": 62,
    "title": "Performance API",
    "category": "advanced",
    "level": "expert",
    "description": "Measure and analyze application performance.",
    "why": "To measure and optimize performance.",
    "when": "Performance optimization, debugging slow code.",
    "code": "// Measuring performance\nperformance.mark('start');\n// ... do something ...\nperformance.mark('end');\nperformance.measure('myOperation', 'start', 'end');\n\nconst measure = performance.getEntriesByName('myOperation')[0];\nconsole.log(`Time: ${measure.duration}ms`);\n\n// Navigation timing\nconst nav = performance.getEntriesByType('navigation')[0];\nconsole.log(`Page load: ${nav.loadEventEnd - nav.startTime}ms`);\n\n// Resource timing\nperformance.getEntriesByType('resource').forEach(resource => {\n    console.log(resource.name, resource.duration);\n});"
  },
  {
    "id": 63,
    "title": "Design Patterns",
    "category": "advanced",
    "level": "expert",
    "description": "Common solutions to recurring problems.",
    "why": "To solve common problems in a structured way.",
    "when": "Building large applications, creating reusable code.",
    "code": "// Singleton pattern\nconst Singleton = (function() {\n    let instance;\n    function createInstance() {\n        return { name: \"Singleton\" };\n    }\n    return {\n        getInstance: function() {\n            if (!instance) instance = createInstance();\n            return instance;\n        }\n    };\n})();\n\n// Factory pattern\nclass UserFactory {\n    createUser(type) {\n        switch (type) {\n            case 'admin': return new Admin();\n            case 'user': return new RegularUser();\n            default: return new Guest();\n        }\n    }\n}\n\n// Observer pattern (Event Emitter)\nclass EventEmitter {\n    constructor() {\n        this.events = {};\n    }\n    on(event, listener) {\n        if (!this.events[event]) this.events[event] = [];\n        this.events[event].push(listener);\n    }\n    emit(event, data) {\n        if (this.events[event]) {\n            this.events[event].forEach(fn => fn(data));\n        }\n    }\n}"
  },
  {
    "id": 64,
    "title": "Clean Code Principles",
    "category": "advanced",
    "level": "expert",
    "description": "Writing readable, maintainable code.",
    "why": "To make code easier to understand, maintain, and debug.",
    "when": "Every line of code you write!",
    "code": "// ❌ Bad\nfunction p(a, b) {\n    let c = a + b;\n    return c;\n}\n\n// ✅ Good\nfunction calculateTotal(price, tax) {\n    const total = price + tax;\n    return total;\n}\n\n// ❌ Bad\nif (user && user.profile && user.profile.address) {\n    // ...\n}\n\n// ✅ Good (Optional Chaining)\nif (user?.profile?.address) {\n    // ...\n}\n\n// ❌ Bad\nclass UserDataHandler {\n    // ... 500 lines ...\n}\n\n// ✅ Good (Single Responsibility)\nclass UserRepository { /* data access */ }\nclass UserValidator { /* validation */ }\nclass UserFormatter { /* formatting */ }\n\n// DRY - Don't Repeat Yourself\n// KISS - Keep It Simple, Stupid\n// YAGNI - You Aren't Gonna Need It"
  },
  {
    "id": 65,
    "title": "Testing (Jest, Mocha, etc.)",
    "category": "advanced",
    "level": "expert",
    "description": "Testing your code to ensure it works correctly.",
    "why": "To catch bugs early and ensure code works as expected.",
    "when": "Every serious project! Unit tests, integration tests.",
    "code": "// Jest example\nfunction add(a, b) {\n    return a + b;\n}\n\ntest('adds 1 + 2 to equal 3', () => {\n    expect(add(1, 2)).toBe(3);\n});\n\ntest('adds negative numbers', () => {\n    expect(add(-1, -2)).toBe(-3);\n});\n\n// Async test\ntest('fetches user data', async () => {\n    const user = await fetchUser(1);\n    expect(user.name).toBe('Alice');\n});\n\n// Mocking\njest.mock('./api');\nconst mockFetch = jest.fn(() => Promise.resolve({ data: 'mocked' }));"
  }
];
