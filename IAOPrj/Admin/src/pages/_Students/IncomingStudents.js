import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class IncomingStudents extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Students", link : "#" },
                { title : "Incoming Students", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Incoming Students" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default IncomingStudents;