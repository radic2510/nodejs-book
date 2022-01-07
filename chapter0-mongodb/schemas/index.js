const mongoose = require('mongoose');

// 몽구스 ODM을 쓰면 결국 RDB와 같이 제한된다
// 개발자들이 원하는 것은 결국...

const connect = () => {

    // dev에서 debug 모드 사용
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }

    // mongodb 프로토콜 사용
    mongoose.connect('mongodb://root:root@localhost:27017/admin', {
        dbName: 'nodejs',
        useNewUrlParser: true,
        // useCreateIndex: true,
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
mongoose.connection.on('disconnected', () => {
    console.error('MongoDB connection disconnected. Try connect.');
})

module.exports = connect;
