# JavaScript Interview Questions

---

## var , let and const

### 🔹 `Var`

- **Hoisting**  
  Variables declared with `var` are **hoisted**, which means you can access the variable **before its declaration** (it will be `undefined`, not an error).

- **Function Scope**  
  `var` is **function-scoped**.  
  - It is accessible anywhere inside the function where it is declared.
  - It is **not block-scoped**, so it ignores `{}` blocks like `if`, `for`, etc.

- **Re-declaration & Re-initialization**  
  Variables declared with `var` can be:
  - Re-declared
  - Re-initialized  
  without throwing any error.

---

### 💡 Interview Answer

Due to **hoisting**, **re-declaration**, and **re-initialization**, variables declared with `var` do **not throw errors**, but they can lead to **unexpected and hard-to-debug behavior**.

That’s why **`let` and `const` were introduced in ES6** to provide better scoping and safer variable handling.  
As a result, **`var` is not preferred in modern JavaScript development**.


### 🔹 `Let`

- **Hoisting**  
  Variables declared with `Let` are **also hoisted but It is Inside the TDZ**, that means you can not access the variable **before its declaration** (it will be `through refrence error`).

**Important**

  ### Var and Let both are hoisted but var is stored in Global Scope and Let is Stored Inside the Script.

  - Script is known as Seperate Memory Object. (You can se inside the source using debugger tool).

  - You can access `let` variables only once it is Intialize with some value.

  **TDZ** (Important)

  - Time since when the let variables are hoisted until it is Initialized with some value ,means the time between declaration to Initialization is called `Temporal Dead Zone`


  - Basically When you declare variable using `let` then it stored inside the Script memory as `<Value Unavailable>` we can also say that Undefined but when you try to access it before the declaration then from `M ----> E` means when the time from Memory to Execution phase then it is inside `Temporal Dead Zone` that's why it through `Reference Error`.

  - But if we only declare the `let` varible without initializer and after that we try to access the value then output will be `Undefined`


- **Block Scope**
 `Let` is **block-scoped**.  
  - It is accessible only inside the block where it is declared.
  - If you declare it inside a block `{}` eg. `if-else` , `loops` and try to access outside then it will through `Reference Error`.

- **Re-initialization**
  Variables declared with `let` can be:
  - Re-initialized  only
  - It does not allow the Re-declaration.

## Const