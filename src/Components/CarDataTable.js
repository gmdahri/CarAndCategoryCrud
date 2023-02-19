import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable";
import { connect, useDispatch } from "react-redux";
import { addCarDetailAction, DeleteCarDetailAction, EditCarDetailAction, getCarDetailActionByCategory, getCarDetailsAction } from "../store/actions/CarDetailAction";

// Then, use it in a component.
function TableComponent(props) {
    const [show, setShow] = useState(false)
    const [color, setColor] = useState('');
    const [model, setModel] = useState('');
    const [make, setMake] = useState('');
    const [regNo, setRegNo] = useState('');
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [flag, setFlag] = useState(false)
    const [carId, setCarId]=useState('')
    const dispatch = useDispatch()
    let errorsObj = { name: '', model: '', make: '', regNo: '', color: '' };
    const [errors, setErrors] = useState(errorsObj);

    const STORY_HEADERS = [
        {
            prop: "color",
            title: "Color",
            isFilterable:true

        },
        {
            prop: "model",
            title: "Model",
            isSortable: true,
            isFilterable:true
        },
        {
            prop: "make",
            title: "Make",
            isSortable: true,
            isFilterable:true
        },
        {
            prop: "registrationNo",
            title: "Registration No",
            isSortable: true,
            isFilterable:true
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
                            setCarId(row._id)
                            setName(row?.name?._id)
                            setColor(row.color)
                            setModel(row.model)
                            setMake(row.make)
                            setRegNo(row.registrationNo)
                            setFlag(true)
                            setShow(true)

                        }}
                    >
                        Edit
                    </Button>

                    <Button
                        variant="outline-primary"
                        size="sm"
                    onClick={() => {
                       dispatch(DeleteCarDetailAction(row))
                    }}
                    >
                        Delete
                    </Button>
                </div>
            )
        }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (name === '' || name === undefined) {
            errorObj.name = 'Category is Required';
            error = true;
        }
        if (model === '') {
            errorObj.model = 'Model is Required';
            error = true;
        }
        if (color === '') {
            errorObj.color = 'Color is Required';
            error = true;
        }
        if (make === '') {
            errorObj.make = 'Make is Required';
            error = true;
        }
        if (regNo === '') {
            errorObj.regNo = 'Registration Number is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
            return;
        }

        const data = {
            id:carId,
            categoryId: name,
            color: color,
            model: model,
            make: make,
            registrationNo: regNo
        }
        //if flag is true, call update API otherwise call add new record API
        if (flag) {
            dispatch(EditCarDetailAction(data))
            setFlag(false)
        }
        else {
            dispatch(addCarDetailAction(data))
        }
        clearForm()
        setShow(false)
    }
    useEffect(() => {
        dispatch(getCarDetailsAction())
    }, [])
    const handleSelect = (e) => {
        setCategory(e.target.value)
        let id = e.target.value
        // if id is default bring all car detail otherwise bring car details according to category
        if (id !== 'default')
            dispatch(getCarDetailActionByCategory(id))
        else {
            dispatch(getCarDetailsAction())
        }
    }
    //reseting the form.
    const clearForm = () => {
        setName('')
        setColor('')
        setMake('')
        setModel('')
        setRegNo('')
    }
    return (
        <div>
            <Row className=" ">
                <Col
                    xs={12}
                    lg={8}
                    className="d-flex  justify-content-start align-items-start"
                >
                    <Button size="md" onClick={() => setShow(true)}>Add a new Category</Button>

                </Col>

                <Col
                    xs={12}
                    lg={4}
                    className="d-flex  justify-content-start align-items-start"
                >
                    <Form.Select aria-label="Default select example" onChange={handleSelect} >
                        <option value="default">Please Select A Category</option>

                        {props.categories && props.categories.map((item, index) => {
                            return (
                                <option key={index} value={item._id}>{item.name}</option>
                            )
                        })
                        }

                    </Form.Select>

                </Col>

            </Row>
            <Row>
                {props.carDetail &&
                    <DatatableWrapper
                        body={props.carDetail}
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
                }

            </Row>
            <Modal show={show} onHide={() => {
                setFlag(false)
                setShow(false)
                clearForm();
            }}>
                <Form onSubmit={handleSubmit}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add a new Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Select aria-label="Default select example" value={name} onChange={(e) => setName(e.target.value)}>
                                <option >Please Select A Category</option>

                                {props.categories && props.categories.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    )
                                })
                                }

                            </Form.Select>
                            {errors.name && <div className="text-danger fs-12">{errors.name}</div>}

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Color" />
                            {errors.color && <div className="text-danger fs-12">{errors.color}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Enter Model" />
                            {errors.model && <div className="text-danger fs-12">{errors.model}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Make</Form.Label>
                            <Form.Control type="text" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Enter Make" />
                            {errors.make && <div className="text-danger fs-12">{errors.make}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Enter Registration Number" />
                            {errors.regNo && <div className="text-danger fs-12">{errors.regNo}</div>}
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {
                            setFlag(false)
                            setShow(false)
                            clearForm();
                        }}>
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
//sending state as prop to component
const mapToState = (state) => {
    return {
        categories: state.categories.categories,
        carDetail: state.carDetail.carDetail
    }
}

export default connect(mapToState)(TableComponent)