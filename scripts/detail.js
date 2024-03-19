const params = new URLSearchParams(window.location.search);

const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();

  const product = data.menu.find((item) => item.id == paramId);

  renderPage(product);
});

const outlet = document.getElementById("outlet");

function renderPage(product) {
  outlet.innerHTML = `
      <!-- UPPER PART -->
      <div class="d-flex justify-content-between fs-5">
        <a href="/">
          <img width="40px" src="/images/home.png" />
        </a>

        <p>main menu / ${product.category} / ${product.title.toLowerCase()}</p>
      </div>

      <!-- CONTENT PART -->
      <h1 class="text-center my-3">${product.title}</h1>

      <img
        src="${product.img}"
        class="rounded object-fit-cover shadow"
        alt="oreo"
      />

      <h3 class="mt-4">
        <span>Category:</span>
        <span class="text-success">${product.category}</span>
      </h3>

      <h3 class="mt-4">
        <span>Price:</span>
        <span class="text-success">${(product.price * 1).toFixed(2)}$</span>
      </h3>

      <p class="lead">
        ${product.desc}
      </p>    
    `;
}
