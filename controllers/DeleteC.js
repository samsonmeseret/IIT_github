const { connectionInfo } = require("../config");
let deleteProfieC = (req, res) => {
  const user_id = req.params.id;
  let deleteEmail = `UPDATE userInfo SET user_email="Email Deleted",user_status="Deleted Account" WHERE userInfo_ID ="${user_id}"`;

  connectionInfo.query(deleteEmail, (err, result, field) => {
    if (err) {
      // console.log(err)
    } else {
      res.send({
        successMessage: `Profile Deleted successfully`,
        message: "OK",
        redirect: "/signup",
        removePage: 1,
      });
    }
  });
};

// export default deleteProfieC
module.exports = deleteProfieC;
