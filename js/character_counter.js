(function(e){e.fn.characterCounter=function(){return this.each(function(){itHasLengthAttribute=e(this).attr("length")!=undefined;if(itHasLengthAttribute){e(this).on("input",a);e(this).on("focus",a);e(this).on("blur",c);b(e(this));}});};function a(){var f=+e(this).attr("length"),h=+e(this).val().length,g=h<=f;e(this).parent().find('span[class="character-counter"]').html(h+"/"+f);d(g,e(this));}function b(f){$counterElement=e("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);f.parent().append($counterElement);}function c(){e(this).parent().find('span[class="character-counter"]').html("");}function d(f,g){inputHasInvalidClass=g.hasClass("invalid");if(f&&inputHasInvalidClass){g.removeClass("invalid");}else{if(!f&&!inputHasInvalidClass){g.removeClass("valid");g.addClass("invalid");}}}e(document).ready(function(){e("input, textarea").characterCounter();});}(jQuery));