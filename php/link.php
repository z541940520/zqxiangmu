<?php 
header('Access-Control-Allow-Origin:*');//任意域名访问
header('Access-Control-Allow-Method:POST,GET');//允许的请求方式
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');//主机名
define('USERNAME','root');//用户名
define('PASSWORD','root');//密码
define('DBNAME','zq');//数据库的名称
$sjk=new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
  if($sjk->connect_error){//如果上面的数据库连接出错，显示下面的错误。
   die('数据库连接失败'.$sjk->connect_error);
  }

?>