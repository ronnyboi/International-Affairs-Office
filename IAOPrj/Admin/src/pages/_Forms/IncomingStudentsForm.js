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

class IncomingStudentsForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Students", link : "#" },
                { title : "Incoming Students Form", link : "#" },
            ],
            selectedFiles: [],

            activeTab: 1,
            activeTabProgress: 1,
            progressValue : 25,

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			monthDate: new Date(),
			yearDate: new Date(),
			end_date: new Date(),
			date: new Date(),
        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);

        // DatePicker
		this.handleDefault = this.handleDefault.bind(this);
		this.handleAutoClose = this.handleAutoClose.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleMonthChange = this.handleMonthChange.bind(this);
		this.handleYearChange = this.handleYearChange.bind(this);

    }
     //DatePicker
	handleDefault(date) {
		this.setState({ default_date: date });
	}
	handleAutoClose(date) {
		this.setState({ auto_close: date });
	}
	handleStart=(date)=> {
		this.setState({ start_date: date });
	}
	handleEnd=(date)=> {
		this.setState({ end_date: date });
	}
	handleMonthChange(date) {
		this.setState({ monthDate: date });
	}
	handleYearChange(date) {
		this.setState({ yearDate: date });
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
                                                        <Label htmlFor="validationCustom01">Name of the Student</Label>
                                                        <AvField
                                                          name="name"
                                                          placeholder="Eg: Jack Dawson"
                                                          type="text"
                                                          errorMessage="Enter the Name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
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
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </FormGroup>
                                                           </Col>
                                                       </Row>
                                                       <Row>
                                                            <Col lg="6">
                                                                    <FormGroup>
                                                                        <Label for="basicpill-firstname-input14">Activity Undertaken</Label>
                                                                        <AvField
                                                                            name="Activity Undertaken"
                                                                            placeholder="Eg: CSA"
                                                                            type="text"
                                                                            errorMessage="Enter the Activity Undertaken"
                                                                            className="form-control"
                                                                            validate={{ required: { value: true } }}
                                                                            id="validationCustom02"
                                                                            />
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
                                                                            id="validationCustom03"
                                                                            />
                                                                    </FormGroup>
                                                                </Col>
                                                        </Row>
                                            <Button color="primary" type="submit">Submit form</Button>
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

export default IncomingStudentsForm;