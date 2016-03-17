$(document).ready(function() {



	var mobileMargin = parseInt($( ".leftbox" ).css('width').replace('px'));
	var mobileWidth = parseInt($( ".mobile" ).css('width').replace('px'));
	var mobileMiddle = ( (mobileWidth-mobileMargin) /2);
	var mobileWidthWoutMargin = mobileWidth-mobileMargin;
	var mobileRatio = mobileWidth - (2*mobileMargin);
	var rightClickPosition =  parseInt($( ".rightclick" ).css('right').replace('px'));
	var leftClickPosition =  parseInt($( ".leftclick" ).css('left').replace('px'));
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
if (is_safari)
		{$('.front').css('-webkit-backface-visibility','');
		$('.front').css('zIndex',41);	
			}
    

	$('.leftclick').click(function() {
				
		if (parseInt($( ".leftbox" ).css('left').replace('px')) >= mobileMiddle) 
			{// back to position
			 	$( ".leftbox" ).animate({ left : 0},500);
			 	$('.mobile ul').animate({ marginLeft : -mobileWidth},500);
			 	$('.s2').animate({ left : mobileWidthWoutMargin},500);
			 	$('.leftclick').css('zIndex','50').animate({ left : leftClickPosition},500);
			 		$( ".rightbox" ).css('z-index',50);
			$( ".calendarclick" ).css('z-index',50);
			
			
			}
		else 
			{// go to the end
				$( ".leftbox" ).animate({ left : mobileWidthWoutMargin},500);
				$('.mobile ul').animate({ marginLeft : -mobileMargin},500);
			 	$('.s2').animate({ left : mobileMargin},500);
				$('.leftclick').css('zIndex','52').animate({ left : mobileWidthWoutMargin+leftClickPosition},500);
			$( ".rightbox" ).css('z-index',0);
			$( ".calendarclick" ).css('z-index',0);
			
			}
	});
	
	
	$('.rightclick').click(function() {
	
		if (parseInt($( ".rightclick" ).css('right').replace('px')) >= mobileMiddle) 
			{// back to position
			 	$( ".rightbox" ).animate({ left : mobileWidthWoutMargin},500);
			 	$('.s3').animate({ marginLeft : 0},500);
			 	$('.s4').animate({ marginLeft : -mobileWidthWoutMargin},500);
			 	$( ".leftbox" ).css('z-index',50);
			$( ".calendarclick" ).css('z-index',50);
				$('.rightclick').css('zIndex','50').animate({ right : rightClickPosition},500);
			
			}
		else 
			{// go to the end
				$( ".rightbox" ).animate({ left : 0},500);
				$('.s3').animate({ marginLeft : -mobileWidthWoutMargin},500);
			 	$('.s4').animate({ marginLeft : -mobileMargin},500);
			 	$( ".leftbox" ).css('z-index',0);
			$( ".calendarclick" ).css('z-index',0);
			
				$('.rightclick').css('zIndex','52').animate({ right : mobileWidthWoutMargin+rightClickPosition},500);
			
			}
	});


	$('.calendarclick').click(function() {
		
																$('#card').toggleClass('flipped');
	});


	$( ".leftbox" ).draggable({ axis: "x",containment: "parent",drag: function( event, ui ) {
		
		
		if (parseInt($( ".leftbox" ).css('left').replace('px')) >= mobileMiddle)
			{$( ".rightbox" ).css('z-index',0);
			$( ".calendarclick" ).css('z-index',0);
			$('.leftclick').css('z-index','52');
			
			}
		else
			{$( ".rightbox" ).css('z-index',50);
			$( ".calendarclick" ).css('z-index',50);
			
			$('.leftclick').css('z-index','50');
				
			}
		
		$('.mobile ul').css('marginLeft',-mobileWidth+parseInt($( ".leftbox" ).css('left').replace('px')));
		$('.s2').css('left',mobileWidthWoutMargin-(parseInt($( ".leftbox" ).css('left').replace('px')) * (mobileRatio/mobileWidthWoutMargin) ));
		
	},stop: function(event,ui) {
		
		if (parseInt($( ".leftbox" ).css('left').replace('px')) <= mobileMiddle) 
			{// back to position
			 	$( ".leftbox" ).animate({ left : 0},500);
			 	$('.mobile ul').animate({ marginLeft : -mobileWidth},500);
			 	$('.s2').animate({ left : mobileWidthWoutMargin},500);
			 	$('.leftclick').css('zIndex','50').animate({ left : leftClickPosition},500);
		
			}
		else 
			{// go to the end
				$( ".leftbox" ).animate({ left : mobileWidthWoutMargin},500);
				$('.mobile ul').animate({ marginLeft : -mobileMargin},500);
			 	$('.s2').animate({ left : mobileMargin},500);
			 	$('.leftclick').css('zIndex','52').animate({ left : mobileWidthWoutMargin+leftClickPosition},500);
		
				
			}
		
	} });
	
	
	$( ".rightbox" ).draggable({ axis: "x",containment: "parent",drag: function( event, ui ) {
		
		if (parseInt($( ".rightbox" ).css('left').replace('px')) >= mobileMiddle)
			{$( ".leftbox" ).css('z-index',50);
			$( ".calendarclick" ).css('z-index',0);
			$('.rightclick').css('z-index',52);
			}
		else
			{$( ".leftbox" ).css('z-index',0);
			$( ".calendarclick" ).css('z-index',50);
			
			$('.rightclick').css('z-index',50);
			
			}
			
		
		$('.s3').css('marginLeft',-mobileWidthWoutMargin+parseInt($( ".rightbox" ).css('left').replace('px')));
		$('.s4').css('marginLeft',-mobileWidthWoutMargin-((parseInt($( ".rightbox" ).css('left').replace('px'))-mobileWidthWoutMargin) * (mobileRatio/mobileWidthWoutMargin) ) );
		
		// -170 -> -30
		
		
		
	},stop: function(event,ui) {
		
		if (parseInt($( ".rightbox" ).css('left').replace('px')) >= mobileMiddle) 
			{// back to position
			 	$( ".rightbox" ).animate({ left : mobileWidthWoutMargin},500);
			 	$('.s3').animate({ marginLeft : 0},500);
			 	$('.s4').animate({ marginLeft : -mobileWidthWoutMargin},500);
			 				$( ".calendarclick" ).css('z-index',50);

			 		$('.rightclick').css('zIndex','50').animate({ right : rightClickPosition},500);
					
			}
		else 
			{// go to the end
				$( ".rightbox" ).animate({ left : 0},500);
				$('.s3').animate({ marginLeft : -mobileWidthWoutMargin},500);
			 	$('.s4').animate({ marginLeft : -mobileMargin},500);
			 		$('.rightclick').css('zIndex','52').animate({ right : mobileWidthWoutMargin+rightClickPosition},500);
		
							$( ".calendarclick" ).css('z-index',0);

			}
		
	} });

});