// line 241 index add     <input type="text" value="0xc58A1559b566863668A8C7316da00faC01202300" id="myInput" style="width:auto">

// and pull this js function to mobile

function CopyContract() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard
    .writeText(copyText.value)
    .then(() => {
      alert("successfully copied");
    })
    .catch(() => {
      alert("something went wrong");
    });
}
