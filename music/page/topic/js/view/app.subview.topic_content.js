/**
 * 首页ContentView类
 */
(function($) {

app.subview.topic_content = app.subview.extend({
    el: "#topic_page_content"

    ,template: _.template(
        $('#template_topic_content').text()
    )

    ,events: {}

    ,init: function(options){
        var me = this;

        me.isFirstLoad = true;

        // 创建collection数据对象
        
        me.collection = new app.collection.topic_music(null, options);
        
       
        // 展示loading
        me.showLoading(me.$el);
    }

    ,render: function(){
        var me = this;

        // 使用append，避免将loading冲掉
       
        me.$el.append(
            me.template({
                topic: me.collection.toJSON()
            })
        );
        me.refreshScrollerHeight();
        // 隐藏loading
        me.hideLoading();

        return me;
    }

    ,registerEvents: function(){
        var me = this, ec = me.ec;
        ec.on("pagebeforechange", me.onpagebeforechange, me);
        me.collection.on('reset', me.render, me);
    }

    ,onpagebeforechange: function(params){
        var me = this, 
            from = params.from,
            to = params.to,
            param = params.params;

        if(to == me.ec) {
            me.$el.show();
            if(me.isFirstLoad){
                me.collection.fetch({
                    success: function(){
                        me.isFirstLoad = false;
                    }
                });
            }
            
            me.refreshScrollerHeight();
        }
    }
    
     ,refreshHeight: function(){
        var me = this;
        window.scrollTo(0, 0);
        app.refreshScroll();
    }

});

})(Zepto);


