import ajax from 'jquery-ajax';

export function initApp(){
	return (dispatch) => {
		dispatch(changeLoadStatus(true));
		dispatch(loadUsers());
	}
}

export function changeLoadStatus(status){
	return {
		type: 'CHANGE_LOAD_STATUS',
		payload: status
	}
}

export function loadUsers(){
	return (dispatch) => {
		ajax.get("http://localhost:3000/users", function(data){
			dispatch(addUsers(data));
			dispatch(changeLoadStatus(false));
		})
	}
}

export function addUsers(data){
	return {
		type: 'ADD_USERS',
		payload: data
	}
}

export function changeSearchValue(value){
	return {
		type: 'CHANGE_SEARCH_VALUE',
		payload: value
	}
}