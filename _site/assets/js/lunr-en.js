var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Exclude Post from Search Index",
      excerpt: "This post should not appear in the search index because it has the following YAML Front Matter:\n\n",
      categories: ["Jekyll"],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Jekyll ile post yazma",
      excerpt: "Post yazmak için _posts klasörüne girip .md uzantılı dosya oluşturuyoruz. Dosya ismini 2018-2-08-Jekyll ile post yazma.md yapiyoruz. İçine aşağıdaki metini...",
      categories: ["Jekyll"],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "İlk madde",
      excerpt: "Hayat yoldur, yolun kendisi. Ve bu yolda her insanın yenilenebilir enerji kaynaklarından teknosentez ile kendi besinini üretme hakkı vardır.\n",
      categories: ["Jekyll"],
      tags: [],
      id: 2
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Exclude Post from Search Index",
        "url": "http://localhost:4000/jekyll/post-exclude-search/",
        "excerpt": "This post should not appear in the search index because it has the following YAML Front Matter:\n\nsearch: false\n\n",
        "teaser":
          
            "http://localhost:4000/assets/images/open-road.jpg%22"
          
      },
    
      
      {
        "title": "Jekyll ile post yazma",
        "url": "http://localhost:4000/jekyll/Jekyll-ile-post-yazma/",
        "excerpt": "Post yazmak için _posts klasörüne girip .md uzantılı dosya oluşturuyoruz. Dosya ismini 2018-2-08-Jekyll ile post yazma.md yapiyoruz. İçine aşağıdaki metini...",
        "teaser":
          
            "http://localhost:4000/assets/images/open-road.jpg%22"
          
      },
    
      
      {
        "title": "İlk madde",
        "url": "http://localhost:4000/jekyll/%C4%B0lk-madde/",
        "excerpt": "Hayat yoldur, yolun kendisi. Ve bu yolda her insanın yenilenebilir enerji kaynaklarından teknosentez ile kendi besinini üretme hakkı vardır.\n",
        "teaser":
          
            "http://localhost:4000/assets/images/open-road.jpg%22"
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
