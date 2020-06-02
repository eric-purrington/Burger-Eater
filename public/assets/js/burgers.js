$(function () {
  if (localStorage.getItem("burgerSum") !== null) {
    var burgerSum = JSON.parse(localStorage.getItem("burgerSum"));
  } else {
    burgerSum = 0;
  }
  
  if (burgerSum == 1) {
    $(".sum").html("You've eaten " + burgerSum + " burger! Want another?");
  } else {
    $(".sum").html("You've eaten " + burgerSum + " burgers! Want another?");
  }

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    if ($("#burger_name").val() == "") {
      return;
    }
    var newBurger = {
      name: $("#burger_name").val().trim(),
    };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    if ($(this).data("newdevoured") == 0) {
      var newDevoured = 1;
      burgerSum++;
      localStorage.setItem("burgerSum", burgerSum);
    } else {
      var newDevoured = 0;
    }
    
    var newDevouredState = {
      devoured: newDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      location.reload();
    });
  });
});