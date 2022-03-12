import { useContext, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { DataContext } from "../../context/Context";

const SearchIP = () => {
  const [dataIP, setDataIP] = useState("")
  
  const {execute} = useContext(DataContext)

  const handleChange = ({ target }) => {
    setDataIP({
      ...dataIP,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    execute({ data: dataIP })
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <h3>Search any IP Adress </h3>
        <Col xs={10} md={8} lg={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="(e.g.): 8.8.8.8" name="ip" onChange={handleChange} required />
          </Form.Group>
        </Col>

        <Col xs={2} md={2} lg={4}>
          <Button variant="success" type="submit">Sent</Button>
        </Col >
      </Row>
    </Form>
  )
}

export default SearchIP