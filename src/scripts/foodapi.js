fetch("http://localhost:8088/food")
  .then(foods => foods.json())
  .then(parsedFoods => {
    for (let food of parsedFoods) {
      console.log(food.name);
    }
  })