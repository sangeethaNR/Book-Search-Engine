const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers ={
Query: {
  me: async (parent, args, context) => {
    if (context.user) {
      return User.findOne({ _id: context.user._id }).populate("savedBooks");
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},
Mutation: {
 
  createUser: async (parent,{username,email,password}) => {
    console.log('inside resolver createUser')
    const user = await User.create({username,email,password});
    const token = signToken(user);
    return{ token, user };
  },
login: async(parent,{email,password}) => {
  const user = await User.findOne({email});
  if (!user) {
    throw new AuthenticationError('Incorrect credentials');
  }
  const correctPw = await user.isCorrectPassword(password);
  if (!correctPw) {
    throw new AuthenticationError('Incorrect credentials');
  }
  const token = signToken(user);
  return ({token,user});
},
saveBook:async (parent,{ authors, description, title, bookId, image}, context)=>{
console.log("inside saveBook: "+ context.user._id)
  if(context.user._id)
{
  const updatedUser = await User.findOneAndUpdate(
    { _id: context.user._id },
    { $push: { savedBooks: { authors, description, title, bookId, image} } },
    { new: true, runValidators: true}
  );
  return updatedUser;
}
throw new AuthenticationError('Login to save books');
},
deleteBook : async (parent,{bookId},context) =>{
  if(context.user._id)
{
 const updatedUser = await User.findOneAndUpdate(
  { _id: context.user._id },
  { $pull: { savedBooks: {bookId} } },
  { new: true, runValidators: true}
 );
 return updatedUser;
}
throw new AuthenticationError('Login to delete books');
}
}
}

module.exports = resolvers