import * as types from "../constants/index";

// API Key related actions
export const addAPIKey = keyObj => ({ type: types.ADD_API_KEY, payload: keyObj });
export const removeAPIKeyByName = name => ({ type: types.REMOVE_API_KEY_BY_NAME, payload: name });
export const setNewAPIKeyModalVisible = visible => ({ type: types.SET_NEW_API_KEY_MODAL_VISIBLE, payload: visible });

// New Message actions
export const setNewMessageFrom = from => ({ type: types.SET_NEW_MESSAGE_FROM, payload: from });
export const setNewMessageTo = to => ({ type: types.SET_NEW_MESSAGE_TO, payload: to });
export const setNewMessageText = text => ({ type: types.SET_NEW_MESSAGE_TEXT, payload: text });
export const setNewMessageAPIKey = key => ({ type: types.SET_NEW_MESSAGE_API_KEY, payload: key });

// Reporting page actions
export const setSentMessages = allMesssages => ({ type: types.SET_SENT_MESSAGES, payload: allMesssages });