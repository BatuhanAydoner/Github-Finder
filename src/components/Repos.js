import React, { Component } from 'react';
import Repo from './Repo';

class Repos extends Component {
    render() {
        return (
            <div>
                {
                    this.props.repos && this.props.repos.map(repo => {
                        return <Repo key={repo.id} repo={repo} />
                    })
                }
            </div>
        );
    }
}
export default  Repos;