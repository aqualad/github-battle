var USER_DATA = {
    name: 'Bryan Dodd',
    username: 'aqualad',
    image: 'https://avatars0.githubusercontent.com/u/1772354?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function () {
        return (
            <div> Hello ReactJS Program! </div>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
