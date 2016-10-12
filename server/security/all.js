const jwtUtil = require('../util/jwtUtil');


module.exports = app => {
    app.use('/api/*', function (req, res, next) {
        const token = req.header("token");
        if (token && jwtUtil.isValid(token)) {
            req.user = jwtUtil.getPayload(token);
            req.user.isAdmin = () => req.user.roles.indexOf("admin") !== -1;
            req.user.isMember = () => req.user.roles.indexOf("member") !== -1;
        }
        next();
    });

}