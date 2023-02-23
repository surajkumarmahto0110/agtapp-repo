import { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import './Navigationbar.css';


function NavigationBar() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                {/* First section */}
                <div className="navbar-brand">
                        <img src="https://www.atg.world/public/assets/Frontend/img/colorednewlogo.svg" alt="ATG.World" style={{ width: "50px" }} />
                </div>
                {/* Second section */}
                <div className="mx-auto">
                    <InputGroup>
                            <Form.Control className='form-control mx-auto' type="text" placeholder="Search for your best post in ATG" />
                            <Button className="btn  btn-secondary card-link" variant="outline-secondary" id="button-addon2">
                            <i className="bi bi-search text-light"> Search</i>
                        </Button>
                    </InputGroup>
                </div>
                {/* Third section */}
                <div className="d-flex align-items-center">
                    <div>Create account it's free  </div>
                        <Button className="btn  btn-secondary card-link" variant="primary" onClick={handleShow}>Create Account</Button>
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Create Account
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavigationBar;
