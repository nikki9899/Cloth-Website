// const products = [
//   {
//     Image: {
//       src: "images/1.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 14 128GB",
//     Cname: "Company Name",
//     price: {
//       value: "75,000",
//       currency: "INR",
//     },
//   },
//   {
//     Image: {
//       src: "images/2.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 14 256GB",
//     Cname: "Company Name",
//     price: {
//       value: "65,000",
//       currency: "INR",
//     },
//   },
//   {
//     Image: {
//       src: "images/3.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 14 Pro Max",
//     Cname: "Company Name",
//     price: {
//       value: "60,000",
//       currency: "INR",
//     },
//   },
//   {
//     Image: {
//       src: "images/2.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 13 128GB",
//     Cname: "Company Name",
//     price: {
//       value: "65,000",
//       currency: "INR",
//     },
//   },
//   {
//     Image: {
//       src: "images/2.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 14 128GB",
//     Cname: "Company Name",
//     price: {
//       value: "65,000",
//       currency: "INR",
//     },
//   },
//   {
//     Image: {
//       src: "images/1.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 14 128GB",
//     Cname: "Company Name",
//     price: {
//       value: "65,000",
//       currency: "INR",
//     },
//   },
//   {
//     Image: {
//       src: "images/2.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 14 256GB",
//     Cname: "Company Name",
//     price: {
//       value: "65,000",
//       currency: "INR",
//     },
//   },
//   {
//     Image: {
//       src: "images/3.jpg_200Wx200H",
//       alt: "Iphone Image",
//     },
//     name: "Apple iPhone 14 Pro Max",
//     Cname: "Company Name",
//     price: {
//       value: "65,000",
//       currency: "INR",
//     },
//   },
// ];


(async function () {
const createProductCard = ({
  image: { src = "", alt = "" } = {},
  name = "",
  Cname = "",
  price: { value: price = 0, currency = "INR" } = {},
}) => {
  const productCardContainer = document.createElement("div");
  productCardContainer.setAttribute("class", "product-item");

  const productCard = document.createElement("div");
  productCard.setAttribute("class", "product-card");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", src);
  productImage.setAttribute("alt", alt);
  productCard.appendChild(productImage);

  const productName = document.createElement("h4");
  productName.innerHTML = name;
  productCard.appendChild(productName);

  const productCName = document.createElement("p");
  productCName.innerHTML = Cname;
  productCard.appendChild(productCName);

  const productPrice = document.createElement("p");
  productPrice.innerHTML = `${price} ${currency}`;
  productCard.appendChild(productPrice);

  const navItem6 = document.querySelector(".nav-item6");

  let count = 0;

  // Function to update the count in the navigation bar
  const updateCount = () => {
    navItem6.innerHTML = `
    <a href="#">
      ${count}
    </a>
  `;
  };

  const addToCard = document.createElement("button");
  addToCard.innerHTML = "+";
  let isClicked = false;

  addToCard.onclick = () => {
    isClicked = !isClicked;
    addToCard.innerHTML = isClicked ? "-" : "+";
    updateCount();
  };

  document.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.innerHTML === "+") {
      event.target.innerHTML = "-";
      count++;
      updateCount();
    } else if (
      event.target.tagName === "BUTTON" && event.target.innerHTML === "-") {
      event.target.innerHTML = "+";
      count--;
      updateCount();
    }
  });

  productCard.appendChild(addToCard);

  productCardContainer.appendChild(productCard);
  return productCardContainer;
};

// // Method One using XHR and callback
// const fetchData = (URL, callback) => {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       callback(JSON.parse(xhttp.responseText));
//     }
//   };
//   xhttp.open("GET", URL, true);
//   xhttp.send();
// };

//   // Method Two using fetch and callback
//   const fetchDataTwo = (URL, callback) => {
//     fetch(URL).then((response) => {
//       if (response.ok) {
//         response.json().then((data) => {
//           callback(data);
//         });
//       } else {
//         window.alert("Request Failed !!!");
//       }
//     });
//   };

   // Method Three using Promise
   
   const fetchData = (URL) => {
    return new Promise((resolve, reject) => {
      fetch(URL).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            resolve(data);
          });
        } else {
          reject("error");
        }
      });
    });
  };


  const fetchDataTwo2 = async (URL, callback) => {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      callback(data);
    } else {
      window.alert("Request Failed !!!");
    }
  };


const drawProductList = (products) => {
  products.forEach((item) => {
    const { id, image, title, price } = item;
    const product = {
      image: {
        src: image,
        alt: title,
      },
      name: title,
      price: {
        value: price,
        currency: "INR",
      },
      id,
    };
    document.getElementById("product").appendChild(createProductCard(product));
  });
};

try {
  const products = await fetchData("https://fakestoreapi.com/products");
  drawProductList(products);
} catch (error) {
  window.alert(error);
}
})();



const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
