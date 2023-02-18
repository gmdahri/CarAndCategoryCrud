import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable";

// import TABLE_BODY from "./data.json";
const TABLE_BODY = [
    { name: 'w', username: "b", score: 10 },
    { name: 'x', username: "c", score: 20 },
    { name: 'y', username: "d", score: 30 },
    { name: 'z', username: "e", score: 40 },

]

// Create table headers consisting of 4 columns.


// Then, use it in a component.
function TableComponent() {
    const [show, setShow] = useState(false)
    const [color, setColor] = useState('');
    const [model, setModel] = useState('');
    const [make , setMake] = useState('');
    const [regNo, setRegNo] = useState('');

    const STORY_HEADERS = [
        {
            prop: "name",
            title: "Car Name",
            isFilterable: true
        },
        {
            prop: "color",
            title: "Color"
        },
        {
            prop: "model",
            title: "Model",
            isSortable: true
        },
        {
            prop: "make",
            title: "Make",
            isSortable: true
        },
        {
            prop: "registrationNO",
            title: "Registration No",
            isSortable: true
        },
        {
            prop: "action",
            title: "Action",
            cell: (row) => (
                <div >

                    <Button
                        variant="outline-primary"
                        size="sm"
                        style={{ marginRight: '1rem' }}
                        onClick={() => {

                            // setInputCategory(row.name)
                            setShow(true)
                        }}
                    >
                        Edit
                    </Button>

                    <Button
                        variant="outline-primary"
                        size="sm"
                    // onClick={() => {
                    //     Data = Data.filter((item) => item.name !== row.name)
                    // }}
                    >
                        Delete
                    </Button>
                </div>
            )
        }
    ];
    const handleSubmit = () => {
        setShow(true)
    }
    return (
        <div>
            <Row className=" ">
                <Col
                    xs={12}
                    lg={8}
                    className="d-flex  justify-content-start align-items-start"
                >
                    <Button size="md" onClick={()=>setShow(true)}>Add a new Category</Button>

                </Col>

                <Col
                    xs={12}
                    lg={4}
                    className="d-flex  justify-content-start align-items-start"
                >
                    <Form.Select aria-label="Default select example">
                        <option>Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>

            </Row>
            <Row>

                <DatatableWrapper
                    body={TABLE_BODY}
                    headers={STORY_HEADERS}
                    paginationOptionsProps={{
                        initialState: {
                            rowsPerPage: 5,
                            options: [5, 10, 15, 20]
                        }
                    }}
                >

                    <Row className="mb-4 p-2">
                        <Col
                            xs={12}
                            lg={4}
                            sm={6}
                            style={{ marginTop: '2rem' }}
                            className="d-flex flex-col justify-content-start align-items-start "
                        >
                            <Filter />
                        </Col>
                        <Col
                            xs={12}
                            lg={4}
                            sm={6}

                            className="d-flex flex-col justify-content-start align-items-start"
                        >

                            <PaginationOptions />
                        </Col>
                        <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-end align-items-end"
                        >
                            <Pagination />
                        </Col>
                    </Row>
                    <Table>
                        <TableHeader />
                        <TableBody />
                    </Table>
                </DatatableWrapper>
            </Row>
            <Modal show={show} onHide={() => setShow(false)}>
                <Form onSubmit={handleSubmit}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add a new Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Select aria-label="Default select example">
                                <option>Select Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Color" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Enter Model" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Make</Form.Label>
                            <Form.Control type="text" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Enter Make" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Enter Registration Number" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        </div>
    );
}


export default TableComponent