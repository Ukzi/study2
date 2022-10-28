var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=c41000f8ad18478a7c5590e7d5a60daf"
url += "&units=metric"
url += "&lang=kr"
// url += "&q=seoul"
url += "&q="

// 현재 날씨의 모든 정보 얻어오기

function getCurrentWeather (city){
    var dataObj;
    var openWeatherAPI = url;

    $.ajax({
        type: "GET",  //서버에 get방식으로 요청을 함
        url: openWeatherAPI += city,
        dataType: "json",    // 받아올 데이터 타입
        async: false,      //비동기X -> 동기(결과 데이터를 리턴시키기 위해)
        success: function(data){  //API call 성공할떄
            console.log(data.main.temp);
            console.log(data.name);
            console.log(data.weather[0].description);
            console.log(data.wind.speed)
            console.log(data.dt)
            console.log(data.weather[0].icon)
            console.log(data)
            dataObj = data
        },
        error: function(request, status, error){  // API call 실패할때
            console.log(request, status, error)
        },
    })

    return dataObj
}

// getCurrentWeather()

// 지역별 현재 온도 얻어오기

function getCurrentTemp (city){

    var temp = {}
    var openWeatherAPI =url

    $.ajax({
        type: "GET",  //서버에 get방식으로 요청을 함
        url: openWeatherAPI += city,
        dataType: "json",    // 받아올 데이터 타입
        async: false,      //비동기X -> 동기(결과 데이터를 리턴시키기 위해)
        success: function(data){  //API call 성공할떄
            temp.celsius = data.main.temp.toFixed(0) //온도
            temp.icon = data.weather[0].icon //아이콘
        },
        error: function(request, status, error){  // API call 실패할때
            console.log(request, status, error)
        },
    })

    
    return temp
}

