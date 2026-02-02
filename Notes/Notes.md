# JavaScript Interview Questions

---

## var , let and const

---

## 🔹 `var`

### Hoisting
- Variables declared with `var` are **hoisted**, which means you can access the variable **before its declaration**  
  (it will be `undefined`, not an error).

### Function Scope
- `var` is **function-scoped**
  - It is accessible anywhere inside the function where it is declared
  - It is **not block-scoped**, so it ignores `{}` blocks like `if`, `for`, etc.

### Re-declaration & Re-initialization
Variables declared with `var` can be:
- Re-declared
- Re-initialized  

Without throwing any error.

---

### 💡 Interview Answer
Due to **hoisting**, **re-declaration**, and **re-initialization**, variables declared with `var` do **not throw errors**, but they can lead to **unexpected and hard-to-debug behavior**.

That’s why **`let` and `const` were introduced in ES6** to provide better scoping and safer variable handling.  

As a result, **`var` is not preferred in modern JavaScript development**.

---

## 🔹 `let`

### Hoisting
- Variables declared with `Let` are **also hoisted but It is Inside the TDZ**
- That means you can not access the variable **before its declaration**
- It will **through refrence error**

---

### Important

#### Var and Let both are hoisted but var is stored in Global Scope and Let is Stored Inside the Script.

- Script is known as Seperate Memory Object  
  (You can se inside the source using debugger tool)

- You can access `let` variables only once it is Intialize with some value

---

### TDZ (Important)

- Time since when the let variables are hoisted until it is Initialized with some value  
  means the time between declaration to Initialization is called **Temporal Dead Zone**

- Basically when you declare variable using `let` then it stored inside the Script memory as `<Value Unavailable>`  
  we can also say that Undefined  

- But when you try to access it before the declaration then from `M ----> E`  
  means when the time from Memory to Execution phase then it is inside `Temporal Dead Zone`  
  that's why it through `Reference Error`

- But if we only declare the `let` varible without initializer and after that we try to access the value  
  then output will be `Undefined`

---

### Block Scope
- `Let` is **block-scoped**
  - It is accessible only inside the block where it is declared
  - If you declare it inside a block `{}` eg. `if-else`, `loops`  
    and try to access outside then it will through `Reference Error`

---

### Re-initialization
Variables declared with `let` can be:
- Re-initialized only
- It does not allow the Re-declaration

---

## 🔹 `const`

### Hoisting
- Variables declared with `const` **are hoisted**, but **not initialized**
- They exist in the **Temporal Dead Zone (TDZ)** from the start of the scope until the declaration is executed
- Accessing a `const` variable **before its declaration** results in a **`ReferenceError`**

---

### Block Scope
- `const` is **block-scoped**
- It is accessible **only within the block `{}`** where it is declared
- If a `const` variable is declared inside a block (e.g., `if-else`, `loops`)  
  and accessed outside that block, it will throw a **`ReferenceError`**

---

### Re-declaration & Re-initialization
Variables declared with `const`:
- ❌ Cannot be re-declared
- ❌ Cannot be re-initialized

---

### Mandatory Initialization
- A `const` variable **must be initialized at the time of declaration**
- Declaring a `const` variable without assigning a value results in a **`SyntaxError`**

---

## ❓ If `const` doesn’t allow variables to change, how can we modify objects or arrays?

- Arrays and objects are **non-primitive data types**
- They are stored as **references**, while the actual data is stored in the **heap memory**
- Modifying an object or array changes the **value at the same reference**, not the reference itself
- `const` **prevents reassignment of the reference**, but **allows modification of the data inside** the object or array
- Re-initialization is not allowed because it would require changing the reference, which `const` does not permit

---

## Object and Methods

### 🔹 What is an Object?
- An **object** in JavaScript is a collection of **key–value pairs**
- Keys are also called **properties**, and values can be:
  - Primitive values (number, string, boolean, etc.)
  - Arrays
  - Other objects
  - Functions

---

### 🔹 What is an Object Method?
- When a **function is stored as a value inside an object**, it is called an **object method**
- Object methods define the **behavior** of the object

✅ Correct statement:
> A function inside an object is called an **object method**

---

### 🔹 Example
```js
const user = {
  name: "Aman",
  age: 22,
  greet: function () {
    return "Hello!";
  }
};

user.greet();       // Hello!
user["greet"]();   // Hello!
