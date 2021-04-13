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

class WebinarsForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Webinars", link : "#" },
                { title : "Webinars Form", link : "#" },
            ],
            selectedFiles: [],

            Webinar: 'Webinar Name',
            Speaker: 'Prof. Jack Dawson',
            Organised_on: '27/03/2021',
            Organised_by: 'Department of Computer Science',

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			end_date: new Date(),

            

        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
        
        this.handleWebinarChange = this.handleWebinarChange.bind(this);
        this.handleSpeakerChange = this.handleSpeakerChange.bind(this);
        this.handleOrganised_onChange = this.handleOrganised_onChange.bind(this);
        this.handleOrganised_byChange = this.handleOrganised_byChange.bind(this);


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
	

    handleWebinarChange(event) {
        this.setState({Webinar: event.target.value});
      }
    handleSpeakerChange(event) {
        this.setState({Speaker: event.target.value});
      }
    handleOrganised_onChange(event) {
        this.setState({Organised_on: event.target.value});
      }
    handleOrganised_byChange(event) {
        this.setState({Organised_by: event.target.value});
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

                    <Breadcrumbs title="Webinars Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Webinars Form</h4>
                                        <AvForm className="needs-validation" >
                                            <Row>
                                            <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Webinar Name</Label>
                                                        <AvField
                                                          name="Webinar Name"
                                                          placeholder="Eg: Webinar"
                                                          type="text"
                                                          errorMessage="Enter the Webinar Name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleWebinarChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Speaker Name</Label>
                                                        <AvField
                                                          name="Speaker"
                                                          placeholder="Eg: Jack Dawson"
                                                          type="text"
                                                          errorMessage="Enter the Speaker's name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleSpeakerChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                                        <Row>
                                                           <Col lg = "6">
                                                           <FormGroup className="mb-0">
                                                                <div>
                                                                     <div>
                                                                        <Label for="basicpill-firstname-input14">Date of Webinar</Label>
                                                                        <DatePicker
                                                                            selected={this.state.start_date}
                                                                            selectsStart
                                                                            className="form-control"
                                                                            placeholderText="27/03/2021"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleStart}
                                                                            onChange={this.handleOrganised_onChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                            </FormGroup>
                                                            </Col>
                                                        </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Organised By</Label>
                                                        <AvField
                                                          name="Affiliation"
                                                          placeholder="Eg: Department Of Computer Science"
                                                          type="text"
                                                          errorMessage="Enter the Organising Department"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleOrganised_byChange}
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

export default WebinarsForm;