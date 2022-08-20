function mealInfo() {
    var searchText = document.getElementById("mealSearch").value ; 
    
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)   ); 
  
  // clearing search box and previous content 
     document.getElementById("mealSearch").value = " "; 
     document.getElementById("container").textContent = " ";
  
  }
  
  function display (data){
  
   var oldContent = document.getElementById("container")
   var foodAmount = document.getElementById("amount").value ;
    foodAmount=parseInt(foodAmount);
    document.getElementById("amount").value = " "; 
     document.getElementById("container").textContent = " ";
   for (var a=0; a<foodAmount; a++){
    
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `
     <div class="card" style="width: 18rem;">
    <img src="${data.meals[a].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[a].strMeal}</h5>
      <p class="card-text">
      <h4>cooking instructions:</h4>
      ${data.meals[a].strInstructions}
      </p>
      <a href="https://www.themealdb.com/" class="btn btn-primary">Visit Site</a>
    </div>
  </div> ` ;
  
      oldContent.appendChild(newDiv);
  
   }
  
  }