var React = require('react');

var Main = React.createClass({
    render() {
        return (
            <div>
                Hello from Main!
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
