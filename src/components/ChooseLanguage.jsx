import React, {createContext, useState} from "react";

const ChooseLanguage = createContext('en')

export default () => {
    const [isContext, setIsContext] = useState(true)
    return <div>
    {isContext ? <button onClick={() => {
                setIsContext(!isContext)

            }}>Choose language</button>:
            <button onClick={() => {
                setIsContext(!isContext)
            }}>Оберіть мову</button>}
    </div>
}




