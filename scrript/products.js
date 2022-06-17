  var CartArr=JSON.parse(localStorage.getItem("CartProducts"))||[]
  let WishArr = JSON.parse(localStorage.getItem("wishProducts")) || [];

let productdata = [
  {
    name:"SAFAVIEH Adirondack Vera Modern Ombre Distressed Stripe Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/57e55b6b50af4de47b5b254913333668cb30dec4/SAFAVIEH-Adirondack-Vera-Modern-Ombre-Distressed-Stripe-Area-Rug.jpg?imwidth=480&impolicy=medium",
    
    ratings: "⭐⭐⭐⭐⭐",
    price:+"2110.99",
    desc: "Add some texture and color to your living room while protecting your floors with this charming Adirondack Vera area rug. Machine-woven for optimal durability",
    reviews: 500,

  },
  {
    name: "SAFAVIEH Vision Tanasa Modern Ombre Tonal Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/990f35cac9e50ad0661788cf2844ad71bcb70e47/SAFAVIEH-Vision-Tanasa-Modern-Ombre-Tonal-Rug.jpg",
    ratings: "⭐⭐⭐⭐⭐",
    price: +"2181.53",
      reviews: 200,
      desc: "Complement your Scandinavian or bohemian home decor with this charming Tulum Bora area rug. Machine-woven of polypropylene, this rug is extremely durable for use in high-traffic areas.",

  },
  {
    name: "nuLOOM Wynn Braided Indoor/Outdoor Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/cd29d00fd173b45bcd9d95ae3c483aa2de38b390/SAFAVIEH-Tulum-Bora-Moroccan-Boho-Chic-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2286.90",
      desc: "Complement your Scandinavian or bohemian home decor with this charming Tulum Bora area rug. Machine-woven of polypropylene, this rug is extremely ",
      reviews: 136,
  },
  {
    name:"SAFAVIEH California Shag Izat 2-inch Thick Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/fa0de7e5f6db966631851fdd3f058a6b965ff170/SAFAVIEH-California-Shag-Izat-2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐⭐",
    price: +"3030.75",
    desc: "Elevate your living room or bedroom decor with this transitional area rug from Safavieh. This rug features a slightly distressed medallion pattern",
    reviews: 29,
   
  },
  {
    name: "SAFAVIEH Madison Avery Boho Chic Distressed Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/205c6208408054a206a0a9fa356db59c208345f9/SAFAVIEH-Madison-Avery-Boho-Chic-Distressed-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2342.27",
    desc: "A marvelous exhibit of trendsetting transitional rugs, the Madison Collection instills life into extraordinary spaces. Expertly machine-woven, these rugs are easy-care ",
    reviews: 200,
  },
  {
    name: "nuLOOM Wynn Braided Indoor/Outdoor Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/6743ce0acd8cab270fd283311e5fc023542621b4/nuLOOM-Wynn-Braided-Indoor-Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2871.80",
    desc: "Bring rustic texture to your entryway or living room with the Wynn area rug from nuLOOM. The stain-resistant polypropylene pile features a braided design",
    reviews: 300,
  },
  {
    name: "SAFAVIEH California Shag Izat 2-inch Thick Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/fa0de7e5f6db966631851fdd3f058a6b965ff170/SAFAVIEH-California-Shag-Izat-2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"3030.75",
     desc: "SAFAVIEH's California Shag Collection imparts breezy coastal vibes throughout room décor.",
    reviews: 250,
  },
{
    name: "SAFAVIEH California Shag Izat 2-inch Thick Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/fa0de7e5f6db966631851fdd3f058a6b965ff170/SAFAVIEH-California-Shag-Izat-2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2344.94",
    desc: "This Tiffany area rug features a bohemian pattern and is made with polypropylene and polyester material. This collection features a globally inspired ",
    reviews: 300,
    
  },
  {
    name: "Alexander Home Isabelle Traditional Printed Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/1c9f01a5d19453e2cff0b4fa297e1822242ec376/Alexander-Home-Isabelle-Traditional-Printed-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"3669.22",
    desc: "Decorate your home with this lovely printed area rug. This printed power-loomed construction has intricate designs depicting individual knots with a worn, subtle patina",
    reviews: 300,
  },
  {
    name: "SAFAVIEH Madison Snowflake Medallion Rustic Farmhouse Distressed Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/f3740e332b1b54bfccec1ee81ca045074a93a275/SAFAVIEH-Madison-Snowflake-Medallion-Rustic-Farmhouse-Distressed-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2344.94",
    desc: "Add a touch of boho farmhouse flair with the Madison Snowflake area rug. Featuring a stunning medallion design with a deliberate distressed effect,",
    reviews: 235,
  },
  {
    name: "SAFAVIEH Madison Avery Boho Chic Distressed Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/5811de7f16d999898940c901d40eace16e52d0b9/Safavieh-Madison-Avery-Boho-Chic-Distressed-Rug.jpg",
    ratings: "⭐⭐⭐⭐",
    price: +"2342.27",
    desc: " Expand your fridge space with this convenient under-counter refrigerator drawer unit from Thor Kitchen",
    reviews: 100,
  },
  {
    name: "nuLOOM Moroccan Blythe Boho Trellis Area Rug",
    img_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/16cb8a4b0c88ab9dd9d67af84e6f647e79e65b33/The-Curated-Nomad-Ashbury-Moroccan-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2321.73",
    desc: "The Avery rug from SAFAVIEH's Madison Collection brings an incredible display of trendy artistry to any room.",
    reviews: 100,

    
  },
  {
    name: "SAFAVIEH Handmade Natura Fanette Wool Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/34f931ef3e054ee0c0464ac1206a5cb5a976076e/SAFAVIEH-Handmade-Natura-Fanette-Wool-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"3220.06",
    desc: "The epitome of sophisticated beach house style, the Natura Collection exudes an artisan-crafted look and texture.",
    reviews: 320,
  },
  {
    name: "SAFAVIEH Courtyard Marolyn Indoor/ Outdoor Waterproof Patio Backyard Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/d8fcd2d2095055cd4513ce48ce4eb1cb62cae60a/Safavieh-Courtyard-Marolyn-Indoor--Outdoor-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2364.59",
    desc: "Perfect for any backyard, patio, deck, sunroom, veranda, or poolside, this stylish rug from the Courtyard Collection is a practical addition to any outdoor or indoor living space.",
    reviews: 200,
    
  },
   {
    name: "Professional 1.2 Cu.Ft. Microwave and Grill Oven",
    img_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/b261e4efc72e38316a530df44fa00a0c64eaaf87/Unique-Loom-Maria-Del-Mar-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"1390.98",
    desc: "Complete your glam aesthetic with the Janie rug from nuLOOM. Made of polyester and polypropylene, the low-profile pile is accented with a splatter-like abstract pattern.",
    reviews: 249,
    
  },
  {
    name: "SAFAVIEH Vision Tanasa Modern Ombre Tonal Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/5d7e7cc47b251ac799c247669676f0409c3119b2/nuLOOM-Solid-Border-Outdoor--Indoor-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐⭐",
    price: +"2181.53",
      reviews: 200,
      desc: "Complement your Scandinavian or bohemian home decor with this charming Tulum Bora area rug. Machine-woven of polypropylene, this rug is extremely durable for use in high-traffic areas.",

  },
  {
    name: "nuLOOM Wynn Braided Indoor/Outdoor Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/3773836388bc0218cb5d4bdfa2e958a71ca53c72/Nourison-Sublime-Vintage-Abstract-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2871.80",
    desc: "Bring rustic texture to your entryway or living room with the Wynn area rug from nuLOOM. The stain-resistant polypropylene pile features a braided design",
    reviews: 300,
  },
  {
    name: "SAFAVIEH California Shag Izat 2-inch Thick Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/d1ee7b1cb2fe8421bb5014e2c8735e5b7218c517/JONATHAN-Y-Trebol-Bohemian-Vintage-Moroccan-Traditional-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"3030.75",
     desc: "SAFAVIEH's California Shag Collection imparts breezy coastal vibes throughout room décor.",
    reviews: 250,
  },
  {
    name: "SAFAVIEH California Shag Izat 2-inch Thick Area Rug",
    img_url: "https://ak1.ostkcdn.com/images/products/is/images/direct/702d5fcb86268c054a5a64b79b50e811dbd39f58/Well-Woven-Medusa-Sol-Lattice-Trellis-Indoor-Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium",
    ratings: "⭐⭐⭐⭐",
    price: +"2344.94",
    desc: "This Tiffany area rug features a bohemian pattern and is made with polypropylene and polyester material. This collection features a globally inspired ",
    reviews: 300,
    
  },

];

  var productdiv = document.getElementById("append_products");

productdata.map((elem) => {
  var dox = document.createElement("div");
  dox.setAttribute("class", "appdiv");

  var centerimg = document.createElement("center");
  var img = document.createElement("img");
  img.setAttribute("class","productsimg")
  img.src = elem.img_url;
  centerimg.append(img);

  var reviews = document.createElement("button");
  reviews.setAttribute("class","reviews")
  reviews.innerText = "❤️" + elem.reviews;
  reviews.setAttribute("id", "review");

  var title = document.createElement("h5");
  title.setAttribute("class","title")
  title.innerText = elem.name;

  var rating = document.createElement("div");
  rating.setAttribute("class","rating")
  rating.innerText = elem.ratings;
  var des = document.createElement("p");
  des.innerText =  "Description"+"-"+elem.desc;
  var btndiv = document.createElement("div");

btndiv.setAttribute("class","btndiv")
  var btn = document.createElement("h4");
  

  btn.innerText = "Sale INR"+" - " + elem.price;

  btndiv.append(btn);
// console.log(btn)

  var addtocart = document.createElement("button");
  addtocart.innerText = "Add To Cart";

  addtocart.setAttribute("id", "addtocart");

  addtocart.onclick = () => {

    if (CartArr.length === 0) {

      let obj = {
        name: elem.name,
        pic: elem.img_url,
        productQty: 1,
        price: (Math.round (Number(elem.price) * 100) / 100) * 1,
        reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
    };
      
      CartArr.push(obj);
      localStorage.setItem("CartProducts", JSON.stringify(CartArr));
      total_cart.textContent = CartArr.length;
    } 
    else {
      
      let flag = false;
      for (let i = 0; i < CartArr.length; i++){
        if (elem.name === CartArr[i].name){
          CartArr[i].productQty =CartArr[i].productQty+ 1;
          CartArr[i].price =CartArr[i].productQty * (Math.round (Number(elem.price) * 100) / 100) * 1;
          localStorage.setItem("CartProducts", JSON.stringify(CartArr));
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } 
      else {
        let obj = {
          name: elem.name,
          pic: elem.img_url,
          productQty: 1,
           price:(Math.round (Number(elem.price) * 100) / 100) * 1,
          price:elem.price,
          reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
        };
        CartArr.push(obj);
        localStorage.setItem("CartProducts", JSON.stringify(CartArr));
        total_cart.textContent = CartArr.length;
      }
     
    }
  };

  var addtowish = document.createElement("button");
  addtowish.innerText = "Add To Wishlist";
  addtowish.setAttribute("id", "addtowish");
  addtowish.onclick = () => {
    if (WishArr.length === 0) {
      let obj = {
        name: elem.name,
        pic: elem.img_url,
        productQty: 1,
        price: (Math.round(elem.price * 100) / 100) * 1,
        reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
      };
      WishArr.push(obj);
      localStorage.setItem("wishProducts", JSON.stringify(WishArr));
    } else {
      let flag = false;
      for (let i = 0; i < WishArr.length; i++) {
        if (elem.name === WishArr[i].name) {
          alert("Already added in wishlist");
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } else {
        let obj = {
          name: elem.name,
          pic: elem.img_url,
          productQty: 1,
          price: (Math.round(elem.price * 100) / 100) * 1,
          reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
        };
        WishArr.push(obj);
        localStorage.setItem("wishProducts", JSON.stringify(WishArr));
      }
    }
  };

  dox.append(
    centerimg,
    reviews,
    title,
    rating,
    btndiv,
    des,
    addtocart,
    addtowish
    
  );

  productdiv.append(dox);

});
function low() {
  productdiv.innerHTML = "";
  productdata.sort((a,b)=>{
return a.price-b.price;
  })

  productdata.map((elem) => {
  var dox = document.createElement("div");
  dox.setAttribute("class", "appdiv");

  var centerimg = document.createElement("center");
  var img = document.createElement("img");
  img.setAttribute("class","productsimg")
  img.src = elem.img_url;
  centerimg.append(img);

  var reviews = document.createElement("button");
  reviews.setAttribute("class","reviews")
  reviews.innerText = "❤️" + elem.reviews;
  reviews.setAttribute("id", "review");

  var title = document.createElement("h5");
  title.setAttribute("class","title")
  title.innerText = elem.name;

  var rating = document.createElement("div");
  rating.setAttribute("class","rating")
  rating.innerText = elem.ratings;
  var des = document.createElement("p");
  des.innerText =  "Description"+"-"+elem.desc;
  var btndiv = document.createElement("div");

btndiv.setAttribute("class","btndiv")
  var btn = document.createElement("h4");
  

  btn.innerText = "Sale INR"+" - " + elem.price;

  btndiv.append(btn);
// console.log(btn)
  var addtocart = document.createElement("button");
  addtocart.innerText = "Add To Cart";
  addtocart.setAttribute("id", "addtocart");

  addtocart.onclick = () => {

    if (CartArr.length === 0) {

      let obj = {
        name: elem.name,
        pic: elem.img_url,
        productQty: 1,
        price: (Math.round (Number(elem.price) * 100) / 100) * 1,
        reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
    };
      
      CartArr.push(obj);
      localStorage.setItem("CartProducts", JSON.stringify(CartArr));
      total_cart.textContent = CartArr.length;
    } 
    else {
      
      let flag = false;
      for (let i = 0; i < CartArr.length; i++){
        if (elem.name === CartArr[i].name){
          CartArr[i].productQty =CartArr[i].productQty+ 1;
          CartArr[i].price =CartArr[i].productQty * (Math.round (Number(elem.price) * 100) / 100) * 1;
          localStorage.setItem("CartProducts", JSON.stringify(CartArr));
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } 
      else {
        let obj = {
          name: elem.name,
          pic: elem.img_url,
          productQty: 1,
           price:(Math.round (Number(elem.price) * 100) / 100) * 1,
          price:elem.price,
          reviews:elem.reviews,
        ratings:elem.ratings
        };
        CartArr.push(obj);
        localStorage.setItem("CartProducts", JSON.stringify(CartArr));
        total_cart.textContent = CartArr.length;
      }
     
    }
  };

  var addtowish = document.createElement("button");
  addtowish.innerText = "Add To Wishlist";
  addtowish.setAttribute("id", "addtowish");
  addtowish.onclick = () => {
    if (WishArr.length === 0) {
      let obj = {
        name: elem.name,
        pic: elem.img_url,
        productQty: 1,
        price: (Math.round(elem.price * 100) / 100) * 1,
        reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
      };
      WishArr.push(obj);
      localStorage.setItem("wishProducts", JSON.stringify(WishArr));
    } else {
      let flag = false;
      for (let i = 0; i < WishArr.length; i++) {
        if (elem.name === WishArr[i].name) {
          alert("Already added in wishlist");
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } else {
        let obj = {
          name: elem.name,
          pic: elem.img_url,
          productQty: 1,
          price: (Math.round(elem.price * 100) / 100) * 1,
          reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
        };
        WishArr.push(obj);
        localStorage.setItem("wishProducts", JSON.stringify(WishArr));
      }
    }
  };

  dox.append(
    centerimg,
    reviews,
    title,
    rating,
    btndiv,
    des,
    addtocart,
    addtowish
    
  );

  productdiv.append(dox);

});

}

function high() {
  productdiv.innerHTML = "";
  productdata.sort((a,b)=>{
return b.price-a.price;
  })

  productdata.map((elem) => {
  var dox = document.createElement("div");
  dox.setAttribute("class", "appdiv");

  var centerimg = document.createElement("center");
  var img = document.createElement("img");
  img.setAttribute("class","productsimg")
  img.src = elem.img_url;
  centerimg.append(img);

  var reviews = document.createElement("button");
  reviews.setAttribute("class","reviews")
  reviews.innerText = "❤️" + elem.reviews;
  reviews.setAttribute("id", "review");

  var title = document.createElement("h5");
  title.setAttribute("class","title")
  title.innerText = elem.name;

  var rating = document.createElement("div");
  rating.setAttribute("class","rating")
  rating.innerText = elem.ratings;
  var des = document.createElement("p");
  des.innerText =  "Description"+"-"+elem.desc;
  var btndiv = document.createElement("div");

btndiv.setAttribute("class","btndiv")
  var btn = document.createElement("h4");
  

  btn.innerText = "Sale INR"+" - " + elem.price;

  btndiv.append(btn);
// console.log(btn)
  var addtocart = document.createElement("button");
  addtocart.innerText = "Add To Cart";
  addtocart.setAttribute("id", "addtocart");

  addtocart.onclick = () => {

    if (CartArr.length === 0) {

      let obj = {
        name: elem.name,
        pic: elem.img_url,
        productQty: 1,
        price: (Math.round (Number(elem.price) * 100) / 100) * 1,
        reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
      //  price:elem.price
    };
      
      CartArr.push(obj);
      localStorage.setItem("CartProducts", JSON.stringify(CartArr));
      total_cart.textContent = CartArr.length;
    } 
    else {
      
      let flag = false;
      for (let i = 0; i < CartArr.length; i++){
        if (elem.name === CartArr[i].name){
          CartArr[i].productQty =CartArr[i].productQty+ 1;
          CartArr[i].price =CartArr[i].productQty * (Math.round (Number(elem.price) * 100) / 100) * 1;
          localStorage.setItem("CartProducts", JSON.stringify(CartArr));
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } 
      else {
        let obj = {
          name: elem.name,
          pic: elem.img_url,
          productQty: 1,
           price:(Math.round (Number(elem.price) * 100) / 100) * 1,
           reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
          
        };
        CartArr.push(obj);
        localStorage.setItem("CartProducts", JSON.stringify(CartArr));
        total_cart.textContent = CartArr.length;
      }
     
    }
  };

  var addtowish = document.createElement("button");
  addtowish.innerText = "Add To Wishlist";
  addtowish.setAttribute("id", "addtowish");
  addtowish.onclick = () => {
    if (WishArr.length === 0) {
      let obj = {
        name: elem.name,
        pic: elem.img_url,
        productQty: 1,
        price: (Math.round(elem.price * 100) / 100) * 1,
        reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
      };
      WishArr.push(obj);
      localStorage.setItem("wishProducts", JSON.stringify(WishArr));
    } else {
      let flag = false;
      for (let i = 0; i < WishArr.length; i++) {
        if (elem.name === WishArr[i].name) {
          alert("Already added in wishlist");
          flag = true;
          break;
        }
      }

      if (flag === true) {
      } else {
        let obj = {
          name: elem.name,
          pic: elem.img_url,
          productQty: 1,
          price: (Math.round(elem.price * 100) / 100) * 1,
          reviews:elem.reviews,
        ratings:elem.ratings
      //  price:elem.price
        };
        WishArr.push(obj);
        localStorage.setItem("wishProducts", JSON.stringify(WishArr));
      }
    }
  };

  dox.append(
    centerimg,
    reviews,
    title,
    rating,
    btndiv,
    des,
    addtocart,
    addtowish
    
  );

  productdiv.append(dox);

});

}


