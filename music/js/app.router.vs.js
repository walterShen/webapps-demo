
(function($) {

app.router.vs = app.router.extend({

    // 路由配置
    routes: {
          ''                   : 'index'
        , 'feedback'           : 'feedback'
        , 'app'                : 'app'
        , 'category'           : 'category'
        , 'categorydetail/:id' : 'categorydetail'
        , 'musichot'           : 'musichot'
        , 'musicnew'           : 'musicnew'
        , 'play/:id'           : 'play'
        , 'singer'             : 'singer'
        , 'singerdetail/:id'   : 'singerdetail'
        , 'singerhot'          : 'singer'
        , 'topic'              : 'topic'
        , 'topicdetail/:id/:name'    : 'topicdetail'

       
    }

    // 页面切换顺序配置
    ,pageOrder: [
          'index'
        , 'feedback'
        , 'app'
        , 'category'
        , 'categorydetail'
        , 'musichot'
        , 'musicnew'
        , 'play'
        , 'singer'
        , 'singerdetail'
        , 'singerhot'
        , 'topic'
        , 'topicdetail'
    ]

    // 位置记忆，默认为false，不进行位置记忆
    ,enablePositionRestore: true

    // 默认页面切换动画
    ,defaultPageTransition: 'slide'

    // 页面切换动画配置
    ,pageTransition: {
          'index-feedback' :'slide'
        , 'feedback-app'   : 'fade'

    }

    ,index: function(type) {
        
        this.doAction('index', {},
            //禁止发送
            {disable: true}
        );
    }

    ,feedback : function(){
        
        this.doAction('feedback', {},
            //禁止发送
            {disable: true}
        );
    }
    ,app : function(){
        
        this.doAction('app', {},
            //禁止发送
            {disable: true}
        );
    }
    ,category : function(){
        
        this.doAction('category', {},
            //禁止发送
            {disable: true}
        );
    }
    ,categorydetail : function(id){
        id = id || 0;
        this.doAction('categorydetail', {id:decodeURIComponent(id)},
            //禁止发送
            {disable: true}
        );
    }
    ,musichot : function(){
        
        this.doAction('musichot', {},
            //禁止发送
            {disable: true}
        );
    }
    ,musicnew : function(){
        
        this.doAction('musicnew', {},
            //禁止发送
            {disable: true}
        );
    }
    ,play : function(id){
        id = id || 0;
        this.doAction('play', {id:decodeURIComponent(id)},
            //禁止发送
            {disable: true}
        );
    }
    ,singer : function(){
        
        this.doAction('singer', {},
            //禁止发送
            {disable: true}
        );
    }
    ,singerdetail : function(id){
        id = id || 0;
        this.doAction('singerdetail', {id:decodeURIComponent(id)},
            //禁止发送
            {disable: true}
        );
    }
    ,singerhot : function(){
        
        this.doAction('singerhot', {},
            //禁止发送
            {disable: true}
        );
    }
    ,topic : function(){
        
        this.doAction('topic', {},
            //禁止发送
            {disable: true}
        );
    }
    ,topicdetail : function(id,name){
        id = id || 0;
        name = name || '';
        this.doAction('topicdetail', {id:decodeURIComponent(id),name:decodeURIComponent(name)},
            //禁止发送
            {disable: true}
        );
    }
    

    ,defaultRoute: function(defaultUrl) {
        Backbone.history.navigate('index', {trigger: true, replace: true});
    }

    /**
     * action处理逻辑
     * @{param} action {string} action名称
     * @{param} params {object} action参数
     * @{param} statOptions {object} 统计选项{disable:是否屏蔽统计,默认开启;param:{key: value,key: value}}]统计参数}
     */
    ,doAction: function(action, params, statOptions){

        app.router.prototype.doAction.apply(this, arguments);
    }

}); 

})(Zepto);




