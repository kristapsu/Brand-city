// IMAGE ROTATION 


var imageArray = new Array(); // leave as is.

// Specify number of milliseconds between image switches.
var switchMilliseconds = 10000;

// Specify the id of the div or other HTML tag with the 
//   background image to switch.

var divID = 'slideshow';

// To add more images, continue the pattern below.

imageArray[0] = 'img/header-background-1.png';
imageArray[1] = 'img/header-background-2.png';
imageArray[2] = 'img/header-background-3.png';

// No further customization needed in this JavaScript

function publishPicture(i) {
document.getElementById(divID).style.background = 'url("'+imageArray[i]+'")';
i++;
if( i > (imageArray.length - 1) ) { i = 0; }
setTimeout('publishPicture('+i+')',switchMilliseconds);
}
publishPicture(0);











// KNOB 

$(function($) {

                $(".knob").knob({
                    change : function (value) {
                        //console.log("change : " + value);
                    },
                    release : function (value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel : function () {
                        console.log("cancel : ", this);
                    },
                    /*format : function (value) {
                        return value + '%';
                    },*/
                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

                // Example of infinite knob, iPod click wheel
                var v, up=0,down=0,i=0
                    ,$idir = $("div.idir")
                    ,$ival = $("div.ival")
                    ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
                    ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
                $("input.infinite").knob(
                                    {
                                    min : 0
                                    , max : 20
                                    , stopper : false
                                    , change : function () {
                                                    if(v > this.cv){
                                                        if(up){
                                                            decr();
                                                            up=0;
                                                        }else{up=1;down=0;}
                                                    } else {
                                                        if(v < this.cv){
                                                            if(down){
                                                                incr();
                                                                down=0;
                                                            }else{down=1;up=0;}
                                                        }
                                                    }
                                                    v = this.cv;
                                                }
                                    });
            });



// KNOB STYLES OVERRIDE


$( document ).ready(function() {
 
$(".knob").css('font-size','30px');
$(".knob").css('height','28px');
$(".knob").css('margin-top','22px');

});











// RATY

$(function()
		{
			/*
				Predefined score with half star,
				score : You can pass any value for it, not necessarily,
						a data- value.
						You can use a rating-score too.
						but then 
						code will be return $(this).attr('rating-score');
				half 	: that will enable user to add half star rating
				target  : define the rating hint container
				targetKeep : this will allow used to
					keep selected result inside hint container
					defining false will loose selected value
			*/

			$('.js-stars').raty(
			{
			    readOnly: true,
				path: 'lib/raty-2.7.0/lib/images',
				half: true,
				score: function()
				{
					return $(this).attr('data-score');
				}

			});
			
		});
		
		
		
	// OWL CAROUSEEL
	
	
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
    items : 5,
    pagination : false,
    baseClass : 'myClass'
  });
 
  $('.link').on('hover', function(event){
    var $this = $(this);
    if($this.hasClass('clicked')){
      $this.addClassActive;
    } else{
      $this.css('background','#7fc242');
    }
  });
 
});