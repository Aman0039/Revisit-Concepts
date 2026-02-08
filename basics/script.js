// function addTodo(){
//     let todoInput = document.getElementById('todoInput').value
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || []
//     tasks.push(todoInput)
//     localStorage.setItem('tasks',JSON.stringify(tasks));

//     displayData()
// }

// function displayData(){
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     let todoList
// }











// const products = document.getElementById("products-list") 
// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(data =>{
//     data.forEach(element => {
//    const list = document.createElement('li')
//    list.textContent = `${element.title} - ${element.price}`;
//    products.appendChild(list)
//   });
// })

// .catch(error => {
//   console.log("Error fetching Products :" , error);
// })



  // const productsList = document.getElementById("products-list");

  // fetch('https://fakestoreapi.com/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     data.forEach(product => {
  //       const li = document.createElement('li');
  //       li.textContent = `${product.title} - ${product.price}`;
  //       productsList.appendChild(li);
  //     });
  //   })
  //   .catch(error => {
  //     console.error("Error fetching products:", error);
  //   });


// let id = prompt('Enter UserId Here..')
// fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
// .then((res) => res.json())
// .then((data)=> console.log(data))


//   const container = document.getElementById('container');

//   // Create a new paragraph element
//   const newParagraph = document.createElement('p');

//   // Add text content to the new paragraph
//   newParagraph.textContent = "This is a dynamically created paragraph.";

//   // Append the paragraph to the container
//   container.appendChild(newParagraph);

//   // appending products list

// const products = document.getElementById("product-lists") 
// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(data =>{
//     data.forEach(element => {
//    const list = document.createElement('li')
//    list.textContent = `${ele} -`;
//    products.appendChild(list)
//   });
// })



const products = fetch("https://fakestoreapi.com/products")

const data = products.then((res)=>res.json())
.then((data)=> console.log(data.filter(product => product.price < 30)))