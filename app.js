$(() => {

// On click of this button, the API returns a random beer from catalogue

        $('#randomButton').on('click', (event) => {

        $.ajax({
            url:'https://api.punkapi.com/v2/beers/random'})
            .then(
                (data) => {
                    const $newArray = data.map((i) => {

                        const $name = i.name;
                        const $tagline = i.tagline;
                        const $description = i.description;
                        const $contributor = i.contributed_by;
                        const $foodPairing = i.food_pairing;


                        const $randomModalText = $('<div>').addClass('modalText').html('<h1>'+ $name +'</h1><h2>'+ $tagline + '</h2><br><p>' + $description + '</p><br><h2>Pair with: </h2><p>' + $foodPairing + '<br> Contributed by: ' + $contributor + '<br><a class="close" href="#close">Close</a></p>');

                    $('#modalRandom').children().remove();
                    $('#modalRandom').append($randomModalText);

                    $('#modalRandom').css('display', 'block');
                    const $closeBtn = $('.close');
                    $closeBtn.on('click', () => {
                    $('#modalRandom').css('display', 'none');

                    });
                });
            });
        });
// Input from the search bars is taken and matches are returned from catalogue

        const $beerButton = $('#searchBeerButton');
        const $foodButton = $('#searchFoodButton');

// Code below handles the 'search by beer'


        $beerButton.on('click', () => {

            const $beer = $('#searchBeer').val();

            $.ajax({
                url:'https://api.punkapi.com/v2/beers?beer_name='+$beer})
                .then(
                    (data) => {
                        const $newArray = data.map((i) => {

                        const $name = i.name;
                        const $tagline = i.tagline;
                        const $description = i.description;
                        const $contributor = i.contributed_by;
                        const $foodPairing = i.food_pairing;

                        const $beerModalText = $('<div>').addClass('modalText').html('<h1>'+ $name +'</h1><h2>'+ $tagline + '</h2><br><p>' + $description + '<br><h2> Pair with: </h2><p>' + $foodPairing + '<br> Contributed by: ' + $contributor + '<br><a class="close" href="#close">Close</a></p>');

                        $('#modalBeer').children().remove();
                        $('#modalBeer').append($beerModalText);

                        $('#modalBeer').css('display', 'block');

                        const $closeBtn = $('.close');
                            $closeBtn.on('click', () => {
                                $('#modalBeer').css('display', 'none');
                                    });
                                });
                            });
                        });

// Code below handles the search by food pairing

        $foodButton.on('click', () => {

            const $food = $('#searchFood').val();

            $.ajax({
                url:'https://api.punkapi.com/v2/beers?food='+$food})
                .then(
                    (data) => {
                        const $newArray = data.map((i) => {

                        const $name = i.name;
                        const $tagline = i.tagline;
                        const $description = i.description;
                        const $contributor = i.contributed_by;
                        const $foodPairing = i.food_pairing;


                        const $foodModalText = $('<div>').addClass('modalText').html('<h1>'+ $name +'</h1><h2>'+ $tagline + '</h2><br><p>' + $description + '<br><h2>Pair with: </h2><p>' + $foodPairing + '<br>Contributed by: ' + $contributor + '<br><a class="close" href="#close">Close</a></p>');

                        $('#modalFood').append($foodModalText);

                        $('#modalFood').css('display', 'block');

                        const $closeBtn = $('.close');
                            $closeBtn.on('click', () => {
                                $('#modalFood').css('display', 'none');
                                });
                            });
                        });
                });
        });



// This code will cause the button on each modal to close only the div it is connected to

// $closeBtn.on('click', (event) => {
//     event.target.closest('div').remove();
