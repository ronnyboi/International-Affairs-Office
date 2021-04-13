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

class OutgoingStudentsForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Students", link : "#" },
                { title : "Outgoing Students Form", link : "#" },
            ],
            selectedFiles: [],

            Registration_no: '0123456',
            Name_of_the_student: 'Jack Dawson',
            Email_id: 'jackdawson@gmail.com',
            Transfer_Semester: '4 sem',
            Christ_Programme: 'BSc cme',
            From_date: '24/7/2000',
            To_date: '24/7/2000',
            Coordinating_department_or_office: 'Department of Computer Science',

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			end_date: new Date(),

            

        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
        
        this.handleRegNumChange = this.handleRegNumChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTrSemChange = this.handleTrSemChange.bind(this);
        this.handleCPrgChange = this.handleCPrgChange.bind(this);
        this.handleFrDateChange = this.handleFrDateChange.bind(this);
        this.handleToDateChange = this.handleToDateChange.bind(this);
        this.handleCDeptChange = this.handleCDeptChange.bind(this);
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
	

    handleRegNumChange(event) {
        this.setState({Registration_no: event.target.value});
      }
    handleNameChange(event) {
        this.setState({studentName: event.target.value});
      }
    handleEmailChange(event){
        this.setState({Email_id: event.target.value});
      }
    handleTrSemChange(event){
        this.setState({Transfer_Semester: event.target.value});
    }
    handleCPrgChange(event){
        this.setState({Christ_Programme: event.target.value});
    }
    handleFrDateChange(event){
        this.setState({From_date: event.target.value});
    }
    handleToDateChange(event){
        this.setState({To_date: event.target.value});
    }
    handleCDeptChange(event){
        this.setState({Coordinating_department_or_office: event.target.value});
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

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if(tab >= 1 && tab <=4 ){
                this.setState({
                    activeTab: tab
                });
            }
        }
  }

  toggleTabProgress(tab) {
    if (this.state.activeTabProgress !== tab) {
        if(tab >= 1 && tab <=4 ){
            this.setState({
              activeTabProgress: tab
            });

          if(tab === 1) { this.setState({progressValue : 25}) }
          if(tab === 2) { this.setState({progressValue : 50}) }
          if(tab === 3) { this.setState({progressValue : 75}) }
          if(tab === 4) { this.setState({progressValue : 100}) }
        }
    }
}
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Incoming Students Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Incoming Students Form</h4>
                                        <AvForm className="needs-validation" >
                                            <Row>
                                            <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Register Number</Label>
                                                        <AvField
                                                          name="Register Num"
                                                          placeholder="Eg: 0123456"
                                                          type="text"
                                                          errorMessage="Enter the Register Number"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleRegNumChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Name of the Student</Label>
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
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label for="basicpill-firstname-input14">Transfer Semester</Label>
                                                                        <AvField
                                                                            name="Transfer Semester"
                                                                            placeholder="Eg: 4 Sem"
                                                                            type="text"
                                                                            errorMessage="Enter the Transfer Semester"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom02"
                                                                            onChange={this.handleTrSemChange}
                                                                            />
                                                                    </FormGroup>
                                                                </Col>
                                                        </Row>
                                                       <Row>
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label for="basicpill-firstname-input14">Christ Programme</Label>
                                                                        <AvField
                                                                            name="Christ Programme"
                                                                            placeholder="Eg: BSc CME"
                                                                            type="text"
                                                                            errorMessage="Enter the Christ Programme"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom03"
                                                                            onChange={this.handleCPrgChange}
                                                                            />
                                                                    </FormGroup>
                                                                </Col>
                                                        </Row>
                                                        <Row>
                                                           <Col lg = "6">
                                                           <FormGroup className="mb-0">
                                                                <div>
                                                                     <div>
                                                                        <Label for="basicpill-firstname-input14">From Date</Label>
                                                                        <DatePicker
                                                                            selected={this.state.start_date}
                                                                            selectsStart
                                                                            className="form-control"
                                                                            placeholderText="From"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleStart}
                                                                            onChange={this.handleFrDateChange}
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
                                                                    <Label for="basicpill-firstname-input14">To Date</Label>
                                                                        <DatePicker
                                                                            selected={this.state.end_date}
                                                                            selectsEnd
                                                                            className="form-control"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleEnd}
                                                                            onChange={this.handleToDateChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </FormGroup>
                                                           </Col>
                                                       </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label for="basicpill-firstname-input14">Coordinating Department/Office</Label>
                                                                        <AvField
                                                                            name="Coordination Department/Office"
                                                                            placeholder="Eg: Department of Computer Science"
                                                                            type="text"
                                                                            errorMessage="Enter the Coordinating Department/Office"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom04"
                                                                            onChange={this.handleCDeptChange}
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

export default OutgoingStudentsForm;