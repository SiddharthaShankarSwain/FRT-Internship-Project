function autofilling(f) {
  if ($("#checkbox1").prop("checked")) {
    f.newfirstname.value = f.firstname.value;
    f.newlastname.value = f.lastname.value;
    f.newaddress.value = f.address.value;
  } else {
    f.newfirstname = '';
    f.newlastname = '';
    f.newaddress = '';
  }
}

$("#checkbox1").click(function() {
  if ($("#checkbox1").prop("checked")) {
    autofilling();
  }
});