var request = require('supertest'),
    should = require('should'),
    mongoose = require('mongoose'),
    config = require('../../config/env/all');


describe('Save friends Integration test', function () {
    this.timeout(140008);
    var token = null;
    var baseUrl = 'http://localhost:' + process.env.PORT;
    console.log(baseUrl);

    before(function (done) {
        mongoose.createConnection(process.env.DB_URL);

        var newUser = {
            name: 'test user',
            email: 'test@test.com',
            password: 'Password1'
        };
        var me = '';
        request(baseUrl)
            .post('/api/auth/signup')
            .send(newUser)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                token = res.body.token;
            });
        setTimeout(done, 2500);
    });

    console.log(token);

    after(function (done) {
        var email = 'test@test.com';
        request(baseUrl)
            .del('/users/delete/' + email)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
            });
        setTimeout(done, 2500);
    });

    it('should accept an array of friends id', function (done) {
        var friends = [20094023, 2903902493];
        var myEmail = 'test@test.com';
        request(baseUrl)
            .put('/users/friends/'+myEmail)
            .set('Authorization', 'Bearer '+ token)
            .send(friends)
            .expect(401, done)
            .end(function (err, user) {
                if(err) throw err;
                res.body.should.have.property('status');
                res.body.status.should.equal(true);
                res.body.message.should.equal('Successfully added');
            });
        setTimeout(done, 2500);
    });

    it('should return error when params are not sent', function (done) {
        var friends = [20094023, 2903902493];
        request(baseUrl)
            .put('/users/friends')
            .set('Authorization', 'Bearer '+ token)
            .expect(400)
            .end(function (err, res) {
                if(err) throw err;

                res.body.error.should.equal(true);
                res.body.message.should.equal('Send the required parameters');
            });
        setTimeout(done, 2500);
    });

    it('should return error if JWT is not sent', function (done) {
        request(baseUrl)
            .put('/users/friends')
            .expect(401);
        setTimeout(done, 2500);
    });

    it('should return error if JWT is not valid', function (done) {
        var friends = [2657890, 768906567];
        request(baseUrl)
            .put('/users/friends')
            .expect(401)
        setTimeout(done, 2500);
    });
});