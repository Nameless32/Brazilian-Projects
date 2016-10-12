const Member = require('../model/Member');
const toHash = require('../util/toHash');
const jwtUtil = require('../util/jwtUtil');

module.exports = app => {

    app.post('/api/auth/login', (req, res) => {

        console.log(req.body);

        const login = req.body;
        login.password = toHash(login.password);

        Member.findOne(login).then(
            doc => {
                console.log("doc", doc);

                const token = jwtUtil.makeToken(JSON.parse(JSON.stringify(doc)));

                if(doc){
                    res.json({token: token});
                }else{
                    err => res.status(400).send(err)
                }
            },
            err => res.status(500).send(err)
        );

    });


    app.get('/api/auth/login', (req, res) => {
        res.send();
    });
};