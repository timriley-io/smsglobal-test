import * as types from "../constants/index";

// Initial state
const initialState = {
    // A few dummy API keys and my REAL api key hardcoded in
    apiKeys: [
        {
            displayName: "MyApp key 1",
            secret: "23423423423423423423423423423434",
            key: "12312312312312312312312312312312"
        },
        {
            displayName: "MyApp key 2",
            secret: "456456456456456456456456456456456",
            key: "678678678678678678678678678678678"
        },
        {
            displayName: "MyApp key 3",
            secret: "789789789789789789789789789789789",
            key: "3453453453453453453453453453453453"
        },
        {
            displayName: "LIVE SMSGloabl Key",
            secret: "57ea4ea2cd347f7c50d22adc9b408af2",
            key: "bcbca3fab08033f3284be37040bcd948"
        }
    ],
    // Could've (should've) nested this in an object
    // but updating nested structures becomes painful when they're nested too deep
    newMessageTo: [],
    newMessageFrom: null,
    newMessageText: "",
    newMessageAPIKey: null,
    newAPIKeyModalVisible: false,
    // A list of dummy message senders
    senders: [
        "21313123123",
        "A Name",
        "12312312312",
        "53453453453",
        "Tim Riley",
        "John Smith"
    ],
    sentMessages: [],
    currentPage: "messaging"
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_API_KEY:
            return { ...state, apiKeys: [...state.apiKeys, action.payload] };

        case types.REMOVE_API_KEY_BY_NAME:
            let keys = ([ ...state.apiKeys ]).filter(obj => obj.displayName != action.payload);
            return { ...state, apiKeys: keys };

        case types.SET_NEW_MESSAGE_TO:
            return { ...state, newMessageTo: action.payload };

        case types.SET_NEW_MESSAGE_FROM:
            return { ...state, newMessageFrom: action.payload };

        case types.SET_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.payload };

        case types.SET_NEW_API_KEY_MODAL_VISIBLE:
            return { ...state, newAPIKeyModalVisible: action.payload };

        case types.SET_NEW_MESSAGE_API_KEY:
            return { ...state, newMessageAPIKey: action.payload };

        case types.SET_SENT_MESSAGES:
            return { ...state, sentMessages: action.payload };

        default:
            return state;
    }
}
