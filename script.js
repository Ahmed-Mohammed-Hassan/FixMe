var i = 0;
function move() {
  if (i == 0) {
    var devel = document.getElementById("devel");
    devel.style.visibility="visible";
    var devel1 = document.getElementById("sasa");
    devel1.style.visibility="hidden";
    var Msg = document.getElementById("msg");

    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        Msg.innerText="Fix Completed";
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerText=width+" %";
      }
    }
  }
}