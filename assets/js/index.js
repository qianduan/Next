/**
 * Main JS file for Next theme behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $('.related-posts').ghostRelated();
    });

})(jQuery);

function search() {
    var q = document.getElementById("search-field");
    if (q.value != "") {
        var url = 'https://www.google.com.hk/search?q=site:qianduan.net%20' + q.value;
        if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
            location.href = url;
        } else {
            window.open(url, "_blank");
        }
        return false;
    } else {
        return false;
    }
}
