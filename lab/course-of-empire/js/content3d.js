/* The Course of Empire, 3D version — texts and their places on the timeline.
   Everything a non-developer may want to edit lives in this file.

   `at(id, sec)` is a moment: `sec` seconds into the part called `id`. The parts are
   hero · in (the flight to the frame) · ch1 · ch2 · ch3 · out (back into the hall, now in ruins) · finale · return.
   Seconds are seconds of film, so a text that starts at at('ch2', 5.9) appears on the frame 5.9 s into chapter II. */
export function buildContent(at, end) {
  /* ---- Chapters (card, rail, overlay) ---- */
  const CHAPTERS = [
    {
      start: at('ch1', 0.35), end: at('ch2'),
      cardCaption: 'III/V, The Consummation, 1836',
      thumb: 'assets/paintings/consummation-thumb.webp',
      overlay: {
        year: '1835–36',
        title: 'The Consummation of Empire',
        label: ['Oil on canvas', '130,1 × 193 cm', 'The New York Historical, New York'],
        image: 'assets/paintings/consummation.webp',
        alt: 'The Consummation of Empire by Thomas Cole: a marble city around a harbour at noon.',
        text: [
          'Noon over a harbour lined with marble. A conqueror crosses the bridge in a car drawn by an elephant. Only the crag on the horizon is still wild.',
          'The third and largest of five canvases, painted for the New York merchant Luman Reed. He died in 1836, months before Cole finished the series.',
        ],
      },
    },
    {
      start: at('ch2'), end: at('ch3'),
      cardCaption: 'IV/V, Destruction, 1836',
      thumb: 'assets/paintings/destruction-thumb.webp',
      overlay: {
        year: '1836',
        title: 'Destruction',
        label: ['Oil on canvas', '100 × 161 cm', 'The New York Historical, New York'],
        image: 'assets/paintings/destruction.webp',
        alt: 'Destruction by Thomas Cole: the same city burning under a storm.',
        text: [
          'The same harbour under a storm. An enemy fleet is inside, the bridge is giving way, and a colossal stone warrior strides forward without his head.',
          'Cole had walked the ruins of Rome a few years earlier. In 1836 some viewers read the picture as a warning to Andrew Jackson’s America.',
        ],
      },
    },
    {
      start: at('ch3'), end: at('out'),
      cardCaption: 'V/V, Desolation, 1836',
      thumb: 'assets/paintings/desolation-thumb.webp',
      overlay: {
        year: '1836',
        title: 'Desolation',
        label: ['Oil on canvas', '100,3 × 161,2 cm', 'The New York Historical, New York'],
        image: 'assets/paintings/desolation.webp',
        alt: 'Desolation by Thomas Cole: overgrown ruins under a rising moon.',
        text: [
          'Sunset, with the moon already up. The people are gone. One ivy-wrapped column still stands, with a heron’s nest on its capital.',
          'The last canvas, and the only one without a human figure. The crag from the first picture is still there, unchanged.',
        ],
      },
    },
  ];

  /* Card is hidden while the camera is between paintings. */
  const CARD_RANGES = [
    [at('ch1', 1.3), at('ch1', 11.8)],
    [at('ch2', 1.3), at('ch2', 8.9)],
    [at('ch3', 5.6), at('ch3', 9.6)],
  ];

  /* Rail is visible from the first painting to the way out. */
  const RAIL_RANGE = [at('ch1', 0.35), at('out', 0.4)];

  /* ---- Scenes (texts over the film) ----
     type 'title'  : small label + big title bottom left, paragraph on the right
     type 'center' : one line in the middle of the screen
     width         : paragraph width in design pixels (1440 grid): 244, the width of the painting card it stands under
     phoneWidth    : its width on a phone (390 grid), where every paragraph sits in the middle of the screen
     <br class="wide"> in a title breaks the line on a computer only */
  const SCENES = [
    {
      id: 'hero', type: 'title', ranges: [[0, at('in', 1.6)], [at('return', 4.84), end + 1]],   // also on at the very end, so the wrap to the top changes nothing
      label: 'Thomas Cole, 1833–1836', title: 'The Course<br>of Empire',
      body: 'Three paintings. One city. Its whole life in a single scroll.', width: 244, phoneWidth: 220,
    },
    {
      id: 'ch1', type: 'title', range: [at('ch1', 1.3), at('ch1', 3.8)],
      label: 'Thomas Cole, 1835–36', title: 'The Consummation<br>of Empire',
      body: 'Marble to the horizon. Fleets in the harbour. A city that has everything, and believes it always will.', width: 244, phoneWidth: 308,
    },
    {
      id: 'conqueror', type: 'title', range: [at('ch1', 4.9), at('ch1', 7.3)],
      label: 'Thomas Cole, 1835–36', title: 'The conqueror',
      body: 'He crosses the bridge robed in red, in a chariot drawn by an elephant. Nobody in the crowd is looking at the sky.', width: 244, phoneWidth: 308,
    },
    { id: 'sky', type: 'center', range: [at('ch1', 12.5), at('ch2', 0.5)], text: 'Then the sky changes.', phoneWidth: 308 },
    {
      id: 'ch2', type: 'title', range: [at('ch2', 1.3), at('ch2', 4.3)],
      label: 'Thomas Cole, 1836', title: 'Destruction',
      body: 'Same harbour. Same bridge. An enemy fleet is inside the walls, and the bridge gives way under the people fleeing across it.', width: 244, phoneWidth: 335,
    },
    {
      id: 'statue', type: 'title', range: [at('ch2', 5.9), at('ch2', 8.9)],
      label: 'Thomas Cole, 1836', title: 'The headless<br>guardian',
      body: 'A colossal warrior still strides forward, shield raised. His head is already gone. He is defending nothing.', width: 244, phoneWidth: 308,
    },
    { id: 'water', type: 'center', range: [at('ch2', 9.9), at('ch3', 3.4)], text: 'And then, for a very long time, nothing.', phoneWidth: 162 },
    {
      id: 'ch3', type: 'title', range: [at('ch3', 5.6), at('ch3', 7.3)],
      label: 'Thomas Cole, 1836', title: 'Desolation',
      body: 'There are no people left in the picture. The marble is still here. The ivy is winning.', width: 244, phoneWidth: 320,
    },
    {
      id: 'column', type: 'title', range: [at('ch3', 7.6), at('ch3', 9.6)],
      label: 'Thomas Cole, 1836', title: 'The last column',
      body: 'One column stands where the city did. A bird has nested on top. It is the only thing here still being built.', width: 244, phoneWidth: 308,
    },
    {
      id: 'finale', type: 'title', range: [at('out', 3.9), at('return', 0.55)],
      label: 'Thomas Cole, 1833–1836', title: 'Every empire believes <br class="wide">it is the exception.',
      body: 'Thomas Cole painted this in 1836, for a country that was sixty years old.', width: 244, phoneWidth: 320,
      bodyRange: [at('out', 3.9), at('finale', 3.1)],   // paragraph gives way to the button
    },
  ];

  /* "Watch again" is offered in the ruined hall. Scrolling on does the same as the button. */
  const AGAIN_RANGE = [at('finale', 3.1), at('return', 0.55)];

  /* How long the button takes to play the return to the first hall, in milliseconds. */
  const AGAIN_MS = 5200;

  /* The scroll hint reads "watch again" from the way out of the last painting until the first hall is back. */
  const HINT_AGAIN_RANGE = [at('out', 3.9), at('return', 4.84)];

  /* The painting may not be touched: where the cursor says so (the two halls at rest). */
  const TOUCH_RANGES = [[0, at('in', 1.2)], [at('out', 4.2), at('return', 0.9)], [at('return', 4.84), end + 1]];

  return { CHAPTERS, CARD_RANGES, RAIL_RANGE, SCENES, AGAIN_RANGE, AGAIN_MS, HINT_AGAIN_RANGE, TOUCH_RANGES };
}
