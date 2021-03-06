/**
 * 首页View类
 */
(function($) {

app.pageview.category = app.pageview.extend({
    el: "#category_page"

    ,init: function(options){
        var me = this;
        

        me.setup(new app.subview.category_header(options, me));


        me.setup(new app.subview.category_content(options, me));
        
        me.setup(new app.subview.shortcut({}, me));
    }
    
    ,registerEvents : function(){
        var me = this, ec = me.ec;
        ec.on("pagebeforechange", me.onpagebeforechange, me);
    }
    
    ,onpagebeforechange : function(params){
        var me = this, 
            from = params.from,
            to = params.to,
            param = params.params;
        
        if(to == me.ec){
            new app.subview.toolbar({
                  title  : "音乐分类",
                  action : 'category'
            }, me);
            window.setTimeout(function(){app.wrapperScroll.refresh();},200);
        }    
        
    }

});

})(Zepto);


