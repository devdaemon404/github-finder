import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;
    return !loading && users !== null ? (
        <div className='row'>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    ) : <Spinner />
}
export default Users
