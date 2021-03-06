(function($) {

app.subview.singer_header = app.subview.extend({
    el: "#singer_page_header",

    events: {
    },

    init: function(options){
        var me = this;
        me.render();
    },

    render: function(){
        var me = this;
        return me;
    },

    registerEvents: function(){
        var me = this, ec = me.ec;
        ec.on("pagebeforechange", me.onpagebeforechange, me);
    },

    onpagebeforechange: function(params){
        var me = this, 
            from = params.from,
            to = params.to,
            param = params.params;


        if(to == me.ec) {
            me.$el.show();
        }
    }
});

})(Zepto);


