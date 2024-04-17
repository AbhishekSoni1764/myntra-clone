import { useDispatch, useSelector } from "react-redux"
import { bagItemAction } from "../store/bagSlice";
import { BsHandbagFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function HomeItems({ item }) {
    const dispatch = useDispatch();
    const bagItems = useSelector((store) => store.bagItems)
    const itemFound = bagItems.indexOf(item.id) >= 0;

    const handleAdd = () => {
        dispatch(bagItemAction.addItemstoBag(item.id))
    }

    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {itemFound ? <Link to="/bag" className="links"><button className="btn-add-bag"><div className="btn-text">Move to Bag</div><div className="btn-icon"><FaLongArrowAltRight /></div></button></Link> : <button className="btn-add-bag" onClick={handleAdd}><div className="icon-btn"><BsHandbagFill /></div><div className="btn-text">Add to Bag</div></button>}
        </div>
    )
}