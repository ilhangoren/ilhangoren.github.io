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
      title: "İlk hak",
      excerpt: "Hayat yoldur, yolun kendisi.\nVe bu yolda her insanın yenilenebilir enerji kaynaklarından teknosentez ile kendi besinini üretme hakkı vardır.\n",
      categories: ["Jekyll"],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Ciceklerim",
      excerpt: "Annem en güzel çiçeklerini bana vermişti\nAldım, baktım.\nKurudular,\nBakamadım..\n",
      categories: ["Jekyll"],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Giden ben",
      excerpt: "Beni ben yapan bendim.\nO beni benden aldınız,\nKalan, benim.\nBu ben bambaşka, ben değil..\n",
      categories: ["Jekyll"],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Hayat",
      excerpt: "Hayat Hem kendini geliştirmek, Hem kendini aşmaktır. Eğer bir şey sürekli aynı kalıyorsa, O zaman yaşamak sadece ölmemektir. Ölmemek; ölememek.....",
      categories: ["Jekyll"],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Kerem'in ilhamiyle",
      excerpt: "Ne zaman düşünsem sizi titrerim, Yaslı dağlar, yüzü gülmeyen dağlar! Bu dağlar içinde bir yer var derim, Orada kaybolan bir...",
      categories: ["Jekyll"],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "İletişim sorunları ve olası çözümler",
      excerpt: "Genelde insanların davranışlarını kendimizce yorumlayıp ona göre hareket ediyoruz. Fakat karşıdakilerin neler hissettikleri, hangi ruh halinde olduklarını, sıkıntılarının neler olduğunu...",
      categories: ["Jekyll"],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "Kim bilir",
      excerpt: "Boş bardağın bile dolu tarafı vardır derler, Elinde boş bir bardak olması gibi mesela. Ektiğin umutlara O boş bardakla su...",
      categories: ["Jekyll"],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "Maske",
      excerpt: "Bana aldırmayın! Yüzüm bir maskedir, Sizi aldatmasın, Binlerce maskem var, Çıkarmaya korktuğum Ve Hiçbiri ben değilim. Beni kendi maskelerimden kurtaracak...",
      categories: [],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "Nesne yönelimli programlama",
      excerpt: "Bu terimler yazılım ve programlamada çok temel terimlerdir. Bunları iyi bilip öyle çalışmak gerekir. Yapılan şeyin altında yatan gerçekleri bilmeden...",
      categories: [],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Listem",
      excerpt: "Küçük prens Şeker portakalı Olasılıksız Aşk Suç ceza Hayvan çiftliği Sefiller Satranç Kuyucaklı Yusuf Da Vinci şifresi Sol ayağım Yabancı...",
      categories: [],
      tags: [],
      id: 11
    });
    
  
    idx.add({
      title: "Peygamberin Son Beş Günü",
      excerpt: "Kendimce okumada aklımda kalanlar\n\n",
      categories: ["Jekyll"],
      tags: ["Kitaplar","Okumalar","Books","Summaries"],
      id: 12
    });
    
  
    idx.add({
      title: "Bilinmeyen bir kadının mektubu",
      excerpt: "Kendimce okumada aklımda kalanlar\n\n",
      categories: ["Jekyll"],
      tags: ["Kitaplar","Okumalar","Books","Summaries"],
      id: 13
    });
    
  
    idx.add({
      title: "Tenis notlar",
      excerpt: "Notlar\n\n",
      categories: [],
      tags: [],
      id: 14
    });
    
  
    idx.add({
      title: "Kitap arsivleri",
      excerpt: "Ücretsiz(birçoğu) olarak E Kitap tarama kaynakları\n\n",
      categories: [],
      tags: [],
      id: 15
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Exclude Post from Search Index",
        "url": "http://localhost:4000/jekyll/Post-exclude-search/",
        "excerpt": "This post should not appear in the search index because it has the following YAML Front Matter:\n\nsearch: false\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Jekyll ile post yazma",
        "url": "http://localhost:4000/jekyll/Jekyll-ile-post-yazma/",
        "excerpt": "Post yazmak için _posts klasörüne girip .md uzantılı dosya oluşturuyoruz. Dosya ismini 2018-2-08-Jekyll ile post yazma.md yapiyoruz. İçine aşağıdaki metini...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "İlk hak",
        "url": "http://localhost:4000/jekyll/%C4%B0lk-hak/",
        "excerpt": "Hayat yoldur, yolun kendisi.\nVe bu yolda her insanın yenilenebilir enerji kaynaklarından teknosentez ile kendi besinini üretme hakkı vardır.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ciceklerim",
        "url": "http://localhost:4000/jekyll/Ciceklerim/",
        "excerpt": "Annem en güzel çiçeklerini bana vermişti\nAldım, baktım.\nKurudular,\nBakamadım..\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Giden ben",
        "url": "http://localhost:4000/jekyll/Giden-ben/",
        "excerpt": "Beni ben yapan bendim.\nO beni benden aldınız,\nKalan, benim.\nBu ben bambaşka, ben değil..\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Hayat",
        "url": "http://localhost:4000/jekyll/Hayat/",
        "excerpt": "Hayat Hem kendini geliştirmek, Hem kendini aşmaktır. Eğer bir şey sürekli aynı kalıyorsa, O zaman yaşamak sadece ölmemektir. Ölmemek; ölememek.....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Kerem'in ilhamiyle",
        "url": "http://localhost:4000/jekyll/Kerem'in-ilhamiyle/",
        "excerpt": "Ne zaman düşünsem sizi titrerim, Yaslı dağlar, yüzü gülmeyen dağlar! Bu dağlar içinde bir yer var derim, Orada kaybolan bir...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "İletişim sorunları ve olası çözümler",
        "url": "http://localhost:4000/jekyll/%C4%B0leti%C5%9Fim-sorunlar%C4%B1-ve-olas%C4%B1-%C3%A7%C3%B6z%C3%BCmler/",
        "excerpt": "Genelde insanların davranışlarını kendimizce yorumlayıp ona göre hareket ediyoruz. Fakat karşıdakilerin neler hissettikleri, hangi ruh halinde olduklarını, sıkıntılarının neler olduğunu...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Kim bilir",
        "url": "http://localhost:4000/jekyll/Kim-bilir/",
        "excerpt": "Boş bardağın bile dolu tarafı vardır derler, Elinde boş bir bardak olması gibi mesela. Ektiğin umutlara O boş bardakla su...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Maske",
        "url": "http://localhost:4000/Maske/",
        "excerpt": "Bana aldırmayın! Yüzüm bir maskedir, Sizi aldatmasın, Binlerce maskem var, Çıkarmaya korktuğum Ve Hiçbiri ben değilim. Beni kendi maskelerimden kurtaracak...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Nesne yönelimli programlama",
        "url": "http://localhost:4000/Nesne-y%C3%B6nelimli-programlama/",
        "excerpt": "Bu terimler yazılım ve programlamada çok temel terimlerdir. Bunları iyi bilip öyle çalışmak gerekir. Yapılan şeyin altında yatan gerçekleri bilmeden...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Listem",
        "url": "http://localhost:4000/Listem/",
        "excerpt": "Küçük prens Şeker portakalı Olasılıksız Aşk Suç ceza Hayvan çiftliği Sefiller Satranç Kuyucaklı Yusuf Da Vinci şifresi Sol ayağım Yabancı...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Peygamberin Son Beş Günü",
        "url": "http://localhost:4000/jekyll/Peygamberin-Son-Bes-Gunu/",
        "excerpt": "Kendimce okumada aklımda kalanlar Rahmi Sönmez ve Fehmi Gülmez adında iki sıkı arkadaşın hayatını anlatıyor roman. Tahsin Yücel kitabın giriş...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Bilinmeyen bir kadının mektubu",
        "url": "http://localhost:4000/jekyll/Bilinmeyen-bir-kad%C4%B1n%C4%B1n-mektubu/",
        "excerpt": "Kendimce okumada aklımda kalanlar Kitap 1920’lerde Stefan Zweig tarafından kaleme alınmış. Sadece hisler ve düşünceler üzerinden ilerlediği için dönemle ilgili...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Tenis notlar",
        "url": "http://localhost:4000/Tenis-notlar/",
        "excerpt": "Notlar Ağırlığı arka ayağa ver, vuruşlarda Serviste hız değil verimi arttır. İkide iki olmalı. Oynarken harekete odaklan ve stabilleştir. Sürekli...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Kitap arsivleri",
        "url": "http://localhost:4000/Kitap-arsivleri/",
        "excerpt": "Ücretsiz(birçoğu) olarak E Kitap tarama kaynakları http://e-booksland.com/ http://en.bookfi.org/ http://ebookee.org http://kat.cr/ http://pdfsb.net/ http://www.freebookspot.es/ http://appliedsciencefreelibraryguide.org/ http://avxhome.se/ebooks http://gendocs.ru/ (arayuzu rusca ama arama yapabilirsiniz)...",
        "teaser":
          
            null
          
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
