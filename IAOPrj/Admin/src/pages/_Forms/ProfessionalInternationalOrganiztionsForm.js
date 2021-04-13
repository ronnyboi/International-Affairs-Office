import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, FormGroup, Button, Label, Input ,Container, CustomInput, InputGroup, Form, InputGroupAddon, TabContent, TabPane, NavItem, NavLink, Progress } from "reactstrap";

import classnames from 'classnames';
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";

// Date Time Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class ProfessionalInternationalOrganizationForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Professional International Organization", link : "#" },
                { title : "Professional International Organization Form", link : "#" },
            ],
            selectedFiles: [],

            Activities_performed: 'Webinars',
            Consultancy_amount: "5000",
            Department:'Department of Computer Science',

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			end_date: new Date(),

            

        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
        
        this.handleActivities_performedChange = this.handleActivities_performedChange.bind(this);
        this.handleConsultancy_amountChange = this.handleConsultancy_amountChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // DatePicker
		this.handleStart = this.handleStart.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
    }
     //DatePicker
	
	handleStart=(date)=> {
		this.setState({ start_date: date });
	}
	handleEnd=(date)=> {
		this.setState({ end_date: date });
	}
	

    handleActivities_performedChange(event) {
        this.setState({Activities_performed: event.target.value});
    }
    handleConsultancy_amountChange(event) {
        this.setState({Consultancy_amount: event.target.value});
    }
    handleDepartmentChange(event) {
        this.setState({Department: event.target.value});
    }
    
    handleSubmit(event) {
        alert('An entry is made: ' + this.state.studentName + this.state.indate);
        event.preventDefault();
      }

    handleAcceptedFiles = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
    
        this.setState({ selectedFiles: files });
    };

        /**
     * Formats the size
     */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Professional International Organization Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Professional International Organization Form</h4>
                                        <AvForm className="needs-validation" >
                                            
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Activities Performed</Label>
                                                        <AvField
                                                          name="Activities_performed"
                                                          placeholder="Eg: Webinar"
                                                          type="text"
                                                          errorMessage="Enter the Activities performed"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleActivities_performedChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Consultancy Amount</Label>
                                                        <AvField
                                                          name="Consultancy_amount"
                                                          placeholder="Eg: 5000"
                                                          type="text"
                                                          errorMessage="Enter the Consultancy amount"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleConsultancy_amountChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Department</Label>
                                                        <AvField
                                                          name="Department"
                                                          placeholder="Eg: Department of Computer Science"
                                                          type="text"
                                                          errorMessage="Enter the Department"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleDepartmentChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            
                                            <Button color="primary" type="submit" onClick={this.handleSubmit}>Submit form</Button>
                                        </AvForm>
                                    </CardBody>
                                </Card>
                            </Col> 
                        </Row>
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default ProfessionalInternationalOrganizationForm;