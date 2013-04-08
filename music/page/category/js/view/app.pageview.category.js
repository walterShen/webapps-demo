/**
 * 首页View类
 */
(function($) {

app.pageview.category = app.pageview.extend({
    el: "#category_page"

    ,init: function(options){
        var me = this;
        
        me.setup(new app.subview.toolbar({
              title  : "音乐分类"
            , action : 'category'
        }, me));

        me.setup(new app.subview.category_header(options, me));


        me.setup(new app.subview.category_content(options, me));
        
        me.setup(new app.subview.shortcut({action:'category'}, me));
    }

});

})(Zepto);


