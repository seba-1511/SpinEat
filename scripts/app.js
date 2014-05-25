var menus = [
    'Sportif',
    'En 2 min',
    'Léger',
    'Valaisan',
    'En amoureux',
    'Noël',
    'Start Up',
    'Pacques',
    'Desserts',
];

var elements = [{
    name: 'Carottes',
    image: 'http://recette1.supertoinette.com/66920/thumb/300/-/66920-carotte.jpg'
}, {
    name: 'Pommes de terre',
    image: 'http://img.welt.de/img/wirtschaft/crop117702446/3309847306-ci3x2s-w300/Kartoffel.jpg'
}, {
    name: 'Pâtes',
    image: 'http://www.asilatrading.com/wp-content/uploads/2013/05/Spaghetti-al-rafano.jpg'
}, {
    name: 'Artichauds',
    image: 'http://www.bienfaits.fr/files/2010/02/artichaut.jpg'
}, {
    name: 'Boeuf',
    image: 'http://www.latelierdessaveurs-maurice.com/_dynamique/gestionContenus02/zoom/viande-de-boeuf-27.jpg'
}, ];

var tinderInit = function() {

    $(document)
        .on('swipeleft', function() {
            loadNext();
        });

    $(document)
        .on('swiperight', function() {
            loadNext();
        });
};

var removeSwipeHandlers = function() {
    $(document)
        .off('swipeleft');
    $(document)
        .off('swiperight');
};

var listIndex = 1;

var loadNext = function() {
    tinderInit();
    if (listIndex >= elements.length) {
        removeSwipeHandlers();
        jQuery.mobile.changePage('suggestion.html');
        return false;
    }
    var currItem = elements[listIndex];
    var diagram = '<div class="ui-btn"><h2>' + currItem.name +
        ' ?</h2><br /><img src="' + currItem.image +
        '" style="max-width:300px;" /></div class="ui-btn">';
    $('#image-desc')
        .html(diagram);
    listIndex++;

};

var moveRecipe = function() {
    jQuery.mobile.changePage('recipe.html');
};

var startCooking = function() {
    // Code.photoSwipe('a', '#steps-cook');
    jQuery("#steps-cook a")
        .photoSwipe({
            getImageCaption: function(item) {
                return jQuery(item)
                    .attr('rel');
            }
        });
    jQuery('#first-image')
        .click();
};
