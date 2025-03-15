$(document).ready(function() {
    $('#myButton').hover(
        function() {
            $('#myTooltip').css('display', 'block');
        },
        function() {
            $('#myTooltip').css('display', 'none');
        }
    );
});
