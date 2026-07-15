
import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    //Validate Budget
    const handleForm = e => {
        e.preventDefault();
        if (input === "" || Number(input) < 0) {
            setError(true);
            return;
        }
        setError(false);
        setCount(Number(input));
        setIsValid(true);
    }

    return ( 
        <div className="form-add-money">
            <form onSubmit={ handleForm }>
                <p>Add Budget</p>
                <input type="number" placeholder="$100" onChange={e => setInput(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
            { error ? <p className="error">Invalid budget</p> : null }
            
        </div>
    );
}
 
export default FormAddMoney;