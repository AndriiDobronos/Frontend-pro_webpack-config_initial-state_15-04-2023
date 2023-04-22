import React from "react";
import ElementsList from "./ElementsList-copy.jsx";

export default ({elements,setElements}) => {
    return <div>
        <h1>Elements list</h1>
        <ElementsList elements={elements} setElements={setElements} />
    </div>
}