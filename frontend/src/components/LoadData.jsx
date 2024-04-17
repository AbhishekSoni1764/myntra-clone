import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadSliceAction } from "../store/loadSlice";
import { itemAction } from "../store/itemsSlice";

export default function LoadData() {
    const loadData = useSelector((store) => store.loadData)
    const dispatch = useDispatch();

    useEffect(() => {
        if (loadData.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(loadSliceAction.fetchingStarted());
        fetch("http://localhost:8080/items", { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch(loadSliceAction.markFetchDone())
                dispatch(loadSliceAction.fetchingEnded())
                dispatch(itemAction.addInitialItems(items[0]))
            })


        return () => {
            controller.abort();
        }
    }, [loadData])
    return (
        <></>
    )
}