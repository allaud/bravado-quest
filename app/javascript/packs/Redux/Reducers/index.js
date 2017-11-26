const initialState = {isLoading : false, userCards: null, searchValue: ""};

export function searchReducer(state = initialState, action) {
	switch(action.type){
		case 'CHANGE_LOAD_STATUS':
				return Object.assign({}, state, {isLoading : action.payload});
			break;
		case 'ADD_USERS':
				return Object.assign({}, state, {userCards : action.payload})
			break;
		case 'CHANGE_SEARCH_VALUE':
				return Object.assign({}, state, {searchValue : action.payload})
			break;
	}
	return state
}