
import './App.css';

function App() {
  return (
    <div>

      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="mt-5">
              <form>
                <h1>Register</h1><br />
                <p><input class="form-control" type="text" name="username" id="usName" placeholder="username" /></p>
                <p><input class="form-control" type="email" name="username" id="usMail" placeholder="email address" /></p>
                <p><input class="form-control" type="password" name="username" id="usPassword" placeholder="password here" /></p>
                <button class="btn btn-primary">Register Now!</button>
                <marquee>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </marquee>
              </form>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>

    </div>
  );
}

export default App;
