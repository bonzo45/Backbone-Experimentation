var Todo = Backbone.Model.extend({
	defaults: {
		title: 'Untitled',
		description: '',
		done: false
	},

  initialize: function() {
    
  },

  toggleDone: function() {
    this.set({
      'done': ! this.get('done')
    })
  }
})