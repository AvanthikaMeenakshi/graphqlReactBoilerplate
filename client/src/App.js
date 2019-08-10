import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from "./Queries";
import { Table } from 'reactstrap';

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.getUsers.map(({ id, name, email, job_title }) => (
            <tr>
              <th scope="row">{id}</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{job_title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  )
}

export default App;
