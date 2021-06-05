'use strict';
import Sequelize, { Model } from 'sequelize';



class Address extends Model {
  static init(sequelize){ 
    super.init({
      zipcode: Sequelize.STRING,
      street: Sequelize.STRING,
      street_number: Sequelize.STRING,
      city: Sequelize.STRING,
      district: Sequelize.STRING,
      uf: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: 'Address',
    });
  
    
    return this;
  }
  
  static associate(models) {
  // define association here
  }
};

export default Address;
