var request = require('supertest'),
    should = require('should'),
    mongoose = require('mongoose'),
    config = require('../../config/env/all');

describe('Signup Integration test', function () {
    this.timeout(140008);

    var baseUrl = 'http://localhost:' + process.env.PORT;

    before(function (done) {
        mongoose.createConnection(process.env.DB_URL);
        done();
    })

    it('should register a new user', function (done) {
        var newUser = {
            name: 'Test username',
            email: 'test@pass.com',
            password: 'Password1'
        };

        request(url)
            .post('/api/auth/signup')
            .send(newUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;

                res.body.should.have.property('success');
                res.body.success.should.equal(true);
                res.body.message.should.equal('Successful signup');
            });
        setTimeout(done, 2500);
    });

    it('should not accept an existing email', function (done) {
        var newUser = {
            name: 'Test username',
            email: 'test@pass.com',
            password: 'Password1'
        };

        request(url)
            .post('/api/auth/signup')
            .send(newUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(401)
            .end(function (err, res) {
                if (err) throw err;

                res.body.should.have.property('success');
                res.body.success.should.equal(false);
                res.body.message.should.equal('There is an existing user with this email');
            });
        setTimeout(done, 2500);
    });

    it('should not accept an email with a wrong format', function (done) {
        var newUser = {
            name: 'Test username',
            email: 'testo.com',
            password: 'Password1'
        };

        request(url)
            .post('/api/auth/signup')
            .send(newUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(401)
            .end(function (err, res) {
                if (err) throw err;

                res.body.should.have.property('success');
                res.body.success.should.equal(false);
                res.body.message.should.equal('The email is not valid');
                res.body.should.have.property('token');
            });
        setTimeout(done, 2500);
    });

    it('should not allow passwords with unsecure combinations', function (done) {
        var newUser = {
            name: 'Test username',
            email: 'test@deep.com',
            password: 'password'
        };

        request(url)
            .post('/api/auth/signup')
            .send(newUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(401)
            .end(function (err, res) {
                if (err) throw err;

                res.body.should.have.property('success');
                res.body.success.should.equal(false);
                res.body.should.have.property('message');
                res.body.should.have.property('token');
            });
        setTimeout(done, 2500);
    });
    it('should not allow form field to be empty', function (done) {
        var newUser = {
            name: '',
            email: '',
            password: ''
        };

        request(url)
            .post('/api/auth/signup')
            .send(newUser)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(401)
            .end(function (err, res) {
                if (err) throw err;

                res.body.should.have.property('success');
                res.body.success.should.equal(false);
                res.body.message.should.equal('Please fill the required fields');
                res.body.should.have.property('token');
            });
        setTimeout(done, 2500);
    });
});