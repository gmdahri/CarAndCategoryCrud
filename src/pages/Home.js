import TableComponent from "../Components/CarDataTable";
import CategoryTableComponent from "../Components/CategoriesDataTable";

import { Card, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
const Home = () => {
    const tabs = [{ name: "bus", title: "Bus" },
    { name: "sedan", title: "Sedan" },
    { name: "suv", title: "SUV" }]
    const [category, setCategory] = useState([{ name: "bus", title: "Bus" },
    { name: "sedan", title: "Sedan" },
    { name: "suv", title: "SUV" }]);
    return (
        <div>
            <Tabs
                defaultActiveKey="category"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
              
                <Tab eventKey='category' title="Category" >
                <Card>
                <Card.Header>
                    <h3>Categories</h3>
                </Card.Header>
                <Card.Body>
                <CategoryTableComponent />
                </Card.Body>
            </Card>
                </Tab>
                <Tab eventKey='cars' title="Cars" >
                <Card>
                <Card.Header>
                    <h3>Cars</h3>
                </Card.Header>
                <Card.Body>
                <TableComponent />
                </Card.Body>
            </Card>
                </Tab>
            </Tabs>
            





        </div>
    )
}
export default Home;