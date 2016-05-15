module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Response', {
    form_id: DataTypes.STRING,
    submitted_at: DataTypes.DATE,
    answers: DataTypes.JSON
  })
}
