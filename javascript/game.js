var a = Math.floor(Math.random() * 11) + 1;
var b = Math.floor(Math.random() * 11) + 1;
var c = Math.floor(Math.random() * 11) + 1;
var d = Math.floor(Math.random() * 11) + 1;
var e=0;
var winsTally = document.getElementById("wins");
var lossesTally = document.getElementById("losses");
var computerPick = Math.floor(Math.random() * 101)+ 19;

$(document).ready(function () {

    $("#computer-pick").text(computerPick);

    $("#button-1").on("click", function functionA() {
      $("#e").text(e += a);
      if (e === computerPick) {
      alert("You Win!");
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      c = Math.floor(Math.random() * 11) + 1;
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      $("#c").text(c);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e);
      winsTally.textContent++;
    }
    else if (e > computerPick) {
      alert("You lose");
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      c = Math.floor(Math.random() * 11) + 1;
      $("#c").text(c);
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e);
      lossesTally.textContent++;
    }

  });
    })

    $("#button-2").on("click", function functionB() {
      $("#e").text(e += b);
      if (e === computerPick) {
      alert("You Win!");
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      c = Math.floor(Math.random() * 11) + 1;
      $("#c").text(c);
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e);
      winsTally.textContent++;

    }
    else if (e > computerPick) {
      alert("You lose");
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      c = Math.floor(Math.random() * 11) + 1;
      $("#c").text(c);
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e)
      lossesTally.textContent++;

    

    }
    })
    $("#button-3").on("click", function functionC() {
      $("#e").text(e += c);
      if (e === computerPick) {
      alert("You Win!");
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      c = Math.floor(Math.random() * 11) + 1;
      $("#c").text(c);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e);
      winsTally.textContent++;

    }
    else if (e > computerPick) {
      alert("You lose");
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      c = Math.floor(Math.random() * 11) + 1;
      $("#c").text(c);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e);
      lossesTally.textContent++;

    }
    })
    $("#button-4").on("click", function functionD() {
      $("#e").text(e += d);
      if (e === computerPick) {
      alert("You Win!");
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      c = Math.floor(Math.random() * 11) + 1;
      $("#c").text(c);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e);
      winsTally.textContent++;

    }
    else if (e > computerPick) {
      alert("You lose");
      d = Math.floor(Math.random() * 11) + 1;
      $("#c").text(d);
      c = Math.floor(Math.random() * 11) + 1;
      $("#c").text(c);
      b = Math.floor(Math.random() * 11) + 1;
      $("#b").text(b);
      a = Math.floor(Math.random() * 11) + 1;
      $("#a").text(a);
      computerPick= Math.floor(Math.random() * 101)+ 19;
      $("#computer-pick").text(computerPick);
      e = 0;
      $("#e").text(e);
      lossesTally.textContent++;

    }
    })
  








    