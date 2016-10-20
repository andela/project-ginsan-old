var request = require('supertest'),
    should = require('should'),
    config = require('../../config/env/all'),
    mongoose = require('mongoose');

var token = '';
var me = '';
describe('PUT /users/friends/:user "save friends"', function () {
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
            .end(function (res) {
                token = res.body.token;
                me = res.body.userId;
            });
        setTimeout(done, 2500);
    });

    after(function (done) {
        var email = 'test@dip.com';
        request(baseUrl)
            .del('/users/delete/' + email)
            .end(function (err, res) {
            });
        setTimeout(done, 2500);
    });

    it('should save an array of friends id', function (done) {
        var data = {
            friends:['5f0348nd09034021031', '5biid928234y301381', '5818918013jwdojsis']
        }
        request(baseUrl)
            .put('/users/friends/'+ me)
            .set('Authorization', 'Bearer '+ token)
            .send(data)
            .expect(200)
            .end(function (err, res) {
                // console.log(res);
                res.body.should.have.userId;    
                res.body.error.should.equal(false);
                res.body.message.should.equal('Successfully added');
            });
        setTimeout(done, 2500);
    });
    
    it('should return error if params are not passed', function (done) {
        var data = {
            friends:['5f0348nd09034021031', '5biid928234y301381']
        }
        console.log(me + " " + token);
        request(baseUrl)
            .put('/users/friends/'+ me)
            .set('Authorization', 'Bearer '+ token)
            .send()
            .expect(400)
            .end(function (err,res) {
                // console.log(res);
                res.body.message.should.equal('Send the required parameters')
                res.body.error.should.equal(true);
                res.body.message.should.equal(false);
            })
        setTimeout(done, 2500);
    });

    
});

describe('/POST /games/invite/:user "Send friends game invites"', function (done) {
    this.timeout(140008);
    var baseUrl = 'http://localhost:' + config.port;
    var invitee = '';
    before(function (done) {
        mongoose.createConnection(config.db);
        var newUser = {
            name: 'test user',
            email: 'test@dip.com',
            password: 'Password1'
        };
        var secUser = {
            name: 'test user',
            email: 'test@chip.com',
            password: 'Password1'
        };
        request(baseUrl)
            .post('/api/auth/signup')
            .send(newUser)
            .then(function (res) {
                token = res.body.token;
                invitee = res.body.userId;
            });

        request(baseUrl)
            .post('/api/auth/signup')
            .send(secUser)
            .end(function (res) {
                me = res.body.userId;
            });
        setTimeout(done, 2500);
    });

    after(function (done) {
        var email1 = 'test@dip.com',
            email2 = 'test@chip.com';
        request(baseUrl)
            .del('/users/delete/' + email2)
            .end(function (err, res) {
            });
        request(baseUrl)
            .del('/users/delete/' + email2)
            .end(function (err, res) {
            });
        setTimeout(done, 2500);
    });

    it('should send invite to one user', function (done) {
        var inviteFrom = me;
        var inviteTo = invitee;
        var data = {
            link:'http://app.com/app?game=121232'
        }
        request(baseUrl)
            .post('/games/invite/'+ inviteFrom +'/to/'+ inviteTo)
            .set('Authorization', 'Bearer ' + token)
            .send(data)
            .expect(200)
            .end(function (err, res) {
                res.body.message.should.equal('Invite sent Successfully');
                res.body.status.should.equal(true);
                res.body.error.shoule.equal(false);
            });
        setTimeout(done, 2500);
    })
});