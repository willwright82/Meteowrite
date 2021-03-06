import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'docs.insert': function() {
    return Docs.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'docs.remove': function(doc) {
    return Docs.remove(doc);
  },

  'docs.update': function(doc, content) {
    return Docs.update(doc._id, { $set: { content: content } });
  },

  'docs.share': function(doc, email) {
    return Docs.update(doc._id, { $push: { sharedWith: email } });
  }
});

export const Docs = new Mongo.Collection('docs');
