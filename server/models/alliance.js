'use strict';

module.exports = function (sequelize, data_types) {
    const company = sequelize.define('company',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: data_types.INTEGER
            },
            name: {
                type: data_types.STRING,
                //allowNull: false               
            },
            url: {
                type: data_types.STRING,
                //allowNull: false
                unique: true
            },
            stock_code: {
                type: data_types.STRING
            },
            post_to: {
                type: data_types.STRING
            },
            status: {
                type: data_types.STRING
            }
        },
        {
            // options
        });

    return company;
};