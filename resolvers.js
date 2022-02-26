const user = require('./models/user');

exports.resolvers = {
    Query: {
        getUser: async (parent, args) => {
            return await user.find({});
        },
        const userFind = await user.findById(args.userId)

            if (!userFind) {
                return
            }

            if (userFind.type != 'admin') {
                return
            }

            return await Listing.find({ username: userFind.username })
        }

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