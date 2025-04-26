import { makeAutoObservable } from "mobx";

export type Task = {
  id: string;
  task: string;
  completed: boolean;
};

class TodoStore {
  taskInput = "";
  tasksList: Task[] = [];
  activeTab: string = "all";

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  setTaskInput(taskInput: string) {
    this.taskInput = taskInput;
  }

  addTask(task: Task) {
    this.tasksList.push(task);
    this.taskInput = "";
    this.saveToLocalStorage();
  }

  deleteTask(id: string) {
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
    this.saveToLocalStorage();
  }

  toggleTaskCompletion(id: string) {
    const task = this.tasksList.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
    this.saveToLocalStorage();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  get filteredTasks() {
    if (this.activeTab === "all") {
      return this.tasksList;
    } else if (this.activeTab === "active") {
      return this.tasksList.filter((task) => !task.completed);
    } else {
      return this.tasksList.filter((task) => task.completed);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasksList));
  }

  loadFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.tasksList = JSON.parse(tasks);
    }
  }
}

export const todoStore = new TodoStore();
