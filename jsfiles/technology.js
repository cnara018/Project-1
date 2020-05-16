var url = 'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=78d8701a362e49b5b7cb20b63d0913a5';

$.get(url).then(function(data) {
    //var content = document.createTextNode(JSON.stringify(data.articles[0]));


            
    $("#blog-0").text(data.articles[0].title)
    $("#para-0").text(data.articles[0].description) //substring here based on the three periods
    $("#para-0").text(data.articles[0].description)
    $("#img-0").attr("src", data.articles[0].urlToImage)
    $("#link-0").attr("href",data.articles[0].url)
    
    


   

    $("#blog-1").text(data.articles[1].title )
    $("#para-1").text(data.articles[1].description)
    $("#img-1").attr("src", data.articles[1].urlToImage)
    $("#link-1").attr("href",data.articles[1].url)



    $("#blog-2").text(data.articles[2].title)
    $("#para-2").text(data.articles[2].description)
    $("#img-2").attr("src", data.articles[2].urlToImage)
    $("#link-2").attr("href",data.articles[2].url)

    
    $("#blog-3").text(data.articles[3].title)
    $("#para-3").text(data.articles[3].description)
    $("#img-3").attr("src", data.articles[3].urlToImage)
    $("#link-3").attr("href",data.articles[3].url)


    
    $("#blog-4").text(data.articles[4].title)
    $("#para-4").text(data.articles[4].description)
    $("#img-4").attr("src", data.articles[4].urlToImage)
    $("#link-4").attr("href",data.articles[4].url)


    
    $("#blog-5").text(data.articles[5].title)
    $("#para-5").text(data.articles[5].description)
    $("#img-5").attr("src", data.articles[5].urlToImage)
    $("#link-5").attr("href",data.articles[5].url)


    

    

    
     
     console.log(data.articles)
 


});

