define([],function(){
    return{
        init:function(){
            class Listmod{
                constructor(){

                }
                init(){
                    $.ajax({
                        url:'http://localhost/zq/partice/xiangmu/php/insert.php',
                        dataType:'json',
                    }).done(function(date){
                        console.log(date)
                        let strhtml=''
                        $.each(date,function(index,value){
                           strhtml+=`<li>
                           <a href="./goodsimformation.html?sid=${value.sid}">
                           <img src="http://a.tbcdn.cn/mw/webapp/fav/img/grey.gif"alt="" data-original=${value.url} class="new-img">
                               <p>`+value.title+`</p>
                               <p class="p1">`+value.introduce+`</p>
                               <div class="list-end">
                                   <h2>￥`+value.price+`<span>￥`+value.discount+`</span></h2>
                                   <p class="p2"><span>`+value.salenumber+`人</span>已购买</p>
                               </div>
                           </a>
                       </li>`
                  
                        //    console.log(strhtml)
                        })

                            $('.list ul').append(strhtml)
                            $('.new-img').lazyload({
                                effect:'fadeIn'})
                    })
                    $(window).on('scroll',function(){
                        if($(window).scrollTop()>=200){
                            $('#top').show()
                        }else{
                            $('#top').hide()
                        }
                    })
                $('#top').on('click',function(){
                    $(window).scrollTop(0)
                })
                    
                }
            }
            new Listmod().init();
        }
       
    }
})