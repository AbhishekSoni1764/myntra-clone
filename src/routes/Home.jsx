/* eslint-disable react/prop-types */
import HomeItems from "../components/HomeItems";
import { useSelector } from "react-redux"

export default function Home() {

    const items = useSelector(store => store.items)
    return (
        <main>
            <div className="items-container">
                {items.map(item => <HomeItems key={item.id} item={item} />)}
            </div>
        </main>
    )
}