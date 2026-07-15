
import { useState } from "react";

const FormAddSubs = ({ setType,
    setPrice,
    type,
    price,
    setSubs,
    subs,
    editId,
    setEditId,
    spent,
    count,
    setEditBool }) => {
    const [error, setError] = useState(false);
    const [errorMoney, setErrorMoney] = useState(false);

    //Update prices
    const handleSubs = e => {
        e.preventDefault();
        
        if (editId == "") {
            if (price === "" || Number(price) < 0 || type === "") {
                setError(true);
                return;
            }
            if (count - spent < Number(price)) {
                setErrorMoney(true);
                return;
            }
        }

        else{
            let newTotal = 0;
            subs.map(e => {
                if(e.Id != editId) 
                    newTotal += Number(e.price);
            });
            newTotal =+ Number(price);

            if (newTotal < 0 || type === "") {
                setError(true);
                return;
            }

            if (count < Number(price)) {
                setErrorMoney(true);
                return;
            }
        }
        
        setError(false);
        setErrorMoney(false);
        setEditBool(false);
        if (editId != "") {
            setEditId("");
            const newSubs = subs.map(item => {
                if (item.id === editId) {
                    item.type = type;
                    item.price = price;
                }
                return item;
            })
            setSubs(newSubs);
        } else {
            const data = {
                type: type,
                price: price,
                id: Date.now()
            }
            setSubs([...subs, data]);
        }

        setType("");
        setPrice("");
    }

    return (
        <div className="add-subscription">
            <h3>Add Subscriptions</h3>
            <form onSubmit={handleSubs}>
                <p>Service</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value="">-- Select --</option>
                    <option value="Netflix">Netflix</option>
                    <option value="Disney Plus">Disney Plus</option>
                    <option value="HBO Max">HBO Max</option>
                    <option value="Star Plus">Star Plus</option>
                    <option value="Prime Video">Prime Video</option>
                    <option value="Spotify">Spotify</option>
                    <option value="Apple TV">Apple TV</option>
                </select>
                <p>Amount</p>
                <input type="number" placeholder="$10" onChange={e => setPrice(e.target.value)} value={price} />
                {editId != "" ? <input type="submit" value="Save" />
                    : <input type="submit" value="Add" />}

            </form>
            {error ? <p className="error">Invalid fields</p> : null}
            {errorMoney ? <p className="error">There is not enough budget</p> : null}
        </div>
    );
}

export default FormAddSubs;