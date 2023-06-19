
const userName = "Jack";
const userAge = 37;

const user = {
    userName,
    age: userAge,
    location: "New York"
}

console.log(user);

// Object destructuring

const product = {
    label: "Good notebook",
    price: 5,
    stock: 250,
    salePrice: undefined,
    rating: 4.2
}

const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel);
console.log(stock);
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);