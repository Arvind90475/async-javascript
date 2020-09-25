const callbackDemo = (value, callback) => {
    if (value < 0) {
        const err = new Error('this is a big bad error');
        return callback(err, undefined);
    }
    const data = { name: 'shaun', hobby: 'coding' }
    return callback(undefined, data);
}


callbackDemo(-80, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});