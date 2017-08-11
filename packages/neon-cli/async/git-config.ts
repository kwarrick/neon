import RSVP from 'rsvp';
import gitconfig = require('git-config');

let gc: () => Promise<gitconfig.Dict>
  = RSVP.denodeify(gitconfig, false);

export default gc;
