import {types} from "../type";
import data from "bootstrap/js/src/dom/data";

export const messageOn = (data) => {
    return {
        type: types.MESSAGE_TRUE,
        payload: data
    }
}

export const messageOff = () => {
    return {
        type: types.MESSAGE_FALSE
    }
}




export const createUserAction = (data, emptyInputs) => {
    return async function (dispatch) {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        let text = 'ПОЛЬЗОВАТЕЛЬ НЕ СОЗДАН. Пустые поля: ';
        emptyInputs.map((string, ) =>{
            text+=`${string}, `;

        });

        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        if(response.status === 404) {
            dispatch(messageOn({text: "пользователь не создан", button: "danger"}));
            setTimeout(() => {
                dispatch(messageOff())
            }, 5000)
        } else if (emptyInputs.length !== 0){
            dispatch(messageOn({text: text, button: "danger"}));

        }
        else {

            dispatch(messageOn({text: "ПОЛЬЗОВТЕЛЬ СОЗДАН", button: "success"}));
            setTimeout(() => {
                dispatch(messageOff())
            }, 5000)
        }
    }
}

export const usersAction = (data) => {
    return {
        type: types.USERS,
        payload: data
    }
}


export const getUsers = () => {
    return async function (dispatch) {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        console.log(data)

        dispatch(usersAction(data))
    }
}