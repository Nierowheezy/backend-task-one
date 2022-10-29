// let data = {
//   slackUsername: "Niero",
//   backend: true,
//   age: 28,
//   bio: "Software / Engineer",
// };

module.exports.getData = async (req, res) => {
  try {
    res.status(200).json({
      slackUsername: "Niero",
      backend: true,
      age: 28,
      bio: "Software / Engineer",
    });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};
