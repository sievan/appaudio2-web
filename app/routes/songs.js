import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
      id: "helan-gar",
      name: "Helan går",
      },
      {
      id: "1-2-45-6-7",
      name: "1, 2, 45, 6, 7",
      },
      {
      id: "solen",
      name: "Solen"
      }
    ]
  }
});
