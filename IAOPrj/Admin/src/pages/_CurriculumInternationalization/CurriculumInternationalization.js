import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class CurriculumInternationalization extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "International Affairs Office", link : "#" },
                { title : "Curriculum Internationalization", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Curriculum Internationalization" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default CurriculumInternationalization;