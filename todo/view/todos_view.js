var TodoListView = Backbone.View.extend({
  // List should be in a div
  tagName: 'div',

  // Make it class todolist
  className: 'todoList',

  thingsToDoViews: [],
  
  // Take through all the things to do
  initialize: function(thingsToDo) {
    this.thingsToDo = thingsToDo
    this.thingsToDoViews = []
    this.thingsToDo.forEach(function(thingToDo) {
      this.thingsToDoViews.push(new TodoView(thingToDo))
    }, this)
  },

  events: {
    'click .delete': 'removeOne',
  },

  removeOne: function() {
    this.thingsToDoViews.pop()
    this.render()
  },

  // Render the todo list into HTML
  render: function() {
    this.$el.empty()
    this.$el.html("<div class=\"delete\"></div>")
    // For each of the items in the todo list
    this.thingsToDoViews.forEach(function(thingToDoView) {
      // Render it and stick it on the end
      this.$el.append(thingToDoView.render().el)
    }, this)

    return this
  }
})