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
    mensajeSliderHome : function () {
        $('.btn-mensaje').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
        });
    },
    filterCaregoriaHome : function () {
        $( ".box-galeria .nav-pills a" ).click(function( event ) {
            console.log('click');
            event.preventDefault();
        });
    },
    filtroResultadosHome : function () {
        var filterActive;

        function filterCategory(category) {
            if (filterActive != category) {
                
                $('.filter-cat-results .f-cat').removeClass('active');
                $('.filter-cat-results .f-cat')
                    .filter('[data-cat="' + category + '"]')
                    .addClass('active');
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
    toggleFlipCard : function () {
        $(".card-flip").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("flipped");
        });
    },
    linkCard : function () {
        $(".btn-explorar").bind('click', function() {
            console.log('url');
            window.location.href = $(this).attr('href');
        });
    },
}

$(function () {
    console.log('ready');    
    MyApp.slider();
    MyApp.filtros();
    MyApp.toggeMenu();
    MyApp.searchBox();
    MyApp.filtroResultadosHome();
    MyApp.filterCaregoriaHome();
    MyApp.mensajeSliderHome();
    MyApp.toggleFlipCard();
    MyApp.linkCard();

    if ($('.page').length) {
        MyApp.carruselBusqueda();
    }

});