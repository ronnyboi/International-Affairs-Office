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

class USACForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "USAC", link : "#" },
                { title : "USAC Form", link : "#" },
            ],
            selectedFiles: [],

            Name_of_person: 'Jack Dawson',
            Home_university: "University",
            Country: 'India',
            Arrival_date: '24/7/2000',
            Departure_Date: '24/7/2000',
            Remarks: 'Remarks',

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			end_date: new Date(),

            

        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleHome_universityChange = this.handleHome_universityChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleArrival_dateChange = this.handleArrival_dateChange.bind(this);
        this.handleDeparture_DateChange = this.handleDeparture_DateChange.bind(this);
        this.handleRemarksChange = this.handleRemarksChange.bind(this);
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
	

    handleNameChange(event) {
        this.setState({Name_of_person: event.target.value});
    }
    handleHome_universityChange(event) {
        this.setState({Home_university: event.target.value});
    }
    handleCountryChange(event) {
        this.setState({Country: event.target.value});
    }
    handleArrival_dateChange(event){
        this.setState({Arrival_date: event.target.value});
    }
    handleDeparture_DateChange(event){
        this.setState({Departure_Date: event.target.value});
    }
    handleRemarksChange(event){
        this.setState({Remarks: event.target.value});
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

                    <Breadcrumbs title="USAC Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">USAC Form</h4>
                                        <AvForm className="needs-validation" >
                                            
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Name of Person</Label>
                                                        <AvField
                                                          name="name"
                                                          placeholder="Eg: Jack Dawson"
                                                          type="text"
                                                          errorMessage="Enter the Name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleNameChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Home University</Label>
                                                        <AvField
                                                          name="Home_university"
                                                          placeholder="Eg: University"
                                                          type="text"
                                                          errorMessage="Enter the Home university"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleHome_universityChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Country</Label>
                                                        <AvField
                                                          name="Country"
                                                          placeholder="Eg: India"
                                                          type="text"
                                                          errorMessage="Enter the Country"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleCountryChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                                       
                                                        <Row>
                                                           <Col lg = "6">
                                                           <FormGroup className="mb-0">
                                                                <div>
                                                                     <div>
                                                                        <Label for="basicpill-firstname-input14">Arrival date</Label>
                                                                        <DatePicker
                                                                            selected={this.state.start_date}
                                                                            selectsStart
                                                                            className="form-control"
                                                                            placeholderText="From"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleStart}
                                                                            onChange={this.handleArrival_dateChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                            </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg = "6">
                                                            <FormGroup className="mb-0">
                                                                <div>
                                                                    <div>
                                                                    <Label for="basicpill-firstname-input14">Departure Date</Label>
                                                                        <DatePicker
                                                                            selected={this.state.end_date}
                                                                            selectsEnd
                                                                            className="form-control"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleEnd}
                                                                            onChange={this.handleDeparture_DateChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </FormGroup>
                                                           </Col>
                                                       </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label for="basicpill-firstname-input14">Remarks</Label>
                                                                        <AvField
                                                                            name="Remarks"
                                                                            placeholder="Enter the Remarks"
                                                                            type="text"
                                                                            errorMessage="Enter the Remarks"
                                                                            className="form-control"
                                                                            validate={{ required: { value: false } }}
                                                                            id="validationCustom04"
                                                                            onChange={this.handleRemarksChange}
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

export default USACForm;