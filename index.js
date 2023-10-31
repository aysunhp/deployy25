let container = document.querySelector(".container");
let allProducts = document.querySelector("#all-products");
let man = document.querySelector("#man");
let woman = document.querySelector("#woman");
let accessories = document.querySelector("#accs");
let electronics = document.querySelector("#electronics");
let cardContainer = document.querySelector(".container");
let lowPrice = document.querySelector("#price-low");
let highPrice = document.querySelector("#price-high");
let lowRate = document.querySelector("#rate-low");
let highRate = document.querySelector("#rate-high");
let filter = document.querySelector("#filter");

let arr = [];

let url = "https://fakestoreapi.com/products";
fetch(url).then((res) => res.json()).then((data) => {
  console.log(data);


  data.forEach((item) => {
    cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn  btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping "
                name=${item.id}
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
  })

  // filter
  filter.addEventListener("click", function () {
    let selectedValue = filter.value;
    data.forEach((item) => {

      if (selectedValue === "high-rate") {
        data.sort((a, b) => b.rating.rate - a.rating.rate);
        cardContainer.innerHTML = ""
        data.forEach((item) => {
          cardContainer.innerHTML += ` <div
    class="card"
    style="
    min-height:750px;
      width: 18rem;
      border-radius: 15px;
      background-color: rgba(235, 233, 234, 0.922);
    "
  >
    <img
      src="${item.image}"
      style="width: 286px; height: 400px; overflow: hidden"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body" style="position: relative">
      <h5 class="card-title">${item.title}</h5>
      <p>
        Price:
        <span style="color: blue; font-weight: bold">${item.price}</span>
      </p>
      <p class="rating">
        Rating:
        <span style="color: rgb(158, 0, 0); font-weight: bold">
          ${item.rating?.rate}</span
        >
      </p>
      <p class="card-text" style="position:relative;">
        Left stock:
        <span style="color: rgb(0, 158, 16); font-weight: bold"
          >${item.rating?.count}</span
        >
      </p>
      <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
        <div
          class="btn  btn-outline-primary mt-4"
          style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
        >
          <i
            class="fa-solid basketBtn fa-basket-shopping "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
        <div
          class="btn favBtn btn-outline-danger mt-4"
          style="width: 70px; height: 50px; margin-left:45px;"
        >
          <i
            class="fa-solid fa-heart "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
      </div>
    </div>
  </div>`;


        })
        // adding to basket  function
        addBasket()
        // adding product to favourites
        addFavourites()
        // card alert
        gettingCardInfo()
        // filter function

      } else if (selectedValue === "low-rate") {
        data.sort((a, b) => a.rating.rate - b.rating.rate);
        cardContainer.innerHTML = ""
        data.forEach((item) => {

          cardContainer.innerHTML += ` <div
    class="card"
    style="
    min-height:750px;
      width: 18rem;
      border-radius: 15px;
      background-color: rgba(235, 233, 234, 0.922);
    "
  >
    <img
      src="${item.image}"
      style="width: 286px; height: 400px; overflow: hidden"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body" style="position: relative">
      <h5 class="card-title">${item.title}</h5>
      <p>
        Price:
        <span style="color: blue; font-weight: bold">${item.price}</span>
      </p>
      <p class="rating">
        Rating:
        <span style="color: rgb(158, 0, 0); font-weight: bold">
          ${item.rating?.rate}</span
        >
      </p>
      <p class="card-text" style="position:relative;">
        Left stock:
        <span style="color: rgb(0, 158, 16); font-weight: bold"
          >${item.rating?.count}</span
        >
      </p>
      <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
        <div
          class="btn  btn-outline-primary mt-4"
          style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
        >
          <i
            class="fa-solid basketBtn fa-basket-shopping "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
        <div
          class="btn favBtn btn-outline-danger mt-4"
          style="width: 70px; height: 50px; margin-left:45px;"
        >
          <i
            class="fa-solid fa-heart "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
      </div>
    </div>
  </div>`;


        })
        // adding to basket  function
        addBasket()
        // adding product to favourites
        addFavourites()
        // card alert
        gettingCardInfo()
        // filter function
      } else if (selectedValue === "high-price") {
        data.sort((a, b) => b.price - a.price);
        cardContainer.innerHTML = ""
        data.forEach((item) => {

          cardContainer.innerHTML += ` <div
    class="card"
    style="
    min-height:750px;
      width: 18rem;
      border-radius: 15px;
      background-color: rgba(235, 233, 234, 0.922);
    "
  >
    <img
      src="${item.image}"
      style="width: 286px; height: 400px; overflow: hidden"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body" style="position: relative">
      <h5 class="card-title">${item.title}</h5>
      <p>
        Price:
        <span style="color: blue; font-weight: bold">${item.price}</span>
      </p>
      <p class="rating">
        Rating:
        <span style="color: rgb(158, 0, 0); font-weight: bold">
          ${item.rating?.rate}</span
        >
      </p>
      <p class="card-text" style="position:relative;">
        Left stock:
        <span style="color: rgb(0, 158, 16); font-weight: bold"
          >${item.rating?.count}</span
        >
      </p>
      <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
        <div
          class="btn  btn-outline-primary mt-4"
          style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
        >
          <i
            class="fa-solid basketBtn fa-basket-shopping "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
        <div
          class="btn favBtn btn-outline-danger mt-4"
          style="width: 70px; height: 50px; margin-left:45px;"
        >
          <i
            class="fa-solid fa-heart "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
      </div>
    </div>
  </div>`;

        })
        // adding to basket  function
        addBasket()
        // adding product to favourites
        addFavourites()
        // card alert
        gettingCardInfo()
        // filter function
      } else {
        data.sort((a, b) => a.price - b.price);
        cardContainer.innerHTML = "";
        data.forEach((item) => {
          cardContainer.innerHTML += ` <div
    class="card"
    style="
    min-height:750px;
      width: 18rem;
      border-radius: 15px;
      background-color: rgba(235, 233, 234, 0.922);
    "
  >
    <img
      src="${item.image}"
      style="width: 286px; height: 400px; overflow: hidden"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body" style="position: relative">
      <h5 class="card-title">${item.title}</h5>
      <p>
        Price:
        <span style="color: blue; font-weight: bold">${item.price}</span>
      </p>
      <p class="rating">
        Rating:
        <span style="color: rgb(158, 0, 0); font-weight: bold">
          ${item.rating?.rate}</span
        >
      </p>
      <p class="card-text" style="position:relative;">
        Left stock:
        <span style="color: rgb(0, 158, 16); font-weight: bold"
          >${item.rating?.count}</span
        >
      </p>
      <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
        <div
          class="btn  btn-outline-primary mt-4"
          style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
        >
          <i
            class="fa-solid basketBtn fa-basket-shopping "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
        <div
          class="btn favBtn btn-outline-danger mt-4"
          style="width: 70px; height: 50px; margin-left:45px;"
        >
          <i
            class="fa-solid fa-heart "
            name="${item.id}"
            style="font-size: 30px"
          ></i>
        </div>
      </div>
    </div>
  </div>`;
        })
        // adding to basket  function
        addBasket()
        // adding product to favourites
        addFavourites()
        // card alert
        gettingCardInfo()
        // filter function
      }

    })


  })

  // adding to basket  function
  addBasket()
  // adding product to favourites
  addFavourites()
  // card alert
  gettingCardInfo()

  // man section

  man.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: `You moved to Men's clothing section`,
    })
    cardContainer.innerHTML = "";
    data.forEach((item) => {
      if (item.category == "men's clothing") {
        cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn  btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
      }

    })
    // adding to basket  function
    addBasket()
    // adding product to favourites
    addFavourites()
    // card alert
    gettingCardInfo()
    // filter function

    filter.addEventListener("click", function () {
      let selectedValue = filter.value;
      data.forEach((item) => {

        if (selectedValue === "high-rate") {
          data.sort((a, b) => b.rating.rate - a.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "men's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function

        } else if (selectedValue === "low-rate") {
          data.sort((a, b) => a.rating.rate - b.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "men's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else if (selectedValue === "high-price") {
          data.sort((a, b) => b.price - a.price);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "men's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else {
          data.sort((a, b) => a.price - b.price);
          cardContainer.innerHTML = "";
          data.forEach((item) => {
            if (item.category === "men's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        }

      })


    })

  })


  //  woman section

  woman.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: `You moved to Women's clothing section`,
    })
    cardContainer.innerHTML = "";
    data.forEach((item) => {
      if (item.category == "women's clothing") {
        cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn  btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
      }

    })
    // adding to basket  function
    addBasket()
    // adding product to favourites
    addFavourites()
    // card alert
    gettingCardInfo()
    // filter function

    filter.addEventListener("click", function () {
      let selectedValue = filter.value;
      data.forEach((item) => {

        if (selectedValue === "high-rate") {
          data.sort((a, b) => b.rating.rate - a.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "women's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function

        } else if (selectedValue === "low-rate") {
          data.sort((a, b) => a.rating.rate - b.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "women's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else if (selectedValue === "high-price") {
          data.sort((a, b) => b.price - a.price);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "women's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else {
          data.sort((a, b) => a.price - b.price);
          cardContainer.innerHTML = "";
          data.forEach((item) => {
            if (item.category === "women's clothing") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid  basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        }

      })


    })
  })


  // jewelery section

  accessories.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: `You moved to Jewelery section`,
    })
    cardContainer.innerHTML = "";
    data.forEach((item) => {
      if (item.category == "jewelery") {
        cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn  btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping basketBtn"
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
      }

    })
    // adding to basket  function
    addBasket()
    // adding product to favourites
    addFavourites()
    // card alert
    gettingCardInfo()
    // filter function

    filter.addEventListener("click", function () {
      let selectedValue = filter.value;
      data.forEach((item) => {

        if (selectedValue === "high-rate") {
          data.sort((a, b) => b.rating.rate - a.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "jewelery") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function

        } else if (selectedValue === "low-rate") {
          data.sort((a, b) => a.rating.rate - b.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "jewelery") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else if (selectedValue === "high-price") {
          data.sort((a, b) => b.price - a.price);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "jewelery") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn  btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else {
          data.sort((a, b) => a.price - b.price);
          cardContainer.innerHTML = "";
          data.forEach((item) => {
            if (item.category === "jewelery") {
              cardContainer.innerHTML += ` <div
      class="card"
      style="
      min-height:750px;
        width: 18rem;
        border-radius: 15px;
        background-color: rgba(235, 233, 234, 0.922);
      "
    >
      <img
        src="${item.image}"
        style="width: 286px; height: 400px; overflow: hidden"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="position: relative">
        <h5 class="card-title">${item.title}</h5>
        <p>
          Price:
          <span style="color: blue; font-weight: bold">${item.price}</span>
        </p>
        <p class="rating">
          Rating:
          <span style="color: rgb(158, 0, 0); font-weight: bold">
            ${item.rating?.rate}</span
          >
        </p>
        <p class="card-text" style="position:relative;">
          Left stock:
          <span style="color: rgb(0, 158, 16); font-weight: bold"
            >${item.rating?.count}</span
          >
        </p>
        <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
          <div
            class="btn btn-outline-primary mt-4"
            style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
          >
            <i
              class="fa-solid basketBtn  fa-basket-shopping "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
          <div
            class="btn favBtn btn-outline-danger mt-4"
            style="width: 70px; height: 50px; margin-left:45px;"
          >
            <i
              class="fa-solid fa-heart "
              name="${item.id}"
              style="font-size: 30px"
            ></i>
          </div>
        </div>
      </div>
    </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        }

      })


    })
  })


  // electronics section

  electronics.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: `You moved to Electronics section`,
    })
    cardContainer.innerHTML = "";
    data.forEach((item) => {
      if (item.category == "electronics") {
        cardContainer.innerHTML += ` <div
          class="card"
          style="
          min-height:750px;
            width: 18rem;
            border-radius: 15px;
            background-color: rgba(235, 233, 234, 0.922);
          "
        >
          <img
            src="${item.image}"
            style="width: 286px; height: 400px; overflow: hidden"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body" style="position: relative">
            <h5 class="card-title">${item.title}</h5>
            <p>
              Price:
              <span style="color: blue; font-weight: bold">${item.price}</span>
            </p>
            <p class="rating">
              Rating:
              <span style="color: rgb(158, 0, 0); font-weight: bold">
                ${item.rating?.rate}</span
              >
            </p>
            <p class="card-text" style="position:relative;">
              Left stock:
              <span style="color: rgb(0, 158, 16); font-weight: bold"
                >${item.rating?.count}</span
              >
            </p>
            <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
              <div
                class="btn btn-outline-primary mt-4"
                style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
              >
                <i
                  class="fa-solid basketBtn fa-basket-shopping  basketBtn"
                  name="${item.id}"
                  style="font-size: 30px"
                ></i>
              </div>
              <div
                class="btn favBtn btn-outline-danger mt-4"
                style="width: 70px; height: 50px; margin-left:45px;"
              >
                <i
                  class="fa-solid fa-heart "
                  name="${item.id}"
                  style="font-size: 30px"
                ></i>
              </div>
            </div>
          </div>
        </div>`;
      }

    })
    // adding to basket  function
    addBasket()
    // adding product to favourites
    addFavourites()
    // card alert
    gettingCardInfo()
    // filter function

    filter.addEventListener("click", function () {
      let selectedValue = filter.value;
      data.forEach((item) => {

        if (selectedValue === "high-rate") {
          data.sort((a, b) => b.rating.rate - a.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "electronics") {
              cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function

        } else if (selectedValue === "low-rate") {
          data.sort((a, b) => a.rating.rate - b.rating.rate);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "electronics") {
              cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn  btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
            }

          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else if (selectedValue === "high-price") {
          data.sort((a, b) => b.price - a.price);
          cardContainer.innerHTML = ""
          data.forEach((item) => {
            if (item.category === "electronics") {
              cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid  basketBtn fa-basket-shopping "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        } else {
          data.sort((a, b) => a.price - b.price);
          cardContainer.innerHTML = "";
          data.forEach((item) => {
            if (item.category === "electronics") {
              cardContainer.innerHTML += ` <div
        class="card"
        style="
        min-height:750px;
          width: 18rem;
          border-radius: 15px;
          background-color: rgba(235, 233, 234, 0.922);
        "
      >
        <img
          src="${item.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="position: relative">
          <h5 class="card-title">${item.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${item.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${item.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${item.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn  btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${item.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
            }
          })
          // adding to basket  function
          addBasket()
          // adding product to favourites
          addFavourites()
          // card alert
          gettingCardInfo()
          // filter function
        }
      })


    })
  })
  console.log(arr)
})


if (localStorage.getItem("card")) {
  arr = JSON.parse(localStorage.getItem("card"));
} else {
  arr = [];
}


// adding to basket  function
function addBasket() {
  let basketBtns = document.querySelectorAll(".basketBtn");
  //    basket button
  basketBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let btnId = btn.getAttribute("name")
      e.preventDefault();
      console.log()
      console.log(btnId);
      arr.push(btnId);
      console.log(arr);
      localStorage.setItem("card", JSON.stringify(arr))

      Swal.fire({
        title: `Added to Basket`,
      })
    })
  });
}


// adding to favourites  function

function addFavourites() {
  let favBtns = document.querySelectorAll(".favBtn");
  favBtns.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      Swal.fire({
        title: `${this.parentElement.parentElement.children[0].innerText} added to Favourites`,
      })
    })
  });
}


// card info function
function gettingCardInfo() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let cardImg = card.children[0];
    cardImg.addEventListener("click", function () {
      console.log(this)
      Swal.fire({
        title: `${this.nextElementSibling.children[0].innerText}`,
        text: `${this.nextElementSibling.children[1].innerText}`,
        footer: `${this.nextElementSibling.children[3].innerText}`,
        imageUrl: `${this.src}`,
        imageWidth: 200,
        imageHeight: 300,
        imageAlt: 'Custom image',

      })
    })
  })
}



