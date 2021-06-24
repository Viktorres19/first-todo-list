import {observer} from 'mobx-react';
import {useStores} from "../../hooks/use-stores";
import {useState} from "react";
import { GiCrossedBones } from "react-icons/gi";
import { AiFillEdit, AiOutlineSave } from "react-icons/ai";

const Todo = ({item}) => {
	const {todoStore} = useStores();

	const [changeInput, setChangeInput] = useState(item.task || '');

	const removeTodo = (id) => {
		todoStore.removeTask(id);
	}
	const toggleTask = () => {
		todoStore.handleToggle(item.id);
	}
	/*launchEdit запускает редактирование таска в todoStore с передаваемым id*/
	const launchEdit = (id) => {
		todoStore.editLaunch(id);
	}
	/*добавляем изменения */
	const HandleChanges = () => {
		/*e.preventDefault();*/
		/*setChangeInput(event.target.value);*/
		todoStore.editTask(item.id, changeInput);
		setChangeInput('');
		console.log(changeInput);
	}
	const handleKeyPress = (e) => {
		if(e.key === "Enter") {
			HandleChanges(e)
		}
	}
	return (
		<div key="item.id" className="todo__item">
			<div className={item.isEdited ? "todo__hidden show" : "todo__hidden"}>

				<input
					className="hidden__input"
					value={changeInput}
					type="text"
					onKeyDown={handleKeyPress}
					onChange={event => setChangeInput(event.target.value)}
					placeholder="Please, edit the value..."
				/>
				<button type="button" onClick={() => HandleChanges(item.id) }><AiOutlineSave /></button>
			</div>
			<div className="todo__show">
				<div
					className={item.complete ? "todo__text strike" : "todo__text"}
					onClick={() => toggleTask() }
				>
					{ item?.task }
				</div>
				<div className="Buttons">
					<button className="button--red" type="button" onClick={() => removeTodo(item.id) }>
						<GiCrossedBones />
					</button>
					<button type="button" onClick={() => launchEdit(item.id) }>
						<AiFillEdit />
					</button>
				</div>
			</div>
		</div>
	);
}

export default observer(Todo);