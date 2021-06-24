import {action, observable, computed, runInAction} from "mobx";
import { v4 as uuidv4 } from 'uuid';

class todoStore {
	/*massive to collect elements from the input*/
	@observable todos = [];

	/*function to push values of the input to todos massive. It is launched from Form/handleSubmit function.*/
	@action addTask = (values) => {
		if(values.userInput) {
			const newItem = {
				id: uuidv4(),
				task: values.userInput,
				complete: false,
				isEdited: false
			}
			this.todos.push(newItem);
			/*console.log(this.todos.length);*/
		}
	}

	@computed get total() {
		return this.todos.length;
	}

	@computed get completedTasks() {
		return (this.todos.filter((item) => item.complete === true)).length;
	}

	@observable removeTask = (id) => {
		/*this is additional wrapper to cope with the fail*/
		runInAction(() => {
			this.todos = this.todos.filter((item) => item.id !== id);
		})
		/*console.log(toJS(this.todos));*/
	}

	@observable handleToggle = (id) => {
		runInAction(() => {
			this.todos.map((item) => {
				if(item.id === id){
					item.complete = !item.complete;
				}
			})

		})

		/*console.log(toJS(this.todos));*/
	}
	/*запуск редактирования*/
	@observable editLaunch = (id) => {
		runInAction( () => {
			this.todos = this.todos.map((item) => {
				if(item.id === id && item.isEdited === false){
					item.isEdited = true;
				}
				return item;
			})
		})
	}
	/*сам таск редактирования*/
	@action editTask = (id, changeInput) => {
		console.log(changeInput);
		runInAction( () => {
			let need = this.todos.find(item => item.id === id);
			need.task = changeInput;
			need.isEdited = false;
		})
	}

}

export default new todoStore();