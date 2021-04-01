import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class OutgoingFaculty extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Faculty", link : "#" },
                { title : "Outgoing Faculty", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Outgoing Faculty" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default OutgoingFaculty;