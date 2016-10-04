const memberRoles = ['admin', 'member'];

module.exports = app => {
  app.get('/api/memberRoles', (req, res)=> {
    res.json(memberRoles)
  });
};