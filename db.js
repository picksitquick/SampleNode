const {Client} = require('pg');

const client = new Client({
    host: 'your_host',
    port: 'PORT_NO',
    user: 'Username',
    password: 'Password',
    database: 'Your_DB_name',
});

const createTable = () => {
    client.query(
        'CREATE TABLE user(id SERIAL PRIMARY KEY ,image TEXT);',
        (err,result) => {
            if(err){
                console.error('Error creating table:',err);
            }
            else{
                console.log('Table created');
            }
        }
    );

    // client.query({
    //     'CREATE TABLE table_name(id SERIAL PRIMARY KEY, image TEXT);'
    // })
};

// const createTable2 = () => {

// };

module.exports = {
    client,createTable
};