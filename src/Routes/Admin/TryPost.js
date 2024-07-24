import React from "react";

const TryPost = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form>
              <div className="mt-5">
                <p>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="username"
                  />
                </p>
                <p>
                  <input
                    className="form-control"
                    type="password"
                    name="username"
                    placeholder="password"
                  />
                </p>
                <p>
                  <input
                    className="form-control"
                    type="file"
                    name="profilepics"
                    placeholder="profile picture"
                  />
                </p>
                <button className="">Submission</button>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default TryPost;
