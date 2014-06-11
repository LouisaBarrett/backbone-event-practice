$(function() {
  var SwitchView, switchView, DropView, dropView, BananaView, bananaView, LoginView, loginView, FieldView, fieldView;
  
  SwitchView = Backbone.View.extend({
     
    events: {
      'click .js-switch': 'switchOn',
      'click .js-switchback': 'switchBack'
    },
    
    switchOn: function(e) {
      $('.js-meals').html('Breakfast');
    },
    
    switchBack: function(e) {
      $('.js-meals').html('Dinner');
    },
    
    render: function() {
      var generate;
    
      generate = _.template($('#switch_template').text());
      this.$el.html(generate);
    }
  });
    
  DropView = Backbone.View.extend({
    
    events: {
      'change .js-dropdown': 'dropChange'
    },
    
    dropChange: function(e) {
      $('.js-which-meal').html($('.js-dropdown :selected').text());
    },
    
    render: function() {
      var generate;
      
      generate = _.template($('#dropdown_template').text());
      this.$el.html(generate);
    }
  });
  
  BananaView = Backbone.View.extend({
    
    events: {
      'change .js-bananaDrop': 'bananaChange'
    },
    
    bananaChange: function(e) {
      var value = $('.js-bananaDrop :selected').text();
      if (value == 'Banana') {
          $('.js-banana1').show();
          $('.js-banana2').hide();
      } else if (value == 'No Banana!') {
          $('.js-banana1').hide();
          $('.js-banana2').show();
      }
    },
    
    render: function() {
      var generate;
      
      generate = _.template($('#banana_drop').text());
      this.$el.html(generate);
    }
  });
  
  LoginView = Backbone.View.extend({
    
    events: {
      'click .js-save': 'formSave',
      'click .js-reset': 'formClear'
    },
    
    formSave: function(e) {
      $('.js-username').val();
      $('.js-password').val();
    },
    
    formClear: function(e) {
      $('.js-username').val('');
      $('.js-password').val('');
    },
    
    render: function() {
      var generate;
      
      generate = _.template($('#login_template').text());
      this.$el.html(generate);
    }
  });

  FieldView = Backbone.View.extend({
    
    events: {
      'change .js-fieldDrop': 'flipField'
    },
    
    flipField: function(e) {
      var value = $('.js-fieldDrop :selected').text();
      if (value == 'One') {
        $('.js-zero').hide();
        $('.js-one').show();
        $('.js-two').hide();
        $('.js-three').hide();
      } else if (value == 'Two') {
        $('.js-zero').hide();
        $('.js-one').hide();
        $('.js-two').show();
        $('.js-three').hide();
      } else if (value == 'Three') {
        $('.js-zero').hide();
        $('.js-one').hide();
        $('.js-two').hide();
        $('.js-three').show();
      }
    },
    
    render: function() {
      var generate;
      
      generate = _.template($('#field_template').text());
      this.$el.html(generate);
    }
  });
  
  switchView = new SwitchView();
  switchView.render();
  $('.js-switch-view').html(switchView.$el);
  
  dropView = new DropView();
  dropView.render();
  $('.js-dropdown-view').html(dropView.$el);
  
  bananaView = new BananaView();
  bananaView.render();
  $('.js-banana-view').html(bananaView.$el);
  
  loginView = new LoginView();
  loginView.render();
  $('.js-login-view').html(loginView.$el);
  
  fieldView = new FieldView();
  fieldView.render();
  $('.js-field-view').html(fieldView.$el);
  
});
