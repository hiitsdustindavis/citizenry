import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    lookUpZip(zipInput) {
      this.transitionTo('legResults', zipInput.zipcode);
    }
  }
});
