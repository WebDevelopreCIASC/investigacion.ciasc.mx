(function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(d){var e=a(this);e.addClass("parallax");function c(o){var l;if(b<601){l=(e.height()>0)?e.height():e.children("img").height();}else{l=(e.height()>0)?e.height():500;}var g=e.children("img").first();var i=g.height();var n=i-l;var h=e.offset().top+l;var q=e.offset().top;var k=a(window).scrollTop();var f=window.innerHeight;var j=k+f;var p=(j-q)/(l+f);var m=Math.round((n*p));if(o){g.css("display","block");}if((h>k)&&(q<(k+f))){g.css("transform","translate3D(-50%,"+m+"px, 0)");}}e.children("img").one("load",function(){c(true);}).each(function(){if(this.complete){a(this).load();}});a(window).scroll(function(){b=a(window).width();c(false);});a(window).resize(function(){b=a(window).width();c(false);});});};}(jQuery));