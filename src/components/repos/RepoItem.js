import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
    return (
        <div className="card card-body">
            <h3>
                <a className="card-link" href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propType = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem;
