import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
      name: "Helan går", 
      },
      {
      name: "1, 2, 45, 6, 7", 
      },
      {
      name: "Solen"
      }
    ]
  }
});
