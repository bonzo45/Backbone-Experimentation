var TodoView = Backbone.View.extend({
  // HTML/CSS
  tagName: 'div',
  className: 'todo incomplete',

  // Template
  template: $('#todo-template').html(),

  // Pass through the todo object
  initialize: function(todo) {
    this.model = todo
  },

  events: {
    'click': 'toggleDone'
  },

  toggleDone: function() {
    this.model.toggleDone()
    this.render()
    this.setCSS()
  },

  // Rendering simply applies the template
  render: function() {
    var compiledTemplate = _.template(this.template)
    var data = this.model.toJSON()
    var html = compiledTemplate(data)
    this.$el.html(html)
    return this.el
  },

  setCSS: function() {
    if (this.model.get('done')) {
      $("#" + this.model.id).addClass("done")
      $("#" + this.model.id).removeClass("incomplete")
    }
    else {
      $("#" + this.model.id).addClass("incomplete")
      $("#" + this.model.id).removeClass("done")
    }
  }
})