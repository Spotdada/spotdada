Twatts = new Meteor.Collection('twatts');

Users = Meteor.users

Users.initEasySearch(['user.displayName']);