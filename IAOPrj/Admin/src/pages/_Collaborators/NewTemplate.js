import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Button, Label, Input ,Container, CustomInput, InputGroup, Form, InputGroupAddon } from "reactstrap";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class NewTemplate extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Collaborators", link : "#" },
                { title : "New Template", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="New Template" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">React Validation - Normal</h4>
                                        <p className="card-title-desc">Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers.</p>
                                        <AvForm className="needs-validation" >
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom01">First name</Label>
                                                        <AvField
                                                          name="firstname"
                                                          placeholder="First name"
                                                          type="text"
                                                          errorMessage="Enter First Name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom01"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom02">Last name</Label>
                                                        <AvField
                                                          name="lastname"
                                                          placeholder="Last name"
                                                          type="text"
                                                          errorMessage="Enter Last name"
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom02"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom03">City</Label>
                                                        <AvField
                                                          name="city"
                                                          placeholder="City"
                                                          type="text"
                                                          errorMessage=" Please provide a valid city."
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom03"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom04">State</Label>
                                                        <AvField
                                                          name="state"
                                                          placeholder="State"
                                                          type="text"
                                                          errorMessage="Please provide a valid state."
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom04"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label htmlFor="validationCustom05">Zip</Label>
                                                        <AvField
                                                          name="zip"
                                                          placeholder="Zip Code"
                                                          type="text"
                                                          errorMessage=" Please provide a valid zip."
                                                          className="form-control"
                                                          validate={{ required: { value: true } }}
                                                          id="validationCustom05"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="12">
                                                    <FormGroup>
                                                        <AvInput tag={CustomInput} type="checkbox" label="Agree to terms and conditions" id="invalidCheck" name="condition" errorMessage="You must agree before submitting."  validate={{ required: { value: true } }} />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button color="primary" type="submit">Submit form</Button>
                                        </AvForm>
                                    </CardBody>
                                </Card>
                            </Col> 
        
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Bootstrap Validation (Tooltips)</h4>
                                        <p className="card-title-desc">If your form layout allows it, you can swap the <code>.-feedback</code> classes for <code>.-tooltip</code> classes to display validation feedback in a styled tooltip.</p>
                                        <Form className="needs-validation" method="post" id="tooltipForm" onSubmit={this.handleSubmit}>
                                            <Row>
                                                <Col md="4">
                                                    <FormGroup className="position-relative">
                                                        <Label htmlFor="validationTooltip01">First name</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip01" placeholder="First name" onChange={(event) => this.changeHandeler(event,"validate1")}/>
                                                        
                                                        <div className={this.state.fnm === true ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate1">
                                                            {this.state.fnm === true ? "Looks good!" : "Please Enter Valid First Name"}
                                                        </div>
                                                                                                                
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup className="position-relative">
                                                        <Label htmlFor="validationTooltip02">Last name</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" onChange={(event) => this.changeHandeler(event,"validate2")}/>
                                                        <div className={this.state.lnm === true ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate2">
                                                        {this.state.lnm === true ? "Looks good!" : "Please Enter Valid Last Name"}
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup className="position-relative">
                                                        <Label htmlFor="validationTooltipUsername">Username</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                            <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                            </InputGroupAddon>
                                                            <Input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" onChange={(event) => this.changeHandeler(event,"validate3")}/>
                                                            <div className={this.state.unm === true ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate3">
                                                            {this.state.unm === true ? "Looks good!" : "Please choose a unique and valid username."}
                                                            </div>
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup className="position-relative">
                                                        <Label htmlFor="validationTooltip03">City</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip03" placeholder="City" onChange={(event) => this.changeHandeler(event,"validate4")}/>
                                                        <div className={this.state.city === true ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate4">
                                                        {this.state.city === true ? "Looks good!" : "Please choose a unique and valid username.Please provide a valid city."}
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup className="position-relative">
                                                        <Label htmlFor="validationTooltip04">State</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip04" placeholder="State" onChange={(event) => this.changeHandeler(event,"validate5")} />
                                                        <div className={this.state.stateV === true ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate5">
                                                        {this.state.stateV === true ? "Looks good!" : "Please provide a valid state."}
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button color="primary" type="submit">Submit form</Button>
                                        </Form>
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

export default NewTemplate ;