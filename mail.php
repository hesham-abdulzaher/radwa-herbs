<?php
	if( isset($_POST['n']) && isset($_POST['p']) && isset($_POST['e']) && isset($_POST['m']) ){
		$n = $_POST['n']; // HINT: use preg_replace() to filter the data
		$e = $_POST['e'];
		$p = $_POST['p'];
		$m = nl2br($_POST['m']);
		$to = "eslamnasser332@gmail.com";	
		$from = $e;
		$subject = 'Contact Form Message';
		$message = '<b>الإسم:</b> '.$n.' <br><b>رقم الهاتف:</b> '.$p.' <br><b>البريد الإلكتروني:</b> '.$e.' <br><p>'.$m.'</p>';
		$headers = "From: $from\n";
		$headers .= "MIME-Version: 1.0\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\n";
		
		// More headers if needed
		// $headers .= "Reply-To: eslamnasser332@gmail.com\r\n";
		// $headers .= "Return-Path: eslamnasser332@gmail.com\r\n";
		// $headers .= "CC: eslamnasser332@gmail.com\r\n";
		// $headers .= "BCC: eslamnasser332@gmail.com\r\n";

		if( mail($to, $subject, $message, $headers) ){
			echo "نجاح";
		} else {
			echo "لا يمكن ارسال الرسالة في الوقت الحالي, برجاء المحاولة مرة أخري لاحقاً.";
		}
	}
?>