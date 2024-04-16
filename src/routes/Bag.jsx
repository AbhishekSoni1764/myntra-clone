import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";

export default function Bag() {
    return (
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    <BagItems />
                </div>
                <div className="bag-summary">
                    <BagSummary />
                </div>
            </div>
        </main>
    )
}