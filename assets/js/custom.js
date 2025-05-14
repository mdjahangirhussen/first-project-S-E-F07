$(document).ready(function () {
    "use strict";


    /*============================================
    	* Author		: # name#
    	* Template Name : name | HTML Template
    	* version		:1.0
    	
    ==============================================
    *========== TABLE OF CONTENTS ================

        0.0 Current Year 
        0.1 Preloader Js
    	0.2 Header bg-color change Js
    	0.3 Navbar-logo change Js
    	0.4 niceScroll Js
    	0.5 Fixed Top Navbar Js
        0.6	Isotope js
    	0.7 snakeify js
    	0.8 change is-checked class on buttons js
        0.9 scrolltop js

    ========================================*/
    
    //-------- 0.0 Current Year  --------
      document.getElementById("year").textContent = new Date().getFullYear();
    
    //-------- 0.1 preloader Js --------

    $(window).on("load", function () {
        $(".preloader").fadeOut('slow');
    });

    //-------- 0.2  Header bg-color change Js --------

    $('.toggle_bar').click(function () {
        $('.header-navbar').toggleClass('header-bg');
    });
    //-------- 0.3  Navbar-logo change Js --------


    $('.toggle_bar').click(function () {
        $('.navbar-logo img').toggleClass('logo_black');
    });


    //-------- 0.3  dropdown-menu slide Js --------  
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });
    //-------- 0.4  niceScroll Js -------- 
    $(function () {
        $("body").niceScroll({
            cursorborder: "1px solid #ffcf3b",
            cursorcolor: "#ffcf3b",
            cursorwidth: "6px",
            scrollspeed: 250,
            zindex: "9999",
            autohidemode: false,
            cursorborderradius: "2px",
            background: "#000",
            scrollbarid: false
        });
    });

});

//-------- 0.5 Fixed Top Navbar Js --------

$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 180) sticky.addClass('fixed')
    else sticky.removeClass('fixed');
});

//-------- 0.6  Isotope js  --------

$(function () {
    // isotope js 
    var $grid = $('.choose_demo').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        layoutMode: 'masonry'
    });
});

$(function () {
    // filter-button-group

    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue
        });
    });
});
//-------- 0.7  snakeify js  --------

$(".snake").snakeify({});

//-------- 0.8  change is-checked class on buttons js  --------

$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.btn-active').removeClass('btn-active');
        $(this).addClass('btn-active');
    });
});

//-------- 0.9 scrolltop js --------
$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});

$('.scrolltop').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});