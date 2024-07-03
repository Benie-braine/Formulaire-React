import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulaire() {
  return (
    <Form className='formes' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="Name" placeholder="Noms" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicfisr">
        
        <Form.Control type="password" placeholder="Prenoms" />
      </Form.Group>
     
      <Form.Select aria-label="Default select example">
      <option>Referentiels</option>
      <option value="1">Developpement Web</option>
      <option value="2">Réferent Digital</option>
      <option value="3">Autres</option>
    </Form.Select>
      <Button className='BOUTON' variant="primary" type="submit">
        Envoyé
      </Button>
    </Form>
  );
  
  
}


export default Formulaire


 