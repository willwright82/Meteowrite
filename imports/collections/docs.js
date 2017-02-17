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
  }
});

export const Docs = new Mongo.Collection('docs');
