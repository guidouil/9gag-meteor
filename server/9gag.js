Meteor.methods({
  get_gags: function() {
    // getting the fresh gags
    Meteor.http.get("http://infinigag.eu01.aws.af.cm/fresh/0", function(error, result) {
      if (result.statusCode === 200) {
        for (var i = 0; i < result.data.data.length; i++) {
          // lets find if it allready is in the collection
          var gagId = result.data.data[i].id;
          var gag = Gags.findOne({'id': gagId});
          if (!gag) {
            Gags.insert(result.data.data[i]);
          };
        }
      } else {
        console.log(result);
      }
    });
    // dropping the older gags
    var gagsCount = Gags.find().count();
    if (gagsCount >= 500) {
      var gagsToRemove = Gags.find({}, {fields: {_id : 1}, limit:100, sort:{_id:-1}}).fetch();
      for (var i = 0; i < gagsToRemove.length; i++) {
        Gags.remove({_id: gagsToRemove[i]._id});
      };
    }

  }
});