import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    return !loading && users !== null ? (
        <div className='row'>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    ) : <Spinner />
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users
