import React, { useState, Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'dark')
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }
    return (
        <Fragment>
            <form onSubmit={onSubmit} className="input-group md-form form-sm form-2 pl-0" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <input
                    className="form-control my-0 py-1 lime-border"
                    name="text"
                    type="text"
                    placeholder="Search users..."
                    value={text}
                    onChange={onChange}
                />
                <button style={{ marginLeft: "5px" }} type="submit" className="btn btn-dark mb-2">Search</button>
                {githubContext.users.length > 0 && (
                    <div style={{ marginLeft: "5px" }} onClick={githubContext.clearUsers} className="btn btn-dark mb-2">Clear</div>
                )}
            </form>
        </Fragment>
    )
}

export default Search
