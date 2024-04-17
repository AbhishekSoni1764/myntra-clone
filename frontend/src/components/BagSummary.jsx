export default function BagSummary() {

    const checkoutBag = {
        totalItem: "3",
        totalMRP: "2345",
        totalDiscount: "1234",
        finalPayment: "1111",
    }
    return (
        <>
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({checkoutBag.totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{checkoutBag.totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{checkoutBag.totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹99</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{checkoutBag.finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </>
    )
}