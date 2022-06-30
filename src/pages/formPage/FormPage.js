import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {createUserAction} from "../../redux/actions/actions";

function FormPage(props) {
    const [data, setData] = useState({
        name: "",
        lastName: "",
        age: 0,
        email: "",
    });

    const dispatch = useDispatch()

    const message = useSelector(state => state.message.status)
    const text = useSelector(state => state.message.text)
    const button = useSelector(state => state.message.button)

    const changeInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        const empyInputs = [];
        for( let i of Object.keys(data)){
            if (data[i] === ''){
                empyInputs.push(i)
            } else if (data[i] === 0){
                empyInputs.push(i)
            }
        }
        dispatch(createUserAction(data, empyInputs))
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Label className="w-100">Name
                            <Form.Control type="text" placeholder="Name" name="name" onChange={changeInput} value={data.name} className="w-100"/>
                        </Form.Label>
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Label className="w-100">Last Name
                            <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={changeInput} value={data.lastName} className="w-100"/>
                        </Form.Label>
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Label className="w-100">Age
                            <Form.Control type="number" placeholder="Age" name="age" onChange={changeInput} value={data.age} className="w-100"/>
                        </Form.Label>
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Label className="w-100">Email address
                            <Form.Control type="email" placeholder="name@example.com" name="email" onChange={changeInput} value={data.email} className="w-100"/>
                        </Form.Label>
                    </Form.Group>
                </div>
                <div className="col-3 offset-9 mb-3">
                    <Button variant="primary" onClick={submit} className="w-100">Primary</Button>{' '}
                </div>
                {
                    message
                    &&


                <div className="col-3 offset-9">
                    <Alert variant={button} className="w-100 text-center">
                        {text}

                    </Alert>
                </div>
                }
            </div>
        </div>
    );
}

export default FormPage;