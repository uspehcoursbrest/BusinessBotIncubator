$(document).ready(function () {
   $('.newsHeader').on('click', function () {
       var $this = $(this),
           item = $this.closest('.item_news'),
           list = $this.closest('.newsList'),
           items = list.find('item_news'),
           content = item.find('.newsContent'),
           otherContent = list.find('.newsContent'),
           duration = 300;
       otherContent.slideUp(duration);
       content.slideDown(duration);
   });


});
