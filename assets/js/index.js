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
