import { validations } from "./formValidation.js";
import { openNav } from "./sideNav.js";
import { getMovie , searchMovie } from "./moviesData.js";
import { getMovieAttr, navGetSection, scroll, topZero } from "./scroll.js";
validations();
scroll();
getMovie("movie/now_playing");
$('.nav-menu').on('click' , function () {
    openNav();
});

$('.menu a').on('click' , function () {
    getMovieAttr();
});

$('.menu li a').on('click' , function () {
    navGetSection();
});

$('#back-to-top').on('click' , function () {
    topZero();
});

$('#search').on("input", e => {
    searchMovie(e.target.value);
    if(e.target.value == "")
    {
        getMovie("movie/now_playing");
    }
});

$(document).ready(function(){
    $('.loading').fadeOut(2000)
})