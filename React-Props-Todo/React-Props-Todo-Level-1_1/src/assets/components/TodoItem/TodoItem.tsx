

const Datenbank:string[] = ["Buy Grocerys","Send Email","Finish Assignment","Write Blog","Bake Cake"]

const TodoItem = () => {
    return (
        <>
           <ul>
                <li>{Datenbank[0]}</li>
                <li>{Datenbank[1]}</li>
                <li>{Datenbank[2]}</li>
                <li>{Datenbank[3]}</li>
                <li>{Datenbank[4]}</li>
           </ul>
        </>
      );
}
 
export default TodoItem;