import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Repos = ({ repos }) => {
    return (
        repos.map(repo => (
            <Fragment key={repo.id}>
                <RepoItem repo={repo} />
                <br />
            </Fragment>
        ))
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default Repos;
