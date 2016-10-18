var request = require('supertest-as-promised'),
    should = require('should'),
    config = require('../../config/env/all'),
    mongoose = require('mongoose');

var token = null;
var me = null;
describe('POST /users/friends/:user "save friends"', function () {
    this.timeout(140008);
    var baseUrl = 'http://localhost:' + config.port;
    console.log(baseUrl);

    before(function (done) {
        mongoose.createConnection(config.db);
        var newUser = {
            name: 'test user',
            email: 'test@dip.com',
            password: 'Password1'
        };
        request(baseUrl)
            .post('/api/auth/signup')
            .send(newUser)
            .then(function (res) {
                me = res.body.userId;
                token = res.body.token;
            });

            console.log(me);
        setTimeout(done, 2500);
    });

    after(function (done) {
        var email = 'test@wood.com';
        request(baseUrl)
            .del('/users/delete/' + email)
            .then(function (err, res) {
            });
        setTimeout(done, 2500);
    });

    it('should accept an array of friends id', function (done) {
        var data = {
            friends: [20094023, 2903902493]
        };

        request(baseUrl)
            .put('/users/friends/' + me)
            .set('Authorization', 'Bearer ' + token)
            .send(data)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                console.log(res);
                res.body.should.have.property('status');
                res.body.status.should.equal(true);
                res.body.message.should.equal('Successfully added');
            });
        setTimeout(done, 2500);
    });

    it('should return error when params are not sent', function (done) {
        var data = {
            friends: [20094023, 2903902493]
        };
        request(baseUrl)
            .put('/users/friends/' + me)
            .set('Authorization', 'Bearer ' + token)
            .expect(400)
            .end(function (err, res) {
                if (err) throw err;

                res.body.error.should.equal(true);
                res.body.message.should.equal('Send the required parameters');
            });
        setTimeout(done, 2500);
    });

    it('should return error if JWT is not sent', function (done) {
        request(baseUrl)
            .put('/users/friends/' + me)
            .expect(401);
        setTimeout(done, 2500);
    });

    it('should return error if JWT is not valid', function (done) {
        var friends = [2657890, 768906567];
        request(baseUrl)
            .put('/users/friends/' + me)
            .expect(401)
        setTimeout(done, 2500);
    });
});