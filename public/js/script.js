jQuery(document).ready(function(){
    
    $(document).on('click', '#fd-toggle-open', function(){
      
      $('#fd-nav').addClass("w3-show");
      $(this).attr("id", "fd-toggle-close");
      $(this).find(" i").removeClass("fa fa-bars").addClass(" fa fa-times");

      $(document).on('click', '#fd-toggle-close', function(){
        $('#fd-nav').removeClass('w3-show');
        $(this).attr('id', 'fd-toggle-open');
        $(this).find(' i').removeClass('fa fa-times').addClass(' fa fa-bars');
      });

      $(document).on('click', '.fd-nav-close', function(){
        $('#fd-nav').removeClass('w3-show');
        $('#fd-toggle-close').attr('id', 'fd-toggle-open');
        $('#fd-toggle-open').find(' i').removeClass('fa fa-times').addClass(' fa fa-bars');
      });

    });

    var currentYear = (new Date).getFullYear();
    $('#currentYear').text(currentYear);

    $(document).on('click', '.fd-btn-modal', function(e){
      $('#fd-modal').show();


      $(document).on('click', '.fd-close-modal', function(){
        $('#fd-modal').hide();
      });
      e.preventDefault();
    });
    // $(document).on('click', '.mer-disable', function(event){
    //   $('#modal-disable').show();
      
    //   $('.w3-modal-close').click(function(){
    //     $('#modal-disable').hide();
    //   });
    //   event.preventDefault();
    // });
});