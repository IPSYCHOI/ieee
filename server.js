require('dotenv').config();
const {app} = require('./app');

const port = process.env.PORT || 3000;
const environment =process.env.NODE_ENV || 'development'
app.listen(port, () => {
    console.log("Environment: "+environment);
    console.log("🚀 Server running on port "+port);
});

