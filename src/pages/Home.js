import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addToCart, upQuantity } from "../action/cart";

function Home(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer)
    const [prod, setProd] = useState([]);
    useEffect (() => {
        fetch("http://localhost:3000/products")
        .then(a => a.json())
        .then(data => {
            setProd(data)
        })
    }, [])

    const handleAddToCart = (id, item) => {
        if(cart.some(itemCard => itemCard.id === item.id)){
            dispatch(upQuantity(id))
        }else{
            dispatch(addToCart(id, item))
        }
    }

    return(
        <>
            <h2 style={{textAlign: "center"}}>Danh sách sản phẩm</h2>
            <div className="productList">
                {prod.map(item => (
                    <div className="productItem" key={item.id}>
                        <div className="bao">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <h4>{item.title}</h4>
                        <div>
                            <p>{item.description}</p>
                        </div>
                        <div style={{display: "flex", alignItems: "center", position: "relative"}}>
                            <div>
                                <span className="price">Giá: {item.price}đ</span>
                            </div>
                            <div>
                                <span className="price" style={{marginLeft: '10px'}}>Số lượng: {item.stock}</span>
                            </div>
                            <button onClick={() => handleAddToCart(item.id, item)} style={{position: "absolute", right: 0}}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Home;