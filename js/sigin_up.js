
$('submit_menber_info').click(function() {

    var menber_info = {
        id :$("userId").val(),
        pw :$("userPW").val(),
        name :$("userName").val(),
        date :$("userDate").val(),
        phone : $("userPhone").val()
    }


	$.ajax({
		"url": "localhost:8080/api/users/login",
		"type": "POST",
		"timeout": 0,
		"headers": {
			"Content-Type": "application/json"
		},
		data: JSON.stringify(menber_info), 
		dataType: "json"
	}).done(function (resp) {
			// 결과가 정상이면 done 실행
			alert("회원가입이 완료되었습니다.");
			console.log(resp);
			location.href = "./login.html";
		}).fail(function (error) {
			// 실패하면 fail 실행
			alert("회원가입이 실패하였습니다.");
			alert(JSON.stringify(error));
		});

})


