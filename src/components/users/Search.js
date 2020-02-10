import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'


class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'dark')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' })
        }

    }

    render() {
        const { showClear, clearUsers } = this.props;
        return (

            <Fragment>
                <form onSubmit={this.onSubmit} className="input-group md-form form-sm form-2 pl-0" style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <input
                        className="form-control my-0 py-1 lime-border"
                        name="text"
                        type="text"
                        placeholder="Search users..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <button style={{ marginLeft: "5px" }} type="submit" className="btn btn-dark mb-2">Search</button>
                    {showClear && (
                        <div style={{ marginLeft: "5px" }} onClick={clearUsers} className="btn btn-dark mb-2">Clear</div>
                    )}

                </form>
            </Fragment>

        )
    }
}

export default Search
