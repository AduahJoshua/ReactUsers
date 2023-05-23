import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Bernie Sanders",
          email: "Bernie@email.com",
          gen: 17,
        },

        {
          name: "Micah West",
          email: "Micah@email.com",
          gen: 11,
        },

      ]
    }
  }

  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem"  }} className="joy">
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;