$(function () {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
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