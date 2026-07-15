
import SingleItem from "./SingleItem";

const DisplayItems = ({ subs, eliminarItem, editItem, editBool, setEditBool }) => {
    return ( 
        <>
            <h2>Subscriptions</h2>
            {
                subs.map(item => (
                    <SingleItem 
                    key={item.id}
                    id={item.id} 
                    price={item.price} 
                    type={item.type} 
                    eliminarItem={eliminarItem}
                    editItem={editItem}
                    editBool={editBool}
                    setEditBool={setEditBool}
                    />
                ))
            }
        </>
    );
}
 
export default DisplayItems;