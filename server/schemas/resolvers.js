const { User, Book } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return Tech.find({});
    },
    book: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Book.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, profile };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
  
    savebook: async (parent, args, context) => {
      const user = await User.findOneAndUpdate(
      { _id: context.user._id },
      { $push: { savedBooks: bookData } },
      { new: true }
    );
    return user;
    },
    removeBook: async (parent, args, context ) => {
        const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: bookData } },
            { new: true }
          );
      return user;
    },
  },
};

module.exports = resolvers;
