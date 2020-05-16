$(document).ready(function() {

  function buildArticles (url, id) {

    var counter = 0
  
    $.get(url).then(function(data) {
      
      data.articles.forEach(function (article) {
       
        let html = '';
        html += '<div class="sblog-post">'
        html += '<h3>'+article.headline+'</h3>'
        html += '<img class="thumbnail" src="'+article.images[0].url+'">'
        html += '<p>'+article.description+'</p>'
        html += '<a "id="links" href="'+article.links.web.href+'" target="_blank"> Click here for full article </a>'
        html += '</div>'
        
        counter++ 

        if (counter <= 3){
          $(id).append(html)
        }

      })
    });
  }

  buildArticles('https://site.api.espn.com/apis/site/v2/sports/football/nfl/news', '#articles')
  buildArticles('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news', '#articles')
});

