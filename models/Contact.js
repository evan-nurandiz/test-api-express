module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your name'
                }
            }
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                len: [1, 39]
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: {
                args: true,
                msg: 'Phonenumber already in use!'
            },
            validate: {
                isNumeric: true,
                len: [1, 19]
            }
        },
    })

    return Contact
}