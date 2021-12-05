document.addEventListener('DOMContentLoaded', function() {
  function solution(city) {
	fetch(("https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" + city), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
	ans = data.overall_aqi;
  
  var temp = "";
  for (var i = 0; i < city.length; i++) {
  	if (!(city[i] == " ")) {
  	temp += city[i];
  }
  }
  
	inner = "." + temp + "aqi";
    	document.querySelector(inner).innerHTML = ans;
    	document.querySelector(inner).style.color = determinecolor(ans);
});
    
  }
  function determinecolor(city) {
    if (city >= 0 && city <= 50) {
      return "green";
    } else if (city >= 51 && city <= 100) {
      return "gold";
    } else if (city >= 101 && city <= 150) {
      return "orange";
    } else if (city >= 151 && city <= 200) {
      return "red";
    } else if (city >= 201 && city <= 300) {
      return "maroon";
    } else {
      return "purple";
    }
  }
solution("Tokyo");
solution("Cairo");
solution("Dhaka");
solution("New York");
solution("Sao Paulo");
solution("Mumbai");
solution("Mexico City");
});
