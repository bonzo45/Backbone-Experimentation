var TodoView = Backbone.View.extend({
  // Single todo is placed in a div
  tagName: 'div',

  // Make it class todo
  className: 'todo incomplete',

  // The template for a todo is in the todo-template script
  todoTpl: _.template($('#todo-template').html()),

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
    if (this.model.get('done')) {
      $("#" + this.model.id).addClass("done")
      $("#" + this.model.id).removeClass("incomplete")
    }
    else {
      $("#" + this.model.id).addClass("incomplete")
      $("#" + this.model.id).removeClass("done")
    }
  },

  // Rendering simply applies the template
  render: function() {
    this.$el.html(this.todoTpl(this.model.toJSON()))
    return this
  }
})