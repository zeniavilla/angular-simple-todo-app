angular
  .module("todoApp")
  .controller("ListController", ListController);

function ListController() {
  var vm = this;

  vm.currentTask = {};
  vm.add = add;

  vm.list = {
    name: 'Todo List',
    tasks: [
      {
        id: 1,
        name: 'Take out trash',
        complete: false
      },
      {
        id: 2,
        name: 'Buy Grandma a present',
        complete: false
      },
      {
        id: 3,
        name: 'Wash car',
        complete: true
      },
      {
        id: 4,
        name: 'Fix bathroom sink',
        complete: false
      }
    ]
  }

  function add() {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
  }
}
