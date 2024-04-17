import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";

export default function Bag() {
    const bagItems = useSelector((store) => store.bagItems);
    const items = useSelector((state) => state.items);

    const finalItems = items.filter((item) => {
        const itemIndex = bagItems.indexOf(item.id)
        return itemIndex >= 0;
    })
    return (
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    {finalItems.map((item) => <BagItems key={item.id} item={item} />)}
                </div>
                <div className="bag-summary">
                    <BagSummary />
                </div>
            </div>
        </main>
    )
}