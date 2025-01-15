import React from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class OldContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            date: '',
            numberOfGuests: '',
            comments: '',
        };
    }

    handleFirstName(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    handlePhoneNumber(event) {
        this.setState({ phoneNumber: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleDate(event) {
        this.setState({ date: event.target.value });
    }

    handleNumberOfGuests(event) {
        this.setState({ numberOfGuests: event.target.value });
    }

    handleComments(event) {
        this.setState({ comments: event.target.value });
    }

    generateUniqueCode() {
        const timestamp = Date.now().toString(36); // Base-36 encoding of current time
        const randomString = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random alphanumeric string
        return `${timestamp}-${randomString}`;
    }

    handleSubmit(event) {
        event.preventDefault();

        const results = document.getElementById('results');
        const uniqueCode = this.generateUniqueCode();

        const {
            firstName,
            lastName,
            phoneNumber,
            email,
            date,
            numberOfGuests,
        } = this.state;

        if (
            firstName &&
            lastName &&
            phoneNumber &&
            email &&
            date &&
            numberOfGuests
        ) {
            results.innerHTML = `
                <div class="modal" id="modal" tabindex="-1">
                    <div class="modal-dialog d-flex align-items-center">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Thank You!</h5>
                            </div>
                            <div class="modal-body">
                                <p>Dear ${firstName} ${lastName}, <br>
                                Thank you for your reservation for ${numberOfGuests} people on ${date}! <br>
                                Your unique order code is: <strong>${uniqueCode}</strong><br>
                                You will receive a confirmation on your email ${email}. <br>
                                If there are any issues, we will contact you at ${phoneNumber}.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success btn-lg" data-bs-dismiss="modal" onClick="window.location.reload()">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            alert('Please fill in all the required fields.');
        }
    }

    render() {
        return (
            <div>
                <Form
                    className="bg-dark text-light p-5"
                    id="form"
                    onSubmit={(event) => this.handleSubmit(event)}
                >
                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="first-name" className="text-capitalize">
                                First name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="first-name"
                                id="first-name"
                                onChange={(event) => this.handleFirstName(event)}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="last-name" className="text-capitalize">
                                Last name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="last-name"
                                id="last-name"
                                onChange={(event) => this.handleLastName(event)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="phone-number" className="text-capitalize">
                                Phone number
                            </Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                onChange={(event) => this.handlePhoneNumber(event)}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="email" className="text-capitalize">
                                Email address
                            </Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                id="email"
                                onChange={(event) => this.handleEmail(event)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="date">Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                id="date"
                                onChange={(event) => this.handleDate(event)}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="guests" className="text-capitalize">
                                Number of guests
                            </Form.Label>
                            <Form.Control
                                type="number"
                                name="guests"
                                id="guests"
                                onChange={(event) => this.handleNumberOfGuests(event)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="comments">Comments</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="comments"
                            cols={20}
                            rows={3}
                            id="comments"
                            onChange={(event) => this.handleComments(event)}
                        />
                    </Form.Group>

                    <Button
                        variant="success"
                        type="submit"
                        className="btn btn-lg mt-4"
                        id="submit-btn"
                    >
                        Submit
                    </Button>
                </Form>

                <div id="results"></div>
            </div>
        );
    }
}

export default OldContactForm;
