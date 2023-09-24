const User = require('../model/user');
const singupUser = async (request, response) => {
    try {
 
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}
module.exports={
    singupUser
}