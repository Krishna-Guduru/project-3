let cartArr = JSON.parse(localStorage.getItem("CartProducts")) || [];
console.log(cartArr.length)
let cartContainer = document.getElementById("cartContainer");
let Empty = document.getElementById("empty_cart");
let cartdetails = document.getElementById("cartdetails");
let cart1=document.getElementById("cartbox1")
let cart2=document.getElementById("cartbox2")
let checkout=document.getElementById("checkout")
let totalPrice;
let totalCartItems;
let x;
if(cartArr.length==0){
  let h1=document.createElement("p")
  h1.innerHTML="Your Cart is Empty"
  // console.log("sdfjreoj")
  cartContainer.append(h1)
}
else{

totalPrice = cartArr.reduce((sum, el) => {
  return sum + el.price;
}, 0);

totalCartItems = cartArr.length;
let cartSize = document.createElement("h3");
cartSize.setAttribute("class","size")
cartSize.textContent = `items:(${totalCartItems})`;

 let savings=document.createElement("h4")
 savings.textContent="Sale Savings"

 let subtotal=document.createElement("h4")
 subtotal.textContent="Sub Total :"

 let Yourtotal=document.createElement("h4")
 Yourtotal.textContent="YourTotal :"

 cart1.append(cartSize,savings,subtotal,Yourtotal)
 
let total_price = document.createElement("h3");
total_price.textContent = `INR-${
  Math.round(totalPrice * 100) / 100
}`;
console.log(typeof(totalPrice),totalPrice)
 let t=document.createElement("h4")
 t.textContent=totalPrice

let savings1=document.createElement("h4")
 savings1.textContent=3567
 
 let subtotal1=document.createElement("h4")
 subtotal1.innerHTML=totalPrice-3567

 let Finaltotal=document.createElement("h4")
 Finaltotal.textContent=totalPrice-3567
 console.log(subtotal1,Finaltotal,typeof(subtotal),typeof(Finaltotal))


 cart2.append( t,savings1,subtotal1,Finaltotal)

let payNow = document.createElement("h3");

payNow.textContent = `Checkout`;
checkout.append(payNow)
payNow.onclick = () => {};

if (Finaltotal === 0){
  cartdetails.append(cart1,cart2);
} 
else {
  cartdetails.append(cart1,cart2,);
}

let Cart = () => {
  cartContainer.innerHTML = null;

  cartArr.map(({ pic, price, prodQuant }, index) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let igBox = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("class","cimg")
    image.src = pic;
    igBox.append(image);

    let qt = document.createElement("p");
    qt.setAttribute("class","qt");
    qt.textContent = prodQuant;

    let pr = document.createElement("p");
    pr.setAttribute("class","pr");
    pr.textContent = `INR ${Math.round((price) * 100) / 100}`;
    console.log(pr)

    let action = document.createElement("div");
    let iconn = document.createElement("i");
    iconn.setAttribute("class", "fa-solid fa-xmark");
    action.append(iconn);



    box.append(igBox, qt, pr, action);
    cartContainer.append(box);

    iconn.onclick = () => {
      removeItem(index);
    };

   
  });

};

Cart();


let removeItem = (index) => {
  cartArr.splice(index, 1);
  localStorage.setItem("CartProducts", JSON.stringify(cartArr));
  Cart(cartArr);
  cartSize.textContent = `Cart size : ${returnSize(cartArr)}`;
  total_price.textContent = `Total amount : $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  payNow.textContent = `Proceed to pay $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  if (returnAmount(cartArr) === 0) {
    payNow.style.visibility = "hidden";
  }
};




let addtocartarr = (index) => {
  cartArr.push(wishArr[index]);
  localStorage.setItem("CartProducts", JSON.stringify(cartArr));
  Cart(cartArr);

  cartSize.textContent = `Cart size : ${returnSize(cartArr)}`;
  
  total_price.textContent = `Total amount : $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;
  payNow.textContent = `Proceed to pay $${
    Math.round(returnAmount(cartArr) * 100) / 100
  }`;

  payNow.style.visibility = "visible";

  wishArr.splice(index, 1);
  localStorage.setItem("wishProducts", JSON.stringify(wishArr));
  wishDOM(wishArr);
  wishsize.textContent = `Wishlist size : ${returnSize(wishArr)}`;
};

let returnSize = (ar) => {
  let size = ar.length;
  return size;
};

let returnAmount = (ar) => {
  let amount = ar.reduce((sum, el) => {
    return sum + el.price;
  }, 0);

  return amount;
};


}




