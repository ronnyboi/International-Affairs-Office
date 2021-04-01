import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class CSAIncomingStudents extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Center for Social Action (CSA)", link : "#" },
                { title : "Incoming Students", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="CSA Incoming Students" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default CSAIncomingStudents;