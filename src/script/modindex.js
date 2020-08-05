define([], function() {
    return {
        init: function() {
            class Index {
                constructor() {
                    this.cul = $('.list ul')
                }
                init() {
                    const $list = $('.list');
                    let array_default = []; //排序前的li数组
                    let array = []; //排序中的数组
                    let prev = null;
                    let next = null;
                    // console.log(this.cul.html())
                    $.ajax({
                        url: 'http://localhost/zq/partice/xiangmu/php/listdata.php',
                        dataType: 'json',
                    }).done(function(date) {
                        console.log(date)
                        let strhtml = ''
                        $.each(date, function(index, value) {
                            strhtml += `<li>
                           <a href="javascript:;">
                               <img src="http://a.tbcdn.cn/mw/webapp/fav/img/grey.gif"alt="" data-original=${value.url} class="new-img">
                               <p>` + value.title + `</p>
                               <p class="p1">` + value.introduce + `</p>
                               <div class="list-end">
                                   <h2>￥` + value.price + `<span>￥` + value.discount + `</span></h2>
                                   <p class="p2"><span>` + value.salenumber + `人</span>已购买</p>
                               </div>
                           </a>
                       </li>`

                            //    console.log(strhtml)
                        })
                        $('.list ul').append(strhtml);
                        $('.new-img').lazyload({
                            effect: 'fadeIn'
                        })
                    })
                    $(window).on('scroll', function() {
                        if ($(window).scrollTop() >= 200) {
                            $('#top').show()
                        } else {
                            $('#top').hide()
                        }
                    })
                    $('#top').on('click', function() {
                            $(window).scrollTop(0)
                        })
                        //4.对排序进行赋值。
                    array_default = []; //排序前的li数组-默认排序的数组
                    array = []; //排序中的数组
                    prev = null;
                    next = null;
                    //4.将页面的li元素加载到两个数组中
                    $('.list li').each(function(index, element) {
                        array[index] = $(this); //[li,li,li,li......]
                        array_default[index] = $(this); //[li,li,li,li......]
                    });

                    $('.page').pagination({
                        pageCount: 3, //总的页数
                        jump: true, //是否开启跳转到指定的页数，布尔值。
                        // coping: true, //是否开启首页和尾页，布尔值。
                        prevContent: '上一页',
                        nextContent: '下一页',
                        // homePage: '首页',
                        // endPage: '尾页',
                        callback: function(api) {
                            console.log(api.getCurrent()); //获取当前的页码
                            $.ajax({
                                url: 'http://localhost/zq/partice/xiangmu/php/listdata.php',
                                data: { //将获取的页码给后端
                                    page: api.getCurrent()
                                },
                                dataType: 'json'
                            }).done(function(data) { //根据传递的页码，后端返回相应的数据，进行渲染。
                                let $strhtml = '<ul>';
                                $.each(data, function(index, value) {
                                    $strhtml += `
                                        <li>
                                            <a href="detail.html?sid=${value.sid}" target="_blank">
                                                <img src="${value.url}"/>
                                                <p>${value.sid}${value.title}</p>
                                                <span class="price">￥${value.price}</span>
                                                <span>${value.sailnumber}</span>
                                            </a>
                                        </li>
                                    `;
                                });
                                $strhtml += '</ul>';
                                $list.html($strhtml);
                                //渲染结束。

                                //分页后进行对应的赋值和排序。
                                array_default = []; //排序前的li数组
                                array = []; //排序中的数组
                                prev = null;
                                next = null;

                                //将页面的li元素加载到两个数组中
                                $('.list li').each(function(index, element) {
                                    array[index] = $(this);
                                    array_default[index] = $(this);
                                });
                            })
                        }
                    });
                }
            }
            new Index().init()
        }
    }

})