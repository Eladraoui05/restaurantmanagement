import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Vous pouvez gérer la déconnexion ici (par exemple en supprimant les données de session)
    navigate('/signin'); // Redirection vers la page de connexion
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '600px', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 className="text-center mb-4" style={{ color: '#d4af37' }}>Welcome to the Dashboard</h2>
        <p className="text-center">This is the admin dashboard.</p>
        <div className="text-center">
          <Button
            variant="dark"
            onClick={handleLogout}
            style={{
              backgroundColor: '#d4af37',
              borderColor: '#d4af37',
              width: '100%',
              padding: '12px',
              fontWeight: 'bold',
              borderRadius: '10px'
            }}
          >
            Log Out
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Dashboard;
