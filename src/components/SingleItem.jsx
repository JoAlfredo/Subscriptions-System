import { moneyFormat } from "../helpers";

const SingleItem = ({ price, type, id, eliminarItem, editItem, editBool, setEditBool }) => {

    //Delete Subscription
    const HandleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Delete ${type} subscription`);
        if(answer){
            eliminarItem(id);
        }
    }

    //Edit Subscription
    const HandleEdit = e => {
        e.preventDefault();
        setEditBool(true);
        editItem(id);
    }

    const urlImage = `/${type}.png`;
    return ( 
        <div className="single-item">
            <img src={ urlImage } alt="Services" />
            <h3>Price: {moneyFormat(Number(price))}</h3>
            {
                editBool ?
                <a className="delete" style={{ backgroundColor: "gray" }}>Delete</a> :
                <a href="" className="delete" onClick={HandleDelete} >Delete</a>
            }
            {/* <a href="" className="delete" onClick={HandleDelete} >Delete</a> */}
            <a href="" className="edit" onClick={HandleEdit} >Edit</a>
        </div>
    );
}
 
export default SingleItem;