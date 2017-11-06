module.exports = function(app) {
  const admin = app.models.admin;
  const defaultAdmin = {username: '<%= scope %>', email: '<%= scope %>@ynu.edu.cn',
    password: '<%= scope %>@ynu', scope: '<%= scope %>'};
  admin.find({where: {username: '<%= scope %>', email: '<%= scope %>@ynu.edu.cn', scope: '<%= scope %>'}}, function(err, foundRecords) {
    if (err) throw err;
    if (foundRecords.length === 0) {
      admin.create([defaultAdmin], function(err, createdRecords) {
        if (err) throw err;
        console.log('Created admins:', createdRecords);
      });
    }
  });
};
