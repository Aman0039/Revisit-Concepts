# 🎯 CSS Quick Revision Notes (Project Oriented)

## 1️⃣ What is CSS?

CSS (Cascading Style Sheets) is used to style HTML elements (layout,
colors, spacing, fonts, responsiveness).

------------------------------------------------------------------------

## 🧱 Basic Syntax

``` css
selector {
  property: value;
}
```

------------------------------------------------------------------------

## 🎯 Selectors

``` css
* { margin: 0; }            /* Universal */
p { color: red; }           /* Element */
.box { background: yellow;} /* Class */
#header { height: 100px;}   /* ID */
h1, h2 { font-family: Arial;} /* Group */
div p { color: green;}      /* Descendant */
div > p { color: blue;}     /* Child */
input[type="text"] { border: 1px solid black;} /* Attribute */
```

------------------------------------------------------------------------

## 📦 Box Model

Content → Padding → Border → Margin

``` css
box-sizing: border-box;
```

------------------------------------------------------------------------

## 📏 Units

px, %, em, rem, vh, vw

------------------------------------------------------------------------

## 🎨 Colors

``` css
color: red;
color: #ff0000;
color: rgb(255,0,0);
color: rgba(255,0,0,0.5);
```

------------------------------------------------------------------------

## 🖋 Typography

``` css
font-size: 16px;
font-weight: bold;
font-family: Arial, sans-serif;
line-height: 1.5;
text-align: center;
text-decoration: none;
```

------------------------------------------------------------------------

## 📍 Display

block, inline, inline-block, none, flex, grid

------------------------------------------------------------------------

## 📐 Position

static, relative, absolute, fixed, sticky

``` css
top: 10px;
left: 0;
z-index: 10;
```

------------------------------------------------------------------------

## 🔄 Flexbox

``` css
display: flex;
flex-direction: row | column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
```

------------------------------------------------------------------------

## 🧩 Grid

``` css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
```

------------------------------------------------------------------------

## 📱 Responsive

``` css
@media (max-width: 768px) {
  .container { flex-direction: column; }
}
```

------------------------------------------------------------------------

## 🎬 Transitions

``` css
transition: all 0.3s ease;
```

------------------------------------------------------------------------

## 🎥 Transform

``` css
transform: scale(1.1);
transform: rotate(45deg);
transform: translateX(50px);
```

------------------------------------------------------------------------

## ✨ Pseudo Classes

``` css
a:hover { color: red; }
input:focus { border: blue; }
li:first-child { color: green; }
```

------------------------------------------------------------------------

## 🧬 Pseudo Elements

``` css
p::before { content: "Hi "; }
p::after { content: "!"; }
```

------------------------------------------------------------------------

## 🧱 Overflow

hidden, scroll, auto

------------------------------------------------------------------------

## 🧮 Specificity

Inline \> ID \> Class \> Element

``` css
color: red !important; /* Avoid unless necessary */
```

------------------------------------------------------------------------

## 🛠 Reset CSS

``` css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

------------------------------------------------------------------------

## 🚀 Shorthand

``` css
margin: 10px 20px;
padding: 10px 15px;
border: 1px solid black;
background: red url(img.png) no-repeat center;
```

------------------------------------------------------------------------

## 🧠 Checklist

-   Box Model
-   Flexbox
-   Grid
-   Position
-   Media Queries
-   Specificity
-   Transitions
-   Units
-   Display types
