const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers ={
Query: {
  me: async (parent, args, context) => {
    if (context.user) {
      return Profile.findOne({ _id: context.user._id });
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},
Mutation: {
  createUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);
    return ({token,user});
  },

}
}