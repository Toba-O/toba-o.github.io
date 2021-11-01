document.addEventListener('DOMContentLoaded', function() {
  function solution(data, city) {
    ans = Math.round(data.data[0].aqi);
    document.querySelector(city).innerHTML = ans;
    document.querySelector(city).style.color = determinecolor(ans);
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
      return "burgundy";
    }
  }
fetch("https://air-quality.p.rapidapi.com/history/airquality?lat=35.6762&lon=139.6503&hours=72", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
  solution(data, '.tokyoaqi');
});

fetch("https://air-quality.p.rapidapi.com/history/airquality?lat=30.0444&lon=31.2357&hours=72", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
  solution(data, '.cairoaqi');
});

fetch("https://air-quality.p.rapidapi.com/history/airquality?lat=48.8566&lon=2.3522&hours=72", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
  solution(data, '.parisaqi');
});

fetch("https://air-quality.p.rapidapi.com/history/airquality?lat=40.7128&lon=-74.0060&hours=72", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
  solution(data, '.newyorkaqi');
});

fetch("https://air-quality.p.rapidapi.com/history/airquality?lat=-23.5558&lon=-46.6396&hours=72", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
  solution(data, '.saopauloaqi');
});

fetch("https://air-quality.p.rapidapi.com/history/airquality?lat=19.0760&lon=72.8777&hours=72", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
  solution(data, '.mumbaiaqi');
});

fetch("https://air-quality.p.rapidapi.com/history/airquality?lat=19.4326&lon=-99.1332&hours=72", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "air-quality.p.rapidapi.com",
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff"
	}
})
.then(response => response.json())
.then(data => {
  solution(data, '.mexicocityaqi');
});
});
