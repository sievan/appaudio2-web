import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `song-${i}`;
  },
  title(i) {
    return `Song ${i}`;
  },
  lyrics: "Lorem ipsum dolor sit amet"
});
