import React from "react";
import './Home.css'
// import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Link } from "react-router-dom";



const Home = () => {
    const { value: accept } = Swal.fire({
        title: 'Terms and conditions',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:
          'I agree with the <a href="">terms and conditions</a>',
        confirmButtonText:
          'Continue <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && 'You need to agree with WDC T&C'
        }
      })
      
      if (accept) {
        Swal.fire('You agreed with our T&C :)')
      }
    
     

    return (
        <div>
            <main className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="mx-auto">
                                <form>
                                    <p><input placeholder="input your full name" className="form-control forms" type="text" /></p>
                                    <p><input placeholder="input your passcode here" className="form-control forms" type="number" /></p>
                                    <Link to="/generateid"><button className="btn btn-primary btn-block">Proceed</button></Link>
                                    <span></span>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home