<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
define('ERROR','400');
print_r($_GET['key']);
if($_SERVER["REQUEST_METHOD"] == "GET"){
  if(!empty($_GET['key'])){
    $filepath = "data.json";
    $f1 = fopen($filepath, "r");
    $data = fread($f1, filesize($filepath));
    $data_decode = json_decode($data, true);

    for($row = 0 ; $row< count($data_decode); $row++)
    {
      if($data_decode[$row]['API_key'] == $_GET['key']){
        print_r('User found successfully.....');
        echo json_encode($data_decode[$row]);
        exit;
      }
    }
    print_r('User not found!!');
  }
  else{
    print_r('Key required!!');
  }
}
else{
  print_r('Please enter a valid request!!');
}

?>
