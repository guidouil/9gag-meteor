Gags = new Mongo.Collection("gags");

Router.configure({
  layoutTemplate: 'layout'
});

Router.map( function () {
  this.route('home', {
    path: '/',
    template: 'carousel'
  });
});