import DS from 'ember-data';
import Ember from 'ember';

let Song = Ember.Object.extend({

}).reopenClass({
  fromEncodedBase64() {
    return Song.create();
  }
});

export default Song;
