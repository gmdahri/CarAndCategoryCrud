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

// import Data from "./data.json";
const Data = [
    { id: 1, name: 'SUV' },
    { id: 2, name: 'BUS' },
    { id: 3, name: 'SUDEN' }

]

// Create table headers consisting of 4 columns.


// Then, use it in a component.
function CategoryTableComponent() {

    const [show, setShow] = useState(false)
    const [inputCategory, setInputCategory] = useState('')
    const STORY_HEADERS = [
        {
            prop: "name",
            title: "Category Name",
            isFilterable: true
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

                            setInputCategory(row.name)
                            setShow(true)
                        }}
                    >
                        Edit
                    </Button>

                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => {
                            Data = Data.filter((item) => item.name !== row.name)
                        }}
                    >
                        Delete
                    </Button>
                </div>
            )
        }
    ];
    const error = { category: '' }
    const handleSubmit = () => {
        setShow(true)
    }

    return (
        <DatatableWrapper
            body={Data}
            headers={STORY_HEADERS}
            paginationOptionsProps={{
                initialState: {
                    rowsPerPage: 5,
                    options: [5, 10, 15, 20]
                }
            }}
        >
            <Row className=" ">

                <Col
                    xs={12}
                    lg={4}
                    className="d-flex flex-col justify-content-start align-items-start"
                >
                    <Button onClick={() => setShow(true)}>Add a new Category</Button>
                </Col>
            </Row>
            <Row className="mb-4 p-2">

                <Col
                    xs={12}
                    lg={4}
                    className="d-flex flex-col justify-content-end align-items-end"
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
            <Modal show={show} onHide={() => setShow(false)}>
                <Form onSubmit={handleSubmit}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add a new Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control type="text" value={inputCategory} onChange={(e) => setInputCategory(e.target.value)} placeholder="Enter Category Name" />
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
        </DatatableWrapper>
    );
}


export default CategoryTableComponent