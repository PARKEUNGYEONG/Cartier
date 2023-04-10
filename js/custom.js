$(document).ready(function(){
    var width = $(window).width();

    if(width >= 1400){

      $('article').on('mouseenter', function(){
        $(this).stop().animate({'width': '30%'}, 1000);
      });
      $('article').on('mouseleave', function(){
        $(this).stop().animate({'width': '15%'}, 650);
      });

    }else if(width >= 1050 && width < 1400){

      $('article').on('mouseenter', function(){
        $(this).stop().animate({'width': '25%'}, 1000, function(){
          $(this).find('h3').stop().animate({'left':'20px', 'opacity':'0.8'}, 600);
          $(this).find('h2').stop().animate({'right':'20px', 'opacity':'0.9'}, 400);
          $(this).find('p').stop().animate({'right':'20px', 'opacity':'0.7'}, 800);
          $(this).find('a').stop().animate({'bottom':'20%', 'opacity':'1'}, 400);
        });
        $(this).find('video').stop().animate({'opacity':'0.75'}, 1500);
        $(this).find('div').stop().animate({'width':'100%', 'opacity':'0.85'}, 800);
      });
      $('article').on('mouseleave', function(){
        $(this).stop().animate({'width': '15%'}, 650, function(){
          $(this).find('video').stop().animate({'opacity':'0'}, 1200);
          $(this).find('h3').stop().animate({'left':'-320px', 'opacity':'0'}, 400);
          $(this).find('a').stop().animate({'bottom':'0', 'opacity':'0'}, 400);
        });
        $(this).find('h2').stop().animate({'right':'-320px', 'opacity':'0'}, 200);
        $(this).find('p').stop().animate({'right':'-320px', 'opacity':'0'}, 400);
        $(this).find('div').stop().animate({'width':'0', 'opacity':'0'}, 600);
      });

    }else if(width >= 600 && width < 1050){

      $('article').on('mouseenter', function(){
        $(this).stop().animate({'height': '35%'}, 1000);
      });
      $('article').on('mouseleave', function(){
        $(this).stop().animate({'height': '15%'}, 650);
      });

    }else if(width >= 300 && width < 600){

      $('article').on('mouseenter', function(){
        $(this).stop().animate({'height': '35%'}, 1000);
      });
      $('article').on('mouseleave', function(){
        $(this).stop().animate({'height': '15%'}, 650);
      });

    }
});
