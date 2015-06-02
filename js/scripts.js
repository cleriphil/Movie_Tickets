var Ticket = function(newRelease, matinee, viewerAge) {
  this.newRelease = newRelease;
  this.matinee = matinee;
  this.viewerAge = viewerAge;
};

Ticket.prototype.price = function() {
  var price = 0;
  if (this.newRelease) {
    price += 5;
  } else {
    price += 3;
  }
  if (this.matinee) {
    price += 3;
  } else {
    price += 5;
  }
  if ((this.viewerAge >= 15) && (this.viewerAge <= 60)) {
    price += 4;
  } else {
    price += 2;
  }
  return price;
}

$(function(){

  var $select = $("#age-choice");
  for (var i=1;i<=100;i++) {
    $select.append($('<option></option>').val(i).html(i));
  }

  $("form#ticket-info").submit(function(event) {
    event.preventDefault();

    var movieAge = $("select#new-release").val();
    var newRelease = NaN;
    if (movieAge === "new") {
      newRelease = true;
    } else {
      newRelease = false;
    }

    var movieTime = $("select#movie-time").val();
    var matinee = NaN;

    if (movieTime === "matinee") {
      matinee = true;
    } else {
      matinee = false;
    }

    var viewerAge = parseInt($("select#age-choice").val());

    var ticket = new Ticket(newRelease, matinee, viewerAge);
    var price = ticket.price();

    $(".price").text(price);
    $(".result").show();

  });


});
