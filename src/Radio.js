import React, { Component } from 'react';

class Radio extends Component {
    shouldComponentUpdate() {
        return true
    }
    render() {

        const { onChange, value, reponse } = this.props
        return (
            <div>
                <label>
                    <input
                        type="radio"
                        value={value}
                        name="quizz"
                        onChange={onChange}
                    />
                    {reponse}
                </label>
            </div>
        );
    }
}

export default Radio;