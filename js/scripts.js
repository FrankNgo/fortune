$(document).ready(function() {
  $("form#fortuneForm").submit(function(event){
  var result = 0;

  event.preventDefault();

  $("input:checkbox[name=luckVal]:checked").each(function(){
    var luckCount = $(this).val();

    if(luckCount === "beginnerLuck"){
      result += 1;
    } else if (luckCount === "foundPenny"){
      result += 1;
    } else if (luckCount === "underLadder"){
      result -= 1;
    } else if (luckCount === "blackCat"){
      result -= 1;
    } else if (luckCount === "brokeMirror"){
      result -= 1;
    } else if (luckCount === "saw666"){
      result -= 1;
    } else if (luckCount === "knockWood"){
      result += 1;
    } else if (luckCount === "umbrellaInside"){
      result -= 1;
    } else if (luckCount === "friday13"){
      result -= 1;
    }

    });

    if (result > 0) {
      $("#goodLuck").show();
      $("form").hide();

    } else if (result < 0) {
      $("#badLuck").show();
      $("form").hide();

    } else if (result === 0) {
      $("#neutralLuck").show()
      $("form").hide();
    }
  });
});
