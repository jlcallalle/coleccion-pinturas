// Main

var MyApp = {

    slider : function () {
        $('.carousel').carousel({
            interval: 6000,
            pause: "false"
        });
        
        $('.carousel .carousel-item').each(function() {
            var indice = $(this).index() + 1;
            var cantidad = $('.carousel-item').length;
            $(this).find(".carousel-caption").append( "<div class='slider-number'>" + "<span class='indice'>" + indice + "</span>"  + "<i class='slash'> / </i>" + "<span class='cantidad'>" + cantidad + "</span>" + "</div>" );
        });
    },
    filtros : function () {
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
        });
    
        $('.filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            console.log( 'valor', filterValue );
            $grid.isotope({ filter: filterValue });
        });

        /* $('.filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            console.log( 'valor', filterValue );
            $grid.isotope({ filter: filterValue });
        }); */

    },
    toggeMenu : function () {
        $('.button-nav--toggle').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
        });
    },
    searchBox : function () {
        var submitIcon = $('.searchbox-icon');
        var inputBox = $('.searchbox-input');
        var searchBox = $('.searchbox');
        var isOpen = false;
        console.log('isOpen', isOpen);
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('searchbox-open');
                inputBox.focus();
                isOpen = true;
            } else {
                searchBox.removeClass('searchbox-open');
                inputBox.focusout();
                isOpen = false;
            }
        });  
    
        submitIcon.mouseup(function(){
            console.log('submitIcon mouseup');
            return false;
        });
    
        searchBox.mouseup(function(){
             console.log('searchBox mouseup');
             return false;
        });
    
        $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','flex');
                submitIcon.click();
            }
        });
    },
    filtroResultados : function () {
        var filterActive;

        function filterCategory(category) {
            if (filterActive != category) {
                
                // reset results list
                $('.filter-cat-results .f-cat').removeClass('active');
                
                // elements to be filtered
                $('.filter-cat-results .f-cat')
                    .filter('[data-cat="' + category + '"]')
                    .addClass('active');
                
                // reset active filter
                filterActive = category;
                $('.filtering button').removeClass('active');
            }
        }
    
        $('.f-cat').addClass('active');
    
        $('.filtering button').click(function() {
            if ($(this).hasClass('cat-all')) {
                $('.filter-cat-results .f-cat').addClass('active');
                filterActive = 'cat-all';
                $('.filtering button').removeClass('active');
            } else {
                filterCategory($(this).attr('data-cat'));
            }
            $(this).addClass('active');
        });
    
    },
    carruselBusqueda : function () {
          /* Slider Buscador */
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                margin:10,
                nav: true,
                dots: false, 
                navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
                loop: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            })
    },
}

$(function () {
    console.log('ready');    
    if ($('.only-numbers').length) {
        MyApp.onlyNumbers();
    }

    MyApp.slider();
    MyApp.filtros();
    MyApp.toggeMenu();
    MyApp.searchBox();
    MyApp.filtroResultados();
    if ($('.page').length) {
        MyApp.carruselBusqueda();
    }

    $( ".box-galeria a" ).click(function( event ) {
        console.log('click');
        event.preventDefault();
    });
  
    

    $('.btn-mensaje').on('click', function(e) {
        console.log('clik btn mnensaje');
        e.preventDefault();
        $(this).toggleClass('active');
    });


  /*   var widthViewport = $(window).width();
    console.log(widthViewport); 
    var espacioRightVieport = widthViewport - 1140
    var espacioTotal = espacioRightVieport -140
    console.log(espacioTotal);  */

    $('.item-obra').click(function() {
        console.log('click flip');
        $(this).toggleClass('flip')  
    });



});