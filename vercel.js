// Sample car data
const cars = [
  {
    name: "Toyota Camry 2022",
    price: "$25,000",
    image: "https://images.unsplash.com/photo-1618430563364-6b2c1df4fdfc"
  },
  {
    name: "Ford Mustang 2021",
    price: "$32,500",
    image: "https://images.unsplash.com/photo-1589395595558-9428e919d5d3"
  },
  {
    name: "Honda Civic 2023",
    price: "$22,000",
    image: "https://images.unsplash.com/photo-1617531653332-bd114932b3f7"
  },
  {
    name: "BMW 3 Series 2020",
    price: "$35,000",
    image: "https://images.unsplash.com/photo-1602872028969-89a67e9fd27b"
  }
];

// Populate the inventory
const carList = document.getElementById("car-list");
cars.forEach(car => {
  const carCard = document.createElement("div");
  carCard.classList.add("car");
  carCard.innerHTML = `
    <img src="${car.image}" alt="${car.name}" />
    <h3>${car.name}</h3>
    <p class="price">${car.price}</p>
  `;
  carList.appendChild(carCard);
});

// Simple form handler
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const cars = [ /* ...car data... */ ];

  const carList = document.getElementById("car-list");
  cars.forEach(car => {
    const carCard = document.createElement("div");
    carCard.classList.add("car");
    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.name}" />
      <h3>${car.name}</h3>
      <p class="price">${car.price}</p>
    `;
    carList.appendChild(carCard);
  });

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
});
