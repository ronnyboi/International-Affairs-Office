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

class CollaborativePublicationsForm extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state={
            breadcrumbItems : [
                { title : "Collaborative Publications", link : "#" },
                { title : "Collaborative Publications Form", link : "#" },
            ],
            selectedFiles: [],

            Name_of_article: 'Article',
            Author: 'Jack Dawson',
            Name_of_journal: 'Journal',
            Volume_and_issue_no: '12/45',
            Date_of_publication: '24/7/2000',
            Affiliation: 'Christ University',
            Department: 'Department of Computer Science',

            default_date: new Date(),
			default: false,
			start_date: new Date(),
			end_date: new Date(),

            

        }
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
        
        this.handleName_of_articleChange = this.handleName_of_articleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleName_of_journalChange = this.handleName_of_journalChange.bind(this);
        this.handleVolume_and_issue_noChange = this.handleVolume_and_issue_noChange.bind(this);
        this.handleDate_of_publicationChange = this.handleDate_of_publicationChange.bind(this);
        this.handleAffiliationChange = this.handleAffiliationChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);



        

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
	

    handleName_of_articleChange(event) {
        this.setState({Name_of_article: event.target.value});
      }
    handleAuthorChange(event) {
        this.setState({Author: event.target.value});
      }
    handleName_of_journalChange(event) {
        this.setState({Name_of_journal: event.target.value});
      }
    handleVolume_and_issue_noChange(event) {
        this.setState({Volume_and_issue_no: event.target.value});
      }
    handleDate_of_publicationChange(event) {
        this.setState({Date_of_publication: event.target.value});
      }
    handleAffiliationChange(event) {
        this.setState({Affiliation: event.target.value});
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

                    <Breadcrumbs title="Collaborative Publications Form" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Collaborative Publications Form</h4>
                                        <AvForm className="needs-validation" >
                                            <Row>
                                            <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Article Name</Label>
                                                        <AvField
                                                          name="Article Name"
                                                          placeholder="Eg: Article"
                                                          type="text"
                                                          errorMessage="Enter the Article Name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleName_of_articleChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Author</Label>
                                                        <AvField
                                                          name="Author"
                                                          placeholder="Eg: Jack Dawson"
                                                          type="text"
                                                          errorMessage="Enter the Author's name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleAuthorChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Journal Name</Label>
                                                        <AvField
                                                          name="Name_of_journal"
                                                          placeholder="Eg: Journal"
                                                          type="text"
                                                          errorMessage="Enter the Journal's name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleName_of_journalChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Volume and Issue no</Label>
                                                        <AvField
                                                          name="Volume_and_issue_no"
                                                          placeholder="Eg: 12/45"
                                                          type="text"
                                                          errorMessage="Enter the Volume and Issue no"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleVolume_and_issue_noChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                                        <Row>
                                                           <Col lg = "6">
                                                           <FormGroup className="mb-0">
                                                                <div>
                                                                     <div>
                                                                        <Label for="basicpill-firstname-input14">Date of publication</Label>
                                                                        <DatePicker
                                                                            selected={this.state.start_date}
                                                                            selectsStart
                                                                            className="form-control"
                                                                            placeholderText="27/03/2021"
                                                                            startDate={this.state.start_date}
                                                                            endDate={this.state.end_date}
                                                                            onChange={this.handleStart}
                                                                            onChange={this.handleDate_of_publicationChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                            </FormGroup>
                                                            </Col>
                                                        </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">Affiliation</Label>
                                                        <AvField
                                                          name="Affiliation"
                                                          placeholder="Eg: University"
                                                          type="text"
                                                          errorMessage="Enter the Affiliation"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                          onChange={this.handleAffiliationChange}
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

export default CollaborativePublicationsForm;