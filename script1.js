const products = [
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
  {
    Image: {
      src: "images/1.jpg_200Wx200H",
      alt: "Iphone Image",
    },
    name: "Apple iPhone 14 128GB",
    Cname: "Company Name",
    price: {
      value: "75,000",
      currency: "INR",
    },
  },
];

const createProductListHTML = () => {
  return products.map(
      ({
        Image: { src = "", alt = "" } = {},
        name = "",
        Cname = "",
        price: { value: price = 0, currency = "INR" } = {},
      }) => {
        return `
              <div class="product-item">
              <a href="#"></a>
              <img
                src = "${src}"
                alt = "${alt}"
                />
              <h3>${name}</h3>
              <p>${Cname}</p>
              <p><b>${price} ${currency}</b></p>
              <button>+</button>
            </div>
              `;
      }
    )
    .join("");
};
document.getElementById("product").innerHTML = createProductListHTML();
