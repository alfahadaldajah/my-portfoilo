function addRecommendation() {
    let message = document.getElementById("new_recommendation").value;
  
    if (message.trim() !== "") {
      let recommendation = document.createElement("div");
      recommendation.className = "recommendation";
      recommendation.innerHTML = `<span>&#8220;</span>${message}<span>&#8221;</span>`;
  
      document.getElementById("all_recommendations").appendChild(recommendation);
      document.getElementById("new_recommendation").value = "";
  
      // ✅ Show confirmation popup
      showPopup(true);
    }
  }
  


function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
