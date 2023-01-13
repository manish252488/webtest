import broker from "../../api/broker";
import { SET_TABLE_DATA } from "../constant";

export function fetchTableData() {
    return dispatch => {
        broker.get('/v2/5d889c8a3300002c0ed7da42').then(data => {
            dispatch({
                type: SET_TABLE_DATA,
                payload: data.data.items
            })
        }).catch(e => console.log(e));
    }
}