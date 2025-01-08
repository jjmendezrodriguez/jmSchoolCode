// learn how to use the fetch API to make a request to an API

// fetch API
fetch("https://dog.ceo/api/breeds/image/random")
  // inside the () is the URL of the API or the endpoint of the API
  .then((response) => response.json())
  /* this returns a promise that resolves with the result of parsing the body text as JSON
    esto devuelve un json con la respuesta de la API */
  .then((data) => console.log(data));
/*  this is the data that we get from the API
imprime en consola la respuesta de la API
usamos (data) para ver la respuesta de la API otras opciones son (response) o (res)
response.text() - para ver el texto de la respuesta
response.blob() - para ver la respuesta como un blob
response.arrayBuffer() - para ver la respuesta como un ArrayBuffer
response.formData() - para ver la respuesta como un FormData object */

// for displaying the image in html:
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    const img = document.createElement("img");
    img.src = data.message;
    document.body.appendChild(img);
  });

/* this is a simple API that gives you a random activity to do when you're bored
fetch the API and display the activity in the browser. */
fetch("https://apis.scrimba.com/bored/api/activity")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("msg").innerHTML = `
          <h1 id="msg">"${data.activity}"</h1>
      `;
  });
/* use .innerHTML makes the text appear in the browser can also use textContent.
document.getElementById("activity").textContent = data.activity;
el uso de innerHTML es más común para insertar texto en el html */

document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("title").textContent = "🦾 HappyBot🦿";
      document.body.classList.add("fun");
      /* the syntax for this line is document.body.classList.add("class-name")
      using .body to select the body element and .classList.add to add a class to it.
      donde tengo body puedo poner cualquier elemento del html, esto es para agregar
      una clase a cualquier elemento del html. 
      
      Si usamos .querySelector() podemos
      seleccionar cualquier elemento también su syntax seria:
      document.querySelector("element").classList.add("class-name") */
    });
});
