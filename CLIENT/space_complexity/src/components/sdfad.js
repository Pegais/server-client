
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
                        </form>



                        <Button onClick={()=>{this.handleLogin()}}>LOGIN</Button>
                        <Modal showLogin={this.state.showLogin}>
                            <Modal.Header>LOGIN</Modal.Header>
                            <Modal.Body>
                                <div className="form title">
                                    <form className='fill-form'>
                                        <input type="email" placeholder="User Email" />
                                        <input type="password" placeholder="User Password" />
                                    </form>

                                </div>
                                    <button>SUBMIT</button>
                                    <p>Don't have an account <a style={{ color: "blue" }} >SIGN UP</a></p>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.handleLogin()}}>cancel</Button>
                            </Modal.Footer>
                        </Modal>

                        <Button onClick={()=>{this.handleSignup()}}>SIGN UP</Button>
                        <Modal showSignup={this.state.showSignup}>
                            <Modal.Header>SIGN UP</Modal.Header>
                            <Modal.Body>
                                <div className="form title">
                                    <form className='fill-form'>
                                        <input type="email" placeholder="User Email" />
                                        <input type="password" placeholder="User Password" />
                                    </form>
                                </div>
                                    <button>SUBMIT</button>
                                    <p>Don't have an account <a style={{ color: "blue" }} >SIGN UP</a></p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.handleSignup()}}>cancel</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </nav>
        </div>

    )
}