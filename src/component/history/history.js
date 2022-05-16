import React from "react";
import "./history.scss";
import axios from "axios";
import { useState } from "react";
import JSONPretty from 'react-json-pretty';


function History(props) {
    const [data, setData] = useState(null);
    const [header, setHeader] = useState({});
    const handelApi = async (e) => {
                let method = e.target.innerText.split(" ")[0];
                let url = e.target.innerText.split(" ")[1];
                let body = {}
                props.history.history.forEach(e => {
                    if (e.url === url && e.method === method) {
                        body = e.body;
                    }
                })
                const response = await axios[method.toLowerCase()](url, (body) ? (body) : null);
                let result = { Results: response.data }
                setData(result);
                let header = { Header: response.headers }
                setHeader(header);
        
        
    }
    if (props.history.history.length > 0) {
        return (
            <div className="history">

                <div className="history-container" >
                    {
                        props.history.history.map((item, indx) => {
                            return (
                                <div className="history-item" key={indx} onClick={handelApi}>
                                    <p className="method" >{item.payload.method} {item.payload.url}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="history-result" >
                    <JSONPretty data={header} />
                    <JSONPretty data={data} />
                </div>
            </div>
        )
    } else {
        <div className="history">
            <p>Nothing to render !!</p>
        </div>
    }
}
export default History;


