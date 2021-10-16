function openZipSearch() {
  new daum.Postcode({
    oncomplete: function(data) {
      $('[name=zip]').val(data.zonecode); // 우편번호 (5자리)
      $('[name=addr1]').val(data.address);
      $('[name=addr2]').val(data.buildingName);
    }
  }).open();
}

function ifAllChecked(){
    /*
    if checked,
    */
    window.location = "verification.html"; 
}

function verifyChecked(){
    /*
    if verified,
    */
   window.location = "entryformUnder14.html"; 
//    window.location = "entryformOver14.html"; 
}

function ifInputChecked(){
    /*
    if completed,
    */
   window.location = "registrationSuccess.html";
   /* if not */
//    window.location = "registrationFailed.html";
}