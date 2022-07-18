$(document).ready(function() {

    $slot_img_list1 = {
        logo1 : {url: 'www.google.com', img: './images/01.png'},
        logo2 : {url: 'www.google.com', img: './images/02.png'},
        logo3 : {url: 'www.google.com', img: './images/03.png'},
        logo4 : {url: 'www.google.com', img: './images/04.png'},
        logo5 : {url: 'www.google.com', img: './images/05.png'},
        logo6 : {url: 'www.google.com', img: './images/06.png'},
        logo7 : {url: 'www.google.com', img: './images/07.png'},
        logo8 : {url: 'www.google.com', img: './images/08.png'},
        logo9 : {url: 'www.google.com', img: './images/09.png'},
        logo10 : {url: 'www.google.com', img: './images/10.png'},
        logo11 : {url: 'www.google.com', img: './images/11.png'},
    };

    $slot_img_list2 = {
        logo1 : {url: 'www.google.com', img: './images/12.png'},
        logo2 : {url: 'www.google.com', img: './images/13.png'},
        logo3 : {url: 'www.google.com', img: './images/14.png'},
        logo4 : {url: 'www.google.com', img: './images/15.png'},
        logo5 : {url: 'www.google.com', img: './images/16.png'},
        logo6 : {url: 'www.google.com', img: './images/17.png'},
        logo7 : {url: 'www.google.com', img: './images/18.png'},
        logo8 : {url: 'www.google.com', img: './images/19.png'},
        logo9 : {url: 'www.google.com', img: './images/20.png'},
        logo10 : {url: 'www.google.com', img: './images/21.png'},
        logo11 : {url: 'www.google.com', img: './images/22.png'},
    };
    
    $slot_img_list3 = {
        logo1 : {url: 'www.google.com', img: './images/23.png'},
        logo2 : {url: 'www.google.com', img: './images/24.png'},
        logo3 : {url: 'www.google.com', img: './images/25.png'},
        logo4 : {url: 'www.google.com', img: './images/26.png'},
        logo5 : {url: 'www.google.com', img: './images/27.png'},
        logo6 : {url: 'www.google.com', img: './images/28.png'},
        logo7 : {url: 'www.google.com', img: './images/29.png'},
        logo8 : {url: 'www.google.com', img: './images/30.png'},
        logo9 : {url: 'www.google.com', img: './images/31.png'},
        logo10 : {url: 'www.google.com', img: './images/32.png'},
        logo11 : {url: 'www.google.com', img: './images/33.png'},
    };
    
    $slot_img_list4 = {
        logo1 : {url: 'www.google.com', img: './images/34.png'},
        logo2 : {url: 'www.google.com', img: './images/35.png'},
        logo3 : {url: 'www.google.com', img: './images/36.png'},
        logo4 : {url: 'www.google.com', img: './images/37.png'},
        logo5 : {url: 'www.google.com', img: './images/38.png'},
        logo6 : {url: 'www.google.com', img: './images/39.png'},
        logo7 : {url: 'www.google.com', img: './images/40.png'},
        logo8 : {url: 'www.google.com', img: './images/41.png'},
        logo9 : {url: 'www.google.com', img: './images/42.png'},
        logo10 : {url: 'www.google.com', img: './images/43.png'},
        logo11 : {url: 'www.google.com', img: './images/44.png'},
    };
    
    $slot_img_list5 = {
        logo1 : {url: 'www.google.com', img: './images/45.png'},
        logo2 : {url: 'www.google.com', img: './images/46.png'},
        logo3 : {url: 'www.google.com', img: './images/47.png'},
        logo4 : {url: 'www.google.com', img: './images/48.png'},
        logo5 : {url: 'www.google.com', img: './images/49.png'},
        logo6 : {url: 'www.google.com', img: './images/50.png'},
        logo7 : {url: 'www.google.com', img: './images/51.png'},
        logo8 : {url: 'www.google.com', img: './images/52.png'},
        logo9 : {url: 'www.google.com', img: './images/53.png'},
        logo10 : {url: 'www.google.com', img: './images/54.png'},
        logo11 : {url: 'www.google.com', img: './images/55.png'},
    };

    var logo_index = 4;

    setInterval(function() {

        $('.thumbScroller1 > div:nth-child(1)').fadeOut('1000', function() { 

            $('.thumbScroller1 > div:nth-child(2)').removeClass('content-item-active');
            $('.thumbScroller1 > div:nth-child(2)').addClass('content-item');
            $('.thumbScroller1 > div:nth-child(2)').animate({top: '50px'});
            $('.thumbScroller1 > div:nth-child(3)').removeClass('content-item');
            $('.thumbScroller1 > div:nth-child(3)').addClass('content-item-active');
            $('.thumbScroller1 > div:nth-child(3)').animate({top: '50px'});
            $('.thumbScroller1 > div:nth-child(1)').remove();
            $('.thumbScroller1').append('<div class="content-item">\
                                            <a href="#">\
                                                <img src="' + $slot_img_list1['logo' + logo_index].img + '" title="Dusk" alt="Dusk" class="thumb" />\
                                            </a>\
                                        </div>');
        });
        $('.thumbScroller2 > div:nth-child(1)').fadeOut('1000', function() { 
            $('.thumbScroller2 > div:nth-child(2)').removeClass('content-item-active');
            $('.thumbScroller2 > div:nth-child(2)').addClass('content-item');
            $('.thumbScroller2 > div:nth-child(2)').animate({top: '50px'});
            $('.thumbScroller2 > div:nth-child(3)').removeClass('content-item');
            $('.thumbScroller2 > div:nth-child(3)').addClass('content-item-active');
            $('.thumbScroller2 > div:nth-child(3)').animate({top: '50px'});
            $('.thumbScroller2 > div:nth-child(1)').remove();
            $('.thumbScroller2').append('<div class="content-item">\
                                            <a href="#">\
                                                <img src="' + $slot_img_list2['logo' + logo_index].img + '" title="Dusk" alt="Dusk" class="thumb" />\
                                            </a>\
                                        </div>');
        });
        $('.thumbScroller3 > div:nth-child(1)').fadeOut('1000', function() { 
            $('.thumbScroller3 > div:nth-child(2)').removeClass('content-item-active');
            $('.thumbScroller3 > div:nth-child(2)').addClass('content-item');
            $('.thumbScroller3 > div:nth-child(2)').animate({top: '50px'});
            $('.thumbScroller3 > div:nth-child(3)').removeClass('content-item');
            $('.thumbScroller3 > div:nth-child(3)').addClass('content-item-active');
            $('.thumbScroller3 > div:nth-child(3)').animate({top: '50px'});
            $('.thumbScroller3 > div:nth-child(1)').remove();
            $('.thumbScroller3').append('<div class="content-item">\
                                            <a href="#">\
                                                <img src="' + $slot_img_list3['logo' + logo_index].img + '" title="Dusk" alt="Dusk" class="thumb" />\
                                            </a>\
                                        </div>');
        });
        $('.thumbScroller4 > div:nth-child(1)').fadeOut('1000', function() { 
            $('.thumbScroller4 > div:nth-child(2)').removeClass('content-item-active');
            $('.thumbScroller4 > div:nth-child(2)').addClass('content-item');
            $('.thumbScroller4 > div:nth-child(2)').animate({top: '50px'});
            $('.thumbScroller4 > div:nth-child(3)').removeClass('content-item');
            $('.thumbScroller4 > div:nth-child(3)').addClass('content-item-active');
            $('.thumbScroller4 > div:nth-child(3)').animate({top: '50px'});
            $('.thumbScroller4 > div:nth-child(1)').remove();
            $('.thumbScroller4').append('<div class="content-item">\
                                            <a href="#">\
                                                <img src="' + $slot_img_list4['logo' + logo_index].img + '" title="Dusk" alt="Dusk" class="thumb" />\
                                            </a>\
                                        </div>');
        });
        $('.thumbScroller5 > div:nth-child(1)').fadeOut('1000', function() { 
            $('.thumbScroller5 > div:nth-child(2)').removeClass('content-item-active');
            $('.thumbScroller5 > div:nth-child(2)').addClass('content-item');
            $('.thumbScroller5 > div:nth-child(2)').animate({top: '50px'});
            $('.thumbScroller5 > div:nth-child(3)').removeClass('content-item');
            $('.thumbScroller5 > div:nth-child(3)').addClass('content-item-active');
            $('.thumbScroller5 > div:nth-child(3)').animate({top: '50px'});
            $('.thumbScroller5 > div:nth-child(1)').remove();
            $('.thumbScroller5').append('<div class="content-item">\
                                            <a href="#">\
                                                <img src="' + $slot_img_list5['logo' + logo_index].img + '" title="Dusk" alt="Dusk" class="thumb" />\
                                            </a>\
                                        </div>');
        });

        if (logo_index == 11) {
            logo_index = 1;
        } else {
            logo_index ++;
        }

    }, 2000);
});