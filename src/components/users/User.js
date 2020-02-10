import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Repos from "../repos/Repos";
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, getUserRepos, loading, user, repos } = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const { name, avatar_url, location, bio, blog, login, html_url, hireable, company, followers, following, public_repos, public_gists } = user;
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
                    <div className="col">
                        <div className="card-body text-center">
                            <img src={avatar_url} className="card-img rounded-circle" alt="..." style={{ width: "150px" }} />
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
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
                                <p className="card-text"><strong>Username: </strong><span className="lead">{login}</span></p>
                            )}
                            {company && (
                                <p className="card-text"><strong>Company: </strong><span className="lead">{company}</span></p>
                            )}
                            {blog && (
                                <p className="card-text"><strong>Website: </strong><a href={blog} className="card-link lead">{blog}</a></p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="card border-dark">
                <div className="row card-body mx-auto">
                    <span className="badge badge-primary">Followers: {followers}</span>
                    <span className="badge badge-danger ml-2">Following: {following}</span>
                    <span className="badge badge-success ml-2">Public Repos: {public_repos}</span>
                    <span className="badge badge-dark ml-2">Public Gists: {public_gists}</span>
                </div>
            </div>
            <br />
            <Repos repos={repos} />
        </Fragment>
    ) : (<Spinner />)
}

export default User;
