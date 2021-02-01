import React from 'react';

const Login = (props) => {
    return (
        <div className="tab-content">
            <form action="/" className="form-profile">
                <fieldset>
                    <legend>Se connecter</legend>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text"
                        name="username"
                        className="form-control"
                        id="email"
                        placeholder="mail@mail.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="password"
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">
                        Se connecter
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;