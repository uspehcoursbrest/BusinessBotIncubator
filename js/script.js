$(document).ready(function () {

// аккордион новостей
    var mainAccord = $('.news .item_news');
    mainAccord.find('.newsHeader:not(.active)').siblings('div').stop().slideUp();
    mainAccord.find('.newsHeader').on('click', function () {
        $('.newsHeader').removeClass('active');
        $(this).addClass('active');
        mainAccord.find('.newsHeader:not(.active)').siblings('.newsContent').stop().slideUp();
        mainAccord.find('.newsHeader.active').siblings('.newsContent').stop().slideDown();
    });
//аккордион FAQ
    var accordFaq = $('.questLeft > div, .questRight > div');
    accordFaq.find('.questionItem:not(.active)').siblings('div').stop().slideUp();
    accordFaq.find('.questionItem').on('click', function () {
        $(this).find('.questionMark').css({background: 'rgba(1,1,1,0'});
        $('.questionItem').removeClass('active').css({background: 'linear-gradient(to right, rgba(80,189,239,1) 0%,rgba(128,97,220,1) 100%)'});
        $(this).addClass('active');
        accordFaq.find('span').css({color: '#ffffff'})
        accordFaq.find('.questionItem:not(.active)').css({background: '#ffffff'});
        accordFaq.find('.questionItem:not(.active)').find('span').css({color: 'inherit'});
        accordFaq.find('.questionItem:not(.active)').siblings('.answer').stop().slideUp();
        accordFaq.find('.questionItem:not(.active)').find('.questionMark').css({background: 'linear-gradient(122deg, rgba(80,189,239,1) 0%,rgba(128,97,220,1) 100%)'});
        accordFaq.find('.questionItem.active').siblings('.answer').stop().slideDown();
    });


// слайдер
    var $range = $("#depCalc"),
        $input = $("#sum"),
        instance,
        min = 0,
        max = 1000;

    $range.ionRangeSlider({
        grid_num: 51,
        min: 51,
        max: 100,
        from: 83,
        grid: true,
        postfix: "$",
        onStart: function (data) {
            $input.prop("value", data.from);
        },
        onChange: function (data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("change keyup", function () {
        var val = $(this).prop("value");
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
        instance.update({
            from: val
        });
    });

//Языr
    $( ".activelang" ).click(function() {
        $( "#slideDown" ).stop().slideToggle( function() {
        });
    });
//Табы
    $('#tabs').tabs()
    document.getElementById("profit").innerHTML = '122.56$';

    $(".activeList").click(function() {
        $(this).siblings("li").slideToggle( function() {
        });
    });
    $(".activeBot").click(function() {
        $(this).siblings("li").stop().slideToggle( function() {
        });
    });
});

