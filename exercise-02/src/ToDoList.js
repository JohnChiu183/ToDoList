export default function ToDoList(props){

    const testResult = props.onTodoStatusChanged;
    
    return(
        <div className="toDoBlock">
            <ul>
                {
                props.items && props.items.length > 0 ? 
                props.items.map((item, index) => 
                    <li key={index} className={item.isComplete ? "checkedItem" : "nonCheckedItem"}>
                        <label>
                            <input type="checkbox" value={item.description} checked={item.isComplete} onChange={()=> props.onTodoStatusChanged(index,!item.isComplete)}/>
                            {item.description} <span> {item.isComplete ? "(Done!)" : null} </span>
                        </label>

                        <button className="removeBtn" onClick={()=>props.onTodoElementRemove({index})}>Remove</button>
                    </li>) :
                <p>There are no items :(</p>}
            </ul>

        </div>
    );
}