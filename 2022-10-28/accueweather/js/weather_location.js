var currentURL = location.href //url 가져옴
var urlObj = new URL(currentURL)

var params = urlObj.searchParams
var q = params.get("q")
console.log(q)

var result = getCurrentWeather(q)
console.log(result)

//데이터 바인딩
$("#temp").text(result.main.temp + "℃")
$("#wind").text(result.main.speed + "m/s")
$("#humidity").text(result.main.humidity + "%")