function fn_valform(){
    var sMsg = "";
    let email = document.getElementById("email").value;
    let regex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[az0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (document.getElementById("name").value == ""){
        sMsg += "\n* Anda Belum Mengisikan Nama";
    }

    if (email == ""){
        sMsg += "\n* Anda Belum Mengisikan Email";
    }

    if (!regex.test(email)){
        sMsg += "\n* Email Belum Sesuai Format";
    }

    if (document.getElementById("message").value == ""){
        sMsg += "\n* Anda Belum Mengisikan Pesan";
    }

    if (sMsg != "") {
        alert("Peringatan \n" + sMsg);
        return false;
    } else {
        return true;
    }
}