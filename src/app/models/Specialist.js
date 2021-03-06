import Sequelize, { Model } from "sequelize";

class Specialist extends Model {
  static init(sequelize) {
    super.init(
      {
        register: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo registro não pode ser vazio."
            },
            notNull: {
              msg: "O campo registro não pode ser vazio."
            }
          }
        },
        name: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo nome não pode ser vazio."
            },
            notNull: {
              msg: "O campo nome não pode ser vazio."
            }
          }
        },
        phone: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo telefone não pode ser vazio."
            },
            notNull: {
              msg: "O campo telefone não pode ser vazio."
            }
          }
        },
        mobile: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo celular não pode ser vazio."
            },
            notNull: {
              msg: "O campo celular não pode ser vazio."
            }
          }
        },
        email: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo e-mail não pode ser vazio."
            },
            isEmail: {
              msg: "Formato de e-mail inválido."
            },
            notNull: {
              msg: "O campo e-mail não pode ser vazio."
            }
          }
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Address, {
      foreignKey: "address_id",
      as: "address",
    });
    this.belongsTo(models.Profession, {
      foreignKey: "profession_id",
      as: "profession",
    });
  }
}

export default Specialist;
