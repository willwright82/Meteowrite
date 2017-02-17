import { Meteor } from 'meteor/meteor';
import { Docs } from '../imports/collections/docs';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('docs', function () {
    return Docs.find({ ownerId: this.userId });
  });
});
