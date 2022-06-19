import {useState} from 'react'

export default function NewToDoItem(Props){

    const [discription, setDiscription] = useState('');

    return (
        <div className="form">
            <div className="form-row">
                <label className="addLabel">Description: </label>
                <input className="addIpt" type="text" value={discription} onInput={e => setDiscription(e.target.value)}/>
                <button className="addBtn" onClick={()=>Props.onAddTodo(discription)}>Add</button>
            </div>
        </div>
    );
}