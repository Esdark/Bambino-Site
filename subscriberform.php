<?php
// Get data from form 
$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['number'];
$message= $_POST['message'];
 
$to = "arjunm295707@gmail.com";
$subject = "This is the subject line";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt ="Name = ". $name . "\r\n  Email = "
    . $email ."\r\n  Number = "
    . $number . "\r\n Message =" . $message;
 
$headers = "From: noreply@bambino.ae" . "\r\n" .
            "CC: info@bambino.ae";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:last.html");
?>