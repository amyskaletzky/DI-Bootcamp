"use strict"

var dot = $("#dot ul li");
var contents = $("#contents > div");

dot.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = contents.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop: offset }, 600, "easeInOutExpo");
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll >= contents.eq(0).offset().top) {
        dot.removeClass("active");
        dot.eq(0).addClass("active");
    }
    if (wScroll >= contents.eq(1).offset().top) {
        dot.removeClass("active");
        dot.eq(1).addClass("active");
    }
    if (wScroll >= contents.eq(2).offset().top) {
        dot.removeClass("active");
        dot.eq(2).addClass("active");
    }
    if (wScroll >= contents.eq(3).offset().top) {
        dot.removeClass("active");
        dot.eq(3).addClass("active");
    }
    if (wScroll >= contents.eq(4).offset().top) {
        dot.removeClass("active");
        dot.eq(4).addClass("active");
    }
    if (wScroll >= contents.eq(5).offset().top) {
        dot.removeClass("active");
        dot.eq(5).addClass("active");
    }

    if (wScroll >= contents.eq(0).offset().top - $(window).height() / 3) {
        contents.eq(0).find("h2").addClass("show");
    }
    if (wScroll >= contents.eq(1).offset().top - $(window).height() / 3) {
        contents.eq(1).find("h2").addClass("show");
    }
    if (wScroll >= contents.eq(2).offset().top - $(window).height() / 3) {
        contents.eq(2).find("h2").addClass("show");
    }
    if (wScroll >= contents.eq(3).offset().top - $(window).height() / 3) {
        contents.eq(3).find("h2").addClass("show");
    }
    if (wScroll >= contents.eq(4).offset().top - $(window).height() / 3) {
        contents.eq(4).find("h2").addClass("show");
    }
    if (wScroll >= contents.eq(5).offset().top - $(window).height() / 3) {
        contents.eq(5).find("h2").addClass("show");
    }


});