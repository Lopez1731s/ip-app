import { useContext, useState } from "react";
import { Col, Card, Figure, Row, Alert, Button, Table } from "react-bootstrap";
import { DataContext } from "../../context/Context";

const DataIP = () => {
    const { data, error } = useContext(DataContext);

    const [zoom, setZoom] = useState(1)
    const [theme, setTheme] = useState("dark-v10")

    return (
        <Row>
            <Col xs={12} md={12} lg={12} className="mt-3">

                {error ? (
                    <Alert variant={"danger"}>
                        <h4>{error.title}</h4>
                        {error.message}
                    </Alert>
                ) : ""}

                {data ? (
                    <>
                        <Card className="text-dark">
                            <Row>
                                <Col xs={12} md={12} lg={8}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h3>Map</h3>
                                        </Card.Title>

                                        <Figure>
                                            <Figure.Image
                                                alt="map"
                                                src={"https://api.mapbox.com/styles/v1/mapbox/" + theme + "/static/pin-s-x+E40000(" + data.loc.substring(8, 14) + "," + data.loc.substring(0, 7) + ")/" + data.loc.substring(8, 14) + "," + data.loc.substring(0, 7) + "," + zoom + ",0/1000x400?before_layer=admin-0-boundary&access_token=" + process.env.React_App_ACCESS_TOKEN_MAP}
                                            />
                                            <Figure.Caption>
                                                Country: {data.timezone}
                                            </Figure.Caption>
                                        </Figure>
                                    </Card.Body>
                                </Col>

                                <Col xs={12} md={12} lg={4}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h3>Zoom</h3>
                                        </Card.Title>
                                        <Row>
                                            <Col xs={4} md={4} lg={4}>
                                                <div className="d-flex justify-content-between">
                                                    <Button variant={"success"} onClick={() => setZoom(zoom + 1)}>+</Button>
                                                    <Button variant={"success"} onClick={() => setZoom(zoom - 1)}>-</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>
                                            <h3>Theme</h3>
                                        </Card.Title>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <div className="d-grid gap-2">
                                                    <Button variant="dark" size="lg" onClick={() => setTheme("dark-v10")}>
                                                        Dark
                                                    </Button>
                                                    <Button variant="danger" size="lg" onClick={() => setTheme("streets-v11")}>
                                                        Streets
                                                    </Button>
                                                    <Button variant="warning" size="lg" onClick={() => setTheme("satellite-streets-v11")}>
                                                        Satellite
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                                <Col xs={12} md={12} lg={8}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h3>IP Information</h3>
                                        </Card.Title>
                                        {<Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>(Index)</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>ip</td>
                                                    <td>{data.ip}</td>
                                                </tr>
                                                <tr>
                                                    <td>hostname</td>
                                                    <td>{data.hostname ? data.hostname : "unknow"}</td>
                                                </tr>
                                                <tr>
                                                    <td>city</td>
                                                    <td>{data.city}</td>
                                                </tr>
                                                <tr>
                                                    <td>region</td>
                                                    <td>{data.region}</td>
                                                </tr>
                                                <tr>
                                                    <td>country</td>
                                                    <td>{data.country}</td>
                                                </tr>
                                                <tr>
                                                    <td>loc</td>
                                                    <td>{data.loc}</td>
                                                </tr>
                                                <tr>
                                                    <td>org</td>
                                                    <td>{data.org}</td>
                                                </tr>
                                                <tr>
                                                    <td>timezone</td>
                                                    <td>{data.timezone}</td>
                                                </tr>
                                            </tbody>
                                        </Table>}
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </>
                ) : ""}
            </Col>
        </Row>
    )
}

export default DataIP