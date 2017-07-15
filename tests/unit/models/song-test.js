import { moduleForModel, test } from 'ember-qunit';

moduleForModel('song', 'Unit | Model | song', {
  // Specify the other units that are required for this test.
  needs: []
});

const FIFTEEN_STEP_ENCODED_BASE_64_DATA = 'someURL';

test('is can deserialize a song', () => {
  let song = song.fromEncodedBase64(FIFTEEN_STEP_ENCODED_BASE_64_DATA);

  assert.equal(song.get('title'), 'TODO');
});
