import axios from 'axios'
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class Page1_home extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
            iscontent: []

        }
    }
    async componentDidMount() {
       await  axios.get('http://localhost:5000/question').then(res => {
            this.state.iscontent = res.data
            console.log(this.state.iscontent)
        })
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div className="table-home" style={{ backgroundColor: 'burlywood' }}>
                <div className="question">
                    <h3 style={{ width: '20vw', marginLeft: '6%', marginRight: '3%' }}>ALL QUESTIONS</h3>
                    <Button className="btn btn-outline-danger" style={{ fontWeight: 'bold', width: '15vw', marginLeft: '50rem', marginRight: '10rem' }} onClick={() => { this.handleModal() }}>ASK QUESTION</Button>
                    <Modal show={this.state.show}>
                        <Modal.Header ><strong><center>Ask your question</center></strong>
                        </Modal.Header>
                        <Modal.Body style={{ background: " #f3e6ff" }}>
                            <div className="form form-title">
                                <form className='fill-form' action="http://localhost:5000/query" method="POST" id="forms">
                                    <input type="text" placeholder="Enter your question title" name="title" style={{ width: '25vw' }} />
                                    <textarea type="text" placeholder="Body" name="body" />
                                    <input type="text" placeholder="Tag" name="tag" />
                                </form>

                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button style={{ background: "red", alignItems: "center" }} onClick={() => { this.handleModal() }}>
                                Cancel
                            </Button>
                            <Button style={{ background: "red", alignItems: "center" }} onClick={() => { this.handleModal() }} form="forms" type="submit">
                                SUBMIT
                            </Button>

                        </Modal.Footer>






                    </Modal>
                </div>
                <div class="card text-center" style={{ marginLeft: '10%', marginRight: '7.3rem' }}>

                    <div class="card-header" style={{ backgroundColor: '#ffe6e6' }}>
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">NEWSET</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">OLDEST</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">LIKES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">HOTEST</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body" style={{ backgroundColor: "#e6ffcc" }} >
                        {
                            this.state.iscontent.map((value) => {
                                return (


                                    <div class="card mb-3">

                                        <div class="card-body" style={{ backgroundColor: '#e0ebeb' }}>
                                            <h5 class="card-title">{value.title}</h5>
                                            <p class="card-text">{value.body}</p>
                                            <p class="card-text"><small class="text-muted">{value.tag}</small></p>
                                        </div>
                                    </div>

                                )
                            })


                        }
                      

                        <a href="#" class="btn btn-primary">LOAD MORE</a>
                    </div>
                </div>
            </div>
        )
    }

}
