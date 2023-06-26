import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "./MainContactCard.css";

function MainContactCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContatct] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setContatct([...contact, { name, email, phone, message }]);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="contact-info">
            <h1>Contact Info</h1>
            <ListGroup>
              <h5>Name</h5>
              <ListGroup.Item>{name ? name : "?"}</ListGroup.Item>
              <h6>Phone</h6>
              <ListGroup.Item>{phone ? phone : "?"}</ListGroup.Item>
              <h6>Email</h6>
              <ListGroup.Item disabled>{email ? email : "?"}</ListGroup.Item>
              <h6>Message</h6>
              <ListGroup.Item>{message ? message : "?"}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h1>Contact Us</h1>
            <Form>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainContactCard;
