export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.get('/songs', function() {
    return {
      data: [
        {
          type: "songs",
          id: "helan-gar",
          attributes: {
            title: "Helan går",
            lyrics: "Helan går, askdfjsd"
          }
        },
        {
          type: "songs",
          id: "1-2-45-6-7",
          attributes: {
            title: "1, 2, 45, 6, 7",
            lyrics: "1, 2, 45, 6, 7, askdfjsd"
          }
        },
        {
          type: "songs",
          id: "solen",
          attributes: {
            title: "Solen",
            lyrics: "Solen, askdfjsd"
          }
        }
    ]}
  })
}