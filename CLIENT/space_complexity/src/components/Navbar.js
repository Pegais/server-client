import React, { Component, useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap'
import Axios from 'axios'

class Navbar extends Component {
   
    constructor() {
        super()
        this.state = {
            show: false,
            Signshow: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    handleSignModal() {
        this.setState({ Signshow: !this.state.Signshow })
    }
    handleBoth() {
        this.setState({ show: !this.state.show })
        this.setState({ Signshow: !this.state.Signshow })
    }
    // componentDidMount() {
    //     // Simple PUT request with a JSON body using axios
    //     const input = { email:'email',password:'password' };
    //     Axios.put('https://reqres.in/api/articles/1', input)
    //         .then(response => this.setState({ updatedAt: response.data.updatedAt }));
    // }
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light navbar-light" style={{ backgroundColor: "#e3f2fd", position: 'sticky' }} >
                <div class="container-fluid">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOKmlQGhtAJV4V5_zWpgG_5SPZWzBxoqNdg&usqp=CAU" alt="" width="140" height="60" />
                            <h6><strong style={{ color: 'red' }}>PEGa</strong>BASE</h6>
                        </a>
                    </div>
                    <a class="navbar-brand" style={{ fontWeight: 'bold', color: '#141f1f' }} >Made By Snehal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" style={{ color: 'darkblue', fontWeight: 'bolder' }}>Home</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    MENU
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item">
                         
                        </li> */}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form >
                            <Button className="btn btn-success" onClick={() => { this.handleModal() }}> LOGIN</Button>
                            <Modal show={this.state.show}>
                                <Modal.Header ><strong><center> LOGIN</center></strong>
                                </Modal.Header>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOKmlQGhtAJV4V5_zWpgG_5SPZWzBxoqNdg&usqp=CAU" alt="" width="120vw" height="80vh" />
                                <Modal.Body style={{ background: " #f3e6ff" }}>
                                <div className="form form-title">
                                    <form className='fill-form' action="http://localhost:5000/Login" method="POST"id="forms">
                                        <input type="email" placeholder="User Email" name="email" />
                                        <input type="password" placeholder="User Password" name="password" />
                                    </form>

                                </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button style={{background:"red",alignItems:"center"}} onClick={() => { this.handleModal() }}>
                                                Cancel
                                            </Button>
                                            <Button style={{background:"red",alignItems:"center"}} onClick={() => { this.handleModal() }} form="forms" type="submit">
                                                SUBMIT
                                            </Button>
                                    <p>Don't have an account <a style={{ color: "blue" }} onClick={() => { this.handleBoth() }}>SIGN UP</a></p>
                                        </Modal.Footer>
                                        </Modal>
                            <Button className="btn btn-warning" onClick={() => { this.handleSignModal() }}> SIGNUP</Button>
                            <Modal show={this.state.Signshow}>
                                <Modal.Header ><strong><center> SIGNUP</center></strong>
                                </Modal.Header>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOKmlQGhtAJV4V5_zWpgG_5SPZWzBxoqNdg&usqp=CAU" alt="" width="120vw" height="80vh" />
                                <Modal.Body style={{ background: " #f3e6ff" }}>
                                <div className="form title">
                                    <form className='fill-form'action="http://localhost:5000/Signup" method="POST"id="forms-form">
                                        <input type="email" placeholder="User Email" name="email" />
                                        <input type="password" placeholder="User Password" name="password"/>
                                        <input type="password" placeholder="Confirm Password"  />
                                    </form>

                                </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button style={{background:"red",alignItems:"center"}} onClick={() => { this.handleSignModal() }}>
                                                Cancel
                                            </Button>
                                            <Button style={{background:"red",alignItems:"center"}} onClick={() => { this.handleSignModal() }} form="forms-form" type="submit">
                                                SUBMIT
                                            </Button>
                                    <p>ALready have an account <a style={{ color: "blue" }} onClick={() => { this.handleBoth() }}>LOGIN</a></p>
                                        </Modal.Footer>
                                        </Modal>


                                        
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar