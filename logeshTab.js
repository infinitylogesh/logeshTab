(function ($) {
    $.fn.logeshTab = function (options) {
        var defaults = {
            selectedClass: 'selected-tab'
        }, settings = $.extend({}, defaults, options);
        this.each(function () {
            $this = $(this);
            var firstLi = $this.children("ul:first").children("li:first");
            var allLi = $this.children("ul:first").children("li");
            var firstContent = firstLi.children("a").attr('href');
            displayToggle();
            displayToggle(firstContent);
            firstLi.addClass('selected-tab');

            function displayToggle(currentTab) {
                allLi.each(function (value) {
                    var tabId = $(this).find("a[href^=#]").attr('href');
                    $(tabId).css("display", "none");
                    $(currentTab).css("display", "block");
                    $(this).removeClass(settings.selectedClass);
                });
            };
            allLi.children('a[href^=#]').click(function (e) {
                e.preventDefault();
                var tabId = $(this).attr('href');
                displayToggle(tabId);
                $(this).parent().addClass(settings.selectedClass);
            });
        });
    };
    return this;
})(jQuery);