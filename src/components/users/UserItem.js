import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const UserItem = ({ user: { login, avatar_url, html_url } }) => {

    return (
        <div className="card-group text-center">
            <div className="card border-dark mb-3" style={{ margin: "5px", width: "11rem" }}>
                <h5 className="card-header border-dark">{login}</h5>
                <div className="card-body">
                    <img className="card-img-top rounded-circle" src={avatar_url} alt='' />
                    {/*  */}

                </div>
                <div className="card-footer text-muted">
                <Link to={`/user/${login}`}>
                        <Button variant="outline-dark">More</Button>
                </Link>
                </div>
            </div>
        </div>

    )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
