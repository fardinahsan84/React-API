<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
define('ERROR','400');
$rawPostData = file_get_contents('php://input');
$jsonData = json_decode($rawPostData, true);
$dataErr =  '';

if(empty($jsonData))
{
  $dataErr=ERROR;
  print_r($dataErr.' '.'No data is inserted!!!');
}
else{
    $filepath = "data.json";
    $f1 = fopen($filepath, "r");
    $data = fread($f1, filesize($filepath));
    $data_decode = json_decode($data, true);

    for($row = 0 ; $row< count($data_decode); $row++)
    {
      if($data_decode[$row]['email'] == $jsonData["email"] && $data_decode[$row]['password'] == $jsonData["password"]){
        //echo 'hello from login';
        //$arr = array( "content" => $data_decode[$row])
        $dt = json_encode($data_decode[$row], JSON_PRETTY_PRINT);
        echo $dt;
        exit;
      }
    }

    print_r('Invalid email/password');

}

?>
