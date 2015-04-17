/**
 * Main JS file for Next theme behaviours
 */

/* globals jQuery, document */
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
