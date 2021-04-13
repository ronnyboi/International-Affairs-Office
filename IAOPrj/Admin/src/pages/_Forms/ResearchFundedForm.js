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

class ResearchFundedForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Research", link : "#" },
                { title : "Research Project Funded Form", link : "#" },
            ],
            selectedFiles: [],
            
            Project_name: 'Project Code',
            Team_members: 'Jack, Max, Luke',
            Project_status: 'Completed',
            Project_start_date: '24/7/2000',
            Project_end_date: '24/7/2000',
            Project_grant: '100000',
            Department: 'Department of Computer Science',

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			end_date: new Date(),

            

        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
        
        this.handleProject_nameChange = this.handleProject_nameChange.bind(this);
        this.handleTeam_membersChange = this.handleTeam_membersChange.bind(this);
        this.handleProject_statusChange = this.handleProject_statusChange.bind(this);
        this.handleProject_start_dateChange = this.handleProject_start_dateChange.bind(this);
        this.handleProject_end_dateChange = this.handleProject_end_dateChange.bind(this);
        this.handleProject_grantChange = this.handleProject_grantChange.bind(this);
        this.handleDeptChange = this.handleDeptChange.bind(this);
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
	

    handleProject_nameChange(event) {
        this.setState({Project_name: event.target.value});
      }
    handleTeam_membersChange(event) {
        this.setState({Team_members: event.target.value});
      }
    handleProject_statusChange(event){
        this.setState({Project_status: event.target.value});
      }
    handleProject_start_dateChange(event){
        this.setState({Project_start_date: event.target.value});
    }
    handleProject_end_dateChange(event){
        this.setState({Project_end_date: event.target.value});
    }
    handleProject_grantChange(event){
        this.setState({Project_grant: event.target.value});
    }
    handleDeptChange(event){
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

                    <Breadcrumbs title="Research Funded Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Research Funded Form</h4>
                                        <AvForm className="needs-validation" >
                                            
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Project Name</Label>
                                                        <AvField
                                                          name="ProjectName"
                                                          placeholder="Eg: Project Code"
                                                          type="text"
                                                          errorMessage="Enter the Project Name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleProject_nameChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Team Members</Label>
                                                        <AvField
                                                          name="TeamMembers"
                                                          placeholder="Eg: Jack, Max, Luke"
                                                          type="text"
                                                          errorMessage="Enter the Team member's Name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleTeam_membersChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                    <Label>Project Status</Label>
                                                    <select className="custom-select" errorMessage="Enter the Project Status" onChange={this.handleTeam_membersChange}>
                                                    <option defaultValue>Select Project Status</option>
                                                    <option value="AE">Completed</option>
                                                    <option value="VI">In Progress</option>
                                                    <option value="MC">Started</option>
                                                    </select>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg = "6">
                                                <FormGroup className="mb-0">
                                                <div>
                                                     <div>
                                                        <Label for="basicpill-firstname-input14">Project Start Date</Label>
                                                        <DatePicker
                                                            selected={this.state.start_date}
                                                            selectsStart
                                                            className="form-control"
                                                            placeholderText="From"
                                                            startDate={this.state.start_date}
                                                            endDate={this.state.end_date}
                                                            onChange={this.handleStart}
                                                            onChange={this.handleProject_start_dateChange}
                                                            />
                                                    </div>
                                                </div>
                                                                
                                                </FormGroup>
                                                </Col>
                                                <Col lg = "6">
                                                    <FormGroup className="mb-0">
                                                        <div>
                                                            <div>
                                                                <Label for="basicpill-firstname-input14">Project End Date</Label>
                                                                <DatePicker
                                                                selected={this.state.end_date}
                                                                selectsEnd
                                                                className="form-control"
                                                                startDate={this.state.start_date}
                                                                endDate={this.state.end_date}
                                                                onChange={this.handleEnd}
                                                                onChange={this.handleProject_end_dateChange}
                                                                />
                                                             </div>
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            
                                            <Row>
                                                <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-firstname-input14">Project Grant</Label>
                                                            <AvField
                                                            name="Project Grant"
                                                            placeholder="Eg: 100000"
                                                            type="text"
                                                            errorMessage="Enter the Project Grant"
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
                                                        <Label for="basicpill-firstname-input14">Coordinating Department</Label>
                                                        <AvField
                                                        name="Department"
                                                        placeholder="Eg: Department of Computer Science"
                                                        type="text"
                                                        errorMessage="Enter the Department"
                                                        className="form-control"
                                                        validate={{ required: { value: true } }}
                                                        id="validationCustom04"
                                                        onChange={this.handleDeptChange}
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

export default ResearchFundedForm;