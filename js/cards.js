(function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){if(a(this).find(".card-reveal").length){if(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))){a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:false,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"});}});}else{if(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i"))){a(this).find(".card-reveal").css({display:"block"}).velocity("stop",false).velocity({translateY:"-100%"},{duration:300,queue:false,easing:"easeInOutQuad"});}}}});});}(jQuery));