new Vue({
	el: "#todo",
  data: {
  	newTask: "",
    taskList: []
  },
  methods: {
  	addTask: function() {
    	var task = this.newTask.trim();
      if (task) {
      	this.taskList.push({
        	text: task,
          checked: false
        });
        this.newTask = "";
      }
    }
  }
});
