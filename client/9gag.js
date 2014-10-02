Template.carousel.Gags = function () {
  return Gags.find({}, {sort:{_id:1}});
};

Template.carousel.rendered = function () {
  Meteor.call('get_gags');
  $('.carousel').carousel({
     interval: 3000
  });
  $(document).bind('keyup', function(e) {
    if(e.which == 39){
        $('.carousel').carousel('next');
    }
    else if(e.which == 37){
        $('.carousel').carousel('prev');
    }
  });
  Meteor.setTimeout(function () {
    window.location.reload(1);
  }, 600000);
};

Template.carousel.events({
  'click .img-polaroid': function () {
    $('.carousel').carousel('next');
  }
});