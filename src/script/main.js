// require.config({
//     paths:{
//         'jquery':'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min'
//     }
// })
requirejs.config({
        baseUrl:'http://localhost/zq/partice/xiangmu/src/script/',
        paths:{
            'jquery':'http://code.jquery.com/jquery-3.5.1.min',
            'lazyload':'https://cdn.bootcdn.net/ajax/libs/jquery_lazyload/1.9.7/jquery.lazyload.min',
            'pagination':'jquery.pagination'
        },
        shim:{
            'lazyload':{
                deps:['jquery']
            }
        }
    });
require(['jquery'],function($){
    require(['lazyload','pagination'],function(){
        let mod=$('#currentpage').attr('currentmod');
        if(mod){
            require([mod],function(modlist){
                modlist.init();
               
            })
        }
    
    })
    
})