angular
  .module("todoApp")
  .controller("ListController", ListController);

function ListController() {
  var vm = this;
  var selectedId = -1;
  var addFlag = false;
  var editFlag = false;
  var removeFlag = false;

  vm.currentTask = {};
  vm.startAdd = startAdd;
  vm.isInAddMode = isInAddMode;
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

  function reset() {
    selectedId = -1;
    addFlag = false;
    editFlag = false;
    removeFlag = false;
  }

  function startAdd() {
    reset();
    addFlag = true;
    vm.currentTask = {};
  }

  function isInAddMode() {
    return addFlag;
  }

  function add() {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
    reset();
  }
}
