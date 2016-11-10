$(document).ready(function(){

      setTimeout(function(){
        console.log("getting here");
         $(document).createTextPrev();
      }, 1000);
     

      /*========= Search weather  ========= **/

      $(".add-new-content").click(function(){
        $(".modal").toggle();        

        });

      $(".done").click(function(){
        $(".modal").toggle();
        $(document).createTextPrev();
      });

      $(".about").click(function(){
        $(".about-content").slideToggle();
      });


});

(function($){
  $.fn.createTextPrev = function(){
  $('.item').each(function(event){ /* select all divs with the item class */
  
    var max_length = 150;
    
    if($(this).html().length > max_length){
      
      var short_content   = $(this).html().substr(0,max_length); /* split the content in two parts */
      var long_content  = $(this).html().substr(max_length);
      
      $(this).html(short_content+
             '<p><a class="btn btn-default read_more" href="#" role="button">View details &raquo;</a></p>'+
             '<span class="more_text" style="display:none;">'+long_content+'</span>');
             
      $(this).find('a.read_more').click(function(event){
 
        event.preventDefault();
        $(this).hide(); /* hide the read more button */
        $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */
     
      });
      
    }
    
  });
 } 

})( jQuery );