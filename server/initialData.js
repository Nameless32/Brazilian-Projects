require('./config/mogoose.config');
const Member = require('./model/Member');
const toHash = require('./util/toHash');
const nickAdmin = 'Administrador';

Member.findOne({nickName:nickAdmin}).then(
    doc => {
        if(!doc){
            const admin = {
                nickName:nickAdmin,
                email: 'admin',
                password: toHash('1234'),
                roles: ['admin'],
            };

            Member.create(admin).then(
                doc => console.log('admin created successful'),
                err => console.error(err)
            );

        }
    }
);