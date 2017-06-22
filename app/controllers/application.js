import Ember from 'ember';

let { Controller, inject } = Ember;

export default Controller.extend({
  audioService: inject.service(),
  actions: {
    play(sound) {
      this.get('audioService').play(sound);
    }
  }
});
