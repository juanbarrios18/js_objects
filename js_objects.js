//****  EXERCISE 2 */
    var someobject = {
        friends: [
            {name: "Malfoy"},
            {name: "Crabbe"},
            {name: "Goyle"}
        ],
        color: "Baby blue",
        isEvil: true

    };
    // code to get MALFOY someobject.friends[0]


    //*** MOVIEDB */
    var movies = [
        {
            title: "Braveheart",
            hasWatched: true,
            rating: 5
        },
        {
            title: "The Patriot",
            hasWatched: true,
            rating: 5
        },
        {
            title: "Batman",
            haswatched: false,
            rating: 3.5
        }

    ];
    movies.forEach(function(movie){
        var result = "You have ";
        if(movie.hasWatched){
            result += "watched "
        }
        else{
            result += "not seen "
        };
        result += "\"" + movie.title + "\"" + " - ";
        result += movie.rating + " stars.";
        console.log(result);
    })