/*
 * Please see the included README.md file for license terms and conditions.
 */

// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.

$(document).ready(function() {
    
    $(window).on("scroll touchmove", function () {
        $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
    });
    
});