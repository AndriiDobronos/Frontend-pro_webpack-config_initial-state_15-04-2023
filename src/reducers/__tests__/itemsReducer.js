import itemsReducer from "../itemsReducer.js";

describe("Items reducer",() => {
    it('should return new array when action is set_items',() => {
        const initItems = [{b:2}]
        const action = {
            type: "SET_ITEMS",
            payload: {
                items : [{a:1},{a:2},{a:3}]
            }
        }
        const newState = itemsReducer(initItems, action)
        expect(newState).toEqual([{a:1},{a:2},{a:3}])
    })
    it('should not affect prev state when action is set_items',() => {
        const initItems = [{b:2}]
        const action = {
            type: "SET_ITEMS",
            payload: {
                items : [{a:1},{a:2},{a:3}]
            }
        }
        itemsReducer(initItems, action)
        expect(initItems).toEqual( [{b:2}])
    })
})

const helloJohn = () => {
    const userName = window.prompt('What is your name?')
    if (userName?.trim()) {
        window.alert('Hello ' + userName + ', how are you?')
        } else {
        window.alert('hello')
    }
    }

describe("hello John", () => {
    it('should alert "Hello John, how are you?" when user enters John',() => {
        const originalPrompt = window.prompt
        window.prompt = () => 'John'
        const originalAlert = window.alert
        let result = ''
        window.alert = msg => {
            result = msg
        }
        helloJohn()
        expect(result).toEqual('Hello John, how are you?')
        window.prompt = originalPrompt
        window.alert = originalAlert
    })
    it('should not throw when user cansel',() => {
        const originalPrompt = window.prompt
        window.prompt = () => null
        const originalAlert = window.alert
        let result = ''
        window.alert = msg => {
            result = msg
        }

        expect(() => helloJohn()).not.toThrow()
//        expect(result).notEqual('Hello null, how are you?')
        window.prompt = originalPrompt
        window.alert = originalAlert
    })
})



describe("[description of set of cases]",() => {//function to check the cases
    it("[expected result and condition]", () => {//function to check the cases
        //1 setup: init data
        //2 action
        //3 check the result
    })
})