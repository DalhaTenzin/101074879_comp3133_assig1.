const user = require('./models/user');

exports.resolvers = {
    Query: {
        getUser: async (parent, args) => {
            return await user.find({});
        },
    },
    Mutation: {
        addUser: async (_, args) => {
            const data = new user({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            });
            await data.save();
            return data;
        }
    }
}