import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Form,InputGroup,Table
 } from "react-bootstrap";

import {data} from './data.js'; 
import {useState} from "react";

function App() {
  const [search,setSearch] = useState('');
  console.log(search)
  return (
    <div className="App">
      <Container>
        <h1>Contact List</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search contacts"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search) || item.email.toLocaleLowerCase().includes(search) || item.Phone.toLocaleLowerCase().includes(search)
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.Phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
