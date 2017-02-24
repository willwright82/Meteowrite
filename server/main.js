import { Meteor } from 'meteor/meteor';
import { Docs } from '../imports/collections/docs';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('docs', function () {
    return Docs.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedDocs', function () {
    const user = Meteor.users.findOne(this.userId);

    if (!user) { return; }

    const email = user.emails[0].address;

    return Docs.find({
      sharedWith: { $elemMatch: { $eq: email } }
    });
  });
});
