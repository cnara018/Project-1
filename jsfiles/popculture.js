
$(document).ready(function() {
    var url = 'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=78d8701a362e49b5b7cb20b63d0913a5';



    $.get(url).then(function(data) {
        //var content = document.createTextNode(JSON.stringify(data.articles[0]));
  
        console.log(data)
				
        $("#popTitle-0").text(data.articles[0].title)
        $("#poppara-0").text(data.articles[0].description) //substring here based on the three periods
        $("#popimg-0").attr("src", data.articles[0].urlToImage)
        $("#link-0").attr("href",data.articles[0].url)
       
 
        $("#popTitle-1").text(data.articles[1].title )
        $("#poppara-1").text(data.articles[1].description)
        $("#popimg-1").attr("src", data.articles[1].urlToImage)
        $("#link-1").attr("href",data.articles[1].url)
 
 
        $("#popTitle-2").text(data.articles[2].title)
        $("#poppara-2").text(data.articles[2].description)
        $("#popimg-2").attr("src", data.articles[2].urlToImage)
        $("#link-2").attr("href",data.articles[2].url)

        $("#popTitle-3").text(data.articles[3].title)
        $("#poppara-3").text(data.articles[3].description)
        $("#popimg-3").attr("src", data.articles[3].urlToImage)
        $("#link-3").attr("href",data.articles[3].url)

        $("#popTitle-4").text(data.articles[4].title)
        $("#poppara-4").text(data.articles[4].description)
        $("#popimg-4").attr("src", data.articles[4].urlToImage)
        $("#link-4").attr("href",data.articles[4].url)

        $("#popTitle-5").text(data.articles[5].title)
        $("#poppara-5").text(data.articles[5].description)
        $("#popimg-5").attr("src", data.articles[5].urlToImage)
        $("#link-5").attr("href",data.articles[5].url)
 
        
 
        
         
         console.log(data.articles)
     


    });

   
});
   