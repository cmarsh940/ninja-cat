$(document).ready(function(){
	var swap = function () {
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

$(function() {
    $('img[data-alt-src]').each(function() { 
        new Image().src = $(this).data('alt-src'); 
    }).click(swap, swap); 
});
});