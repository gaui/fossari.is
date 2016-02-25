import React from 'react';
import ReactDOM from 'react-dom';
import IsItFriday from './components/IsItFriday/IsItFriday';
require('./app.less');

// Hide everything until DOM has been loaded
document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('wrapper').style.display = 'flex';
});

ReactDOM.render(<IsItFriday />, document.getElementById('IsItFriday'));
