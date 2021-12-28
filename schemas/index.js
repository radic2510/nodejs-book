const mongoose = require('mongoose');

const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    mongoose.connect('mongodb://root:root@localhost:27017/admin', {
        dbName: 'nodejs',
        useNewUrlParser: true,
        useCreateIndex: true,
    }, (error) => {
        if (error) {
            console.log('MongoDB Connection Error', error);
        } else {
            console.log('MongoDB Connection Success');
        }
    });
};

mongoose.connection.on('error', (error) => {
    console.error('MongoDB Connection Error', error);
});

