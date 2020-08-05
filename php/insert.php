<?php 
include "link.php";
$result=$sjk->query("SELECT*FROM huimaigoods");
$arr=Array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
};
 echo json_encode($arr);
   

?>