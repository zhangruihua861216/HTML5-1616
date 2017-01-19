require.config({
  paths:{
      jquery:"lib/jquery",
      underscore:"lib/underscore",
      backbone:"lib/backbone",
      css:"lib/css",
      text:"lib/text"

  }
});

require(["modules/footer/footer","backbone","router"],function(footer){
      console.log(Backbone);
      footer.render();
      Backbone.history.start();
      location.hash="home";
})