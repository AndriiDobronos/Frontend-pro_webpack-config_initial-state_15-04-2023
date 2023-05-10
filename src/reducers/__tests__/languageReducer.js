import languageReducer from "../languageReducer.js";

describe("Language reducer",() => {
    it('should change language to ua if action is correct',() => {
        const action = {
            type: "CHANGE_LANGUAGE",
            payload: {
                newLanguage : 'ua'
            }
        }
        expect(languageReducer('en',action)).toEqual('ua')
    })
    it('should not change language to ua if action is incorrect',() => {
        const action = {
            type: "CHAGNE_LANGUAGE",
            payload: {
                newLanguage : 'ua'
            }
        }
        expect(languageReducer('en',action)).toEqual('en')
    })


})