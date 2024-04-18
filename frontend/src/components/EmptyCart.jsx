import { Link } from "react-router-dom"

export default function EmptyCart() {
    return (
        <center className="empty-cart">
            <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png" />
            <h3>Hey, it feels so light!</h3>
            <h4>Your Bag is Empty. Lets Add Something</h4>
            <Link to="/" className="links"><button className="btn-home ">Add Items</button></Link>
        </center>
    )
}