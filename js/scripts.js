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
  if (this.viewerAge >= 15) {
    price += 4;
  } else {
    price += 2;
  }
  return price;
}
