    import React, { useState } from 'react';
    import { Form, Button, Container, Card } from 'react-bootstrap';

    function SignUpForm() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Account created successfully!');
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Card style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h2 className="text-center mb-4" style={{ color: '#d4af37' }}>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ borderRadius: '10px', padding: '10px', borderColor: '#d4af37' }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ borderRadius: '10px', padding: '10px', borderColor: '#d4af37' }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ borderRadius: '10px', padding: '10px', borderColor: '#d4af37' }}
                />
            </Form.Group>

            <Button
                variant="dark"
                type="submit"
                style={{
                backgroundColor: '#d4af37',
                borderColor: '#d4af37',
                width: '100%',
                padding: '12px',
                fontWeight: 'bold',
                borderRadius: '10px'
                }}
            >
                Sign Up
            </Button>
            </Form>
        </Card>
        </Container>
    );
    }

    export default SignUpForm;
