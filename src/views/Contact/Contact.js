import React from 'react';
import { Row, Input, Button } from 'react-materialize';

const Contact = () => (
  <section className="contact">
    <div className="container">
      <h1>Contact</h1>
      <Row>
        <Input s={12} label="First Name" />
        <Input s={12} label="Last Name" />
        <Input s={12} type="password" label="Password" />
        <Input s={12} type="email" label="Email" />
        <Button waves="light">Submit</Button>
      </Row>
    </div>
  </section>
);

export default Contact;
