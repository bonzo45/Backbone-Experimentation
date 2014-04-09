var TodoListView = Backbone.View.extend({
  // HTML/CSS
  tagName: 'div',
  className: 'todoList',

  // Model
  thingsToDo: [],
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
    this.$el.html("<div class=\"delete\"></div>")
    // For each of the items in the todo list
    this.thingsToDoViews.forEach(function(thingToDoView) {
      // Create a div for it, with the appropriate id
      id = thingToDoView.model.id
      newDiv = $("<div id=" + id + " class=todo></div>")
      // Stick it in that div
      thingToDoView.setElement(newDiv).render()
      this.$el.append(newDiv)
      thingToDoView.setCSS()
    }, this)

    return this.el
  }
})