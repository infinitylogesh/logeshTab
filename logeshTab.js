//logeshTab - an easy tab using jQuery
// Created By : Logesh Kumar
// Created On : 14/08/2011 11.57pm (3 mins to independence day)
// Licence : open to all
//
// options : selectedClass - name of the class added to a tab when it is selected
//
// Insructions
// -----------
//To use this tab plugin,the link of the tab header anchor href should be same as that of the corresponding div tag
//enclosing the tab's content.
//
//Example
//
//<li><a href="#tabs-1"> Tab 1 </a></li>
//...
//...
//<li><a href="#tabs-n"> Tab n </a></li>
//
//<div id="tabs-1">
//content of tab 1
//</div>

// IMPORTANT : the anchors href should start with '#'


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