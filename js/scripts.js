$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];
  
      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
    });
    $('.blanks').click(function(){
      $('.list').hide();
      $('#form1', this).show();
    });
  
    

  
    event.preventDefault();
     
    
  });
});



