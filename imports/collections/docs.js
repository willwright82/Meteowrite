import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'docs.insert': function() {
    return Docs.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  }
});

export const Docs = new Mongo.Collection('docs');
