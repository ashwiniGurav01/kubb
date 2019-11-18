    $(document).ready(function() {
     
   //  $('#wrapper').addClass('expand');
	 
	 $(".continueRead").click(function(){
		 
		//$(".box").find(".info").addClass("slide");
		 $(this).parents("li").find(".info").addClass("slide");
	  });
	  
	  $(".closeInfo").click(function(){
		 $(this).parents("li").find(".info").removeClass("slide");
	  });
	  
	  $("#nav-icon3").click(function(){
		 $(".menu").slideToggle(1000);
		 
	  });
	  
 
	$('#nav-icon3').click(function(){
		
		$(this).toggleClass('open');
	});
 

      $('.bannerList.owl-carousel').owlCarousel({
		items: 1,
		loop:true,
		autoplay:true,
		nav:true,
		margin:0,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
		});

      $('.shotOuter.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navigation : true,
		pagination: true,
		responsive:{
			0:{
				items:5
			},
			320:{
				items:2
			},
			360:{
				items:2
			},
			480:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		}
		});
     
    });