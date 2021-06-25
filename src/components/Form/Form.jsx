import {observer} from 'mobx-react';
import {useStores} from "../../hooks/use-stores";
import React, {useState, useEffect} from "react";
import Todo from "./../Todo/Todo";
import { HiPlus } from "react-icons/hi";
import AltText from "./AltText/AltText";

const Form = () => {
	const {todoStore} = useStores();

	const [userInput, setUserInput] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		todoStore.addTask({userInput});
		setUserInput('');
	}

	const handleKeyPress = (e) => {
		if(e.key === "Enter") {
			handleSubmit(e)
		}
	}

	useEffect(() => {
		if (todoStore.todos.length) {
			function generateRandomColor()
			{
				let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
				return randomColor;
			}
			document.body.style.backgroundColor = generateRandomColor()

			document.querySelector(".myclass");
		} else {
			document.body.style.backgroundColor = "white";
		}
	}, [todoStore.todos.length]);

	return (
		<div>
			<div className="container">
				<div className="containerMini">
					<div className="todoForm">
						<input
							className="todoForm_"
							value={userInput}
							id="form" type="text"
							onChange={event => setUserInput(event.target.value)}
							onKeyDown={handleKeyPress}
							placeholder="Please, enter the value..."
						/>
						<button type="button" onClick={handleSubmit}><HiPlus /></button>
					</div>
					{todoStore.todos.length ?
						<div className="toDo">
							{todoStore.todos.map(todo => {
								return <Todo item={todo} key={todo.id}/>
							})}
						</div>
						:
						<AltText />
					}
				</div>
			</div>
		</div>
	);
}

export default observer(Form);