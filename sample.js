$(document).ready(function () {
    $("#submitform").validate({
        rules: {
            name: {
                required: true, minlength: 5, maxlength: 40,

            },
            email: {
                required: true,
                email: true

            },
            subject: {

                required: true,

            },
            message: {
                required: true,
            },
        },
        submitHandler: function (form) {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxaKM-ld7zYJsZZJP3nQqQxHjfVnrD28-bsEDf62jTrrVRjVKAef33PHZar69bSY9d1ZA/exec",
                data: $("#submitform").serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully");
                    location.reload();

                    //
                    //window.location.href="https://google.com"
                },
                error: function (err) {
                    alert("Something Error");
                },
            });
        }






    });


});
// function SubmitIfValid()
// {
//     if(!$("#form1").valid()) return false;  
//     alert("submitted")
// }
