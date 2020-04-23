fetch("http://localhost:8088/food")
  .then(foods => foods.json())
  .then(parsedFoods => {
    debugger;

    for (let food of parsedFoods) {
      let foodContainer = document.querySelector(".foodList");
      let foodComponent = "";
      foodComponent = foodFactory(food);
      foodContainer.innerHTML += foodComponent;
    }
  })



const foodFactory = (food) => {
  return `
    <h1>${food.name}</h1>
    <div>${food.ethnicity}</div>
    <div>${food.category}</div>
    `

}

