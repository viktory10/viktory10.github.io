jQuery(function($){
   
    $("input[type='phone']").mask("+7 (999) 999-99-99");
});

my_text.oninput = function(){
    var val = this;
    if(/[0-9]+/.test(this.value))
    {
    var i = this.value.match(/[0-9]+/g);
        if(i!==null)
    { 
        i.map(function(el){
        val.value = val.value.replace(el,'');
        });
    }
    }
    };

    $(function() {
        var caption = $('.accordeon-caption'),
            content = $('.accordeon-content').hide();         
        caption.click(function(e) {
            e.preventDefault();
            content.not($(this).next(content)).removeClass('active').slideUp(600);
            $(this).next(content).toggleClass('active').slideToggle(600);
        });
    });