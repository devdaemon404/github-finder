import React, { Component, Fragment } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Repos from "../repos/Repos";

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    }

    render() {
        const { name, avatar_url, location, bio, blog, login, html_url, hireable, company, followers, following, public_repos, public_gists } = this.props.user;
        const { loading ,repos} = this.props;
        return !loading ? (
            <Fragment>
                <Link to="/" >
                    <Button style={{ marginTop: "10px" }} variant="outline-dark">Back to Search</Button>
                </Link>
                <div style={{ marginTop: "10px" }}>
                    Hireable: {' '}
                    {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
                </div>
                <div className="card border-dark" >
                    <div className="row">
                        <div className="col text-center">
                            <img src={avatar_url} className="card-img rounded-circle" alt="..." style={{ width: "150px", margin: "5px" }} />
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>

                        <div className="col ">
                            <div className="card-body">
                                {bio && (
                                    <Fragment>
                                        <h3 className="card-title">Bio</h3>
                                        <p className="card-text">{bio}</p>
                                    </Fragment>
                                )}
                                <a href={html_url} >
                                    <Button variant="outline-dark">Visit Github Profile</Button>
                                </a>
                                {login && (
                                    <p className="card-text"><span className="display-5 lead">Username: </span>{login}</p>
                                )}
                                {company && (
                                    <p className="card-text"><span className="display-5 lead">Company: </span>{company}</p>
                                )}
                                {blog && (
                                    <p className="card-text"><span className="display-5 lead">Website: </span>{blog}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card border-dark">
                    <div className="row card-body mx-auto">
                        <span className="badge badge-primary">Followers: {followers}</span>
                        <span className="badge badge-secondary ml-2">Following: {following}</span>
                        <span className="badge badge-success ml-2">Public Repos: {public_repos}</span>
                        <span className="badge badge-dark ml-2">Public Gists: {public_gists}</span>
                    </div>
                </div>
                <br />
                <Repos repos={repos} />
            </Fragment>
        ) : (<Spinner />)
    }
}

export default User;
