import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap'
import {getUsers} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";

function UsersPage(props) {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users)

    useEffect( () => {
        dispatch (getUsers())

    }, [])
    return (
        <div className="container pt-5 pb-5">
            {console.log(users)}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default UsersPage;