import React, { Component } from 'react';
import { Container, Row, Col, Card, Table,FormGroup, Label, Input } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
import axios from '../../axios';
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class IncomingStudents extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Students", link : "#" },
                { title : "Incoming Students", link : "#" },
            ],
            student:'Ash',
            data:[],
            studentName:'none',
            indate:'24/7/2000',
            outdate:'24/7/2000',
            Course_or_Activity_undertaken:'Social',
            Coordinating_departmen_or_office:'None'

        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleindateChange = this.handleindateChange.bind(this);
        this.handleoutdateChange = this.handleoutdateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleoutdateChange(event){
        this.setState({outdate: event.target.value});
    }
    handleNameChange(event) {
        this.setState({studentName: event.target.value});
      }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.studentName + this.state.indate);
        event.preventDefault();
      }
      handleindateChange(event){
        this.setState({indate: event.target.value});
      }
    componentDidMount() {
        let currentComponent = this;
        async function fetchData(){
            const req = await axios.get('/students/incoming-students')
            // .then(response =>{
            //     response.data.results.map()
            // })
            currentComponent.setState({student:req.data[0],data:req});
            
        }
        fetchData();
      }

        
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Incoming Students" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 
                    <h1>{this.state.student.Name_of_the_student}</h1>
                    <Row>
                            <Col xs={12}>
                                <Card>
                                    <CardBody >
                                        <h4 className="card-title">Incoming Students Form</h4>

                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-text-input" className="col-md-2 col-form-label">Name of the student</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="text" id="example-text-input" onChange={this.handleNameChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-datetime-local-input" className="col-md-2 col-form-label">From date</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="datetime-local" defaultValue="2020-03-14T13:45:00" id="example-datetime-local-input" onChange={this.handleoutdateChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label  Col md={4} htmlFor="example-date-input" className="col-md-2 col-form-label">To date:</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="date" defaultValue="2020-03-19" id="example-date-input" onChange={this.handleindateChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-text-input" className="col-md-2 col-form-label">Course/Activity Undertaken</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="text" defaultValue="CSA" id="example-text-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label Col md={4} htmlFor="example-text-input" className="col-md-2 col-form-label">Coordinating Department/Office</Label>
                                            <Col md={8}>
                                                <Input className="form-control" type="text" defaultValue="Artisanal kale" id="example-text-input" />
                                            </Col>
                                        </FormGroup>
                                        <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Add New</button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        



                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardBody>
                                <h4 className="card-title">Incoming students</h4>
                                        <div className="table-rep-plugin">
                                            <div className="table-responsive mb-0" data-pattern="priority-columns">
                                                <Table id="tech-companies-1" striped bordered responsive>
                                                   
                                                    <thead>
                                                        <tr>
                                                            <th>Name_of_the_student:</th>
                                                            <th data-priority="1">From_date:</th>
                                                            <th data-priority="3">To_date: </th>
                                                            <th data-priority="1"> Course_or_Activity_undertaken:</th>
                                                            <th data-priority="3"> Coordinating_departmen_or_office:</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>{this.state.student.Name_of_the_student}</th>
                                                            <td>597.74</td>
                                                            <td>12:12PM</td>
                                                            <td>14.81 (2.54%)</td>
                                                            <td>582.93</td>
                                                            
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                </div>
                                             </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        
            </React.Fragment>
        );
    }
}

export default IncomingStudents;