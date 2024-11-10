const wrapper = document.querySelector(".wrap");
const button = document.querySelector("button");

function createUsers(value) {
  return `<div class="card">
            <h3>name: ${value.name}</h3>
            <h3>email: ${value.email}</h3>
            <h3>phone: ${value.phone}</h3>
            <h3>website: ${value.website}</h3>
          </div>`;
}

button &&
  button >
    addEventListener("click", function () {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      })
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          }
          if (response.status == 404) {
            throw new Error("API ga notogri murojat qilindi");
          }
        })
        .then((data) => {
          data.forEach((element) => {
            let card = createUsers(element);
            wrapper.innerHTML += card;
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("API ga murojat tugadi");
        });
    });
