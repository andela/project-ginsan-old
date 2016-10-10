var request = require('supertest'),
    should = require('should'),
    mongoose = require('mongoose'),
    config = require('../../config/env/all');


describe('Login Integration test', function () {
    this.timeout(140008);

    var url = 'http://localhost:' + process.env.PORT;
    console.log(url);

    before(function () {
        mongoose.createConnection(process.env.DB_URL);

        var newUser = {
            name: 'test user',
            email: 'test@test.com',
            password: 'Password1'
        };

        request(url)
            .post('/api/auth/signup')
            .send(newUser)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
            });
    });

    it('should return success=true when valid', function (done) {

        var logInUser = {
            email: 'test@test.com',
            password: 'Password1'
        };

        request(url)
            .post('/api/auth/login')
            .send(logInUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                res.body.should.have.property('success');
                res.body.success.should.equal(true);
                res.body.message.should.equal('Successfully logged on.');
            });
        setTimeout(done, 2500);
    });

    it('should return error if password is not correct', function (done) {
        var logInUser = {
            email: 'test@test.com',
            password: 'pass'
        };

        request(url)
            .post('/api/auth/login')
            .send(logInUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(401)
            .end(function (err, res) {
                if (err) throw err;
                res.body.should.have.property('success');
                res.body.success.should.equal(false);
                res.body.message.should.equal('Invalid password');
            });
        setTimeout(done, 2500);
    });

    it('should return error if user not found in database', function (done) {
        var logInUser = {
            email: 'test@jump.com',
            password: 'pass'
        };

        request(url)
            .post('/api/auth/login')
            .send(logInUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(401)
            .end(function (err, res) {
                if (err) throw err;
                res.body.should.have.property('success');
                res.body.success.should.equal(false);
            });
        setTimeout(done, 2500);
    });
});