var name, phone;

function validateName() {
    var Name = document.getElementById("clientName").value;
    if (Name == null || Name == "") {
        document.getElementById("s1").innerHTML = "Name can not be null";
        return false;
    } else if (isNaN(Name) == false) {
        document.getElementById("s1").innerHTML = "Name can not have numbers";
        return false;
    } else if (Name.length > 20) {
        document.getElementById("s1").innerHTML = "Name can not be greater than 10 characters";
        return false;
    } else {
        name = Name;
        return true;
    }
}


function validatePhone() {
    var phone = parseInt(document.getElementById("clientPhone").value);
    if (isNaN(phone) == true) {
        document.getElementById("s2").innerHTML = "Please type valid phone number";
        return false;
    } else if (phone.length != 10) {
        document.getElementById("s2").innerHTML = "Enter 10 digit phone number";
        return false;
    } else {
        phone = Phone;
        return true;
    }
}




function validateAndStore() {
    if (validateName() && validatePhone()) {
        var patient = {
            key_name: name,
            key_phone: phone,
        }

        var personArr = Object.entries(patient);
        console.log(personArr);

    }
}