import Ember from 'ember';

class RGBSpectrum {
  constructor(colorCount) {
    this.colorCount = colorCount;
  }

  get step() {
    return 300 / this.colorCount;
  }

  get colors() {
    return new Array(this.colorCount).fill(0).map((nil, i)=> {
      return {'hsl':`hsl(${this.step * i}, 100%, 50%)`};
    });
  }
}

export default Ember.Component.extend({

  "color-count": 300,
  "delay": 0,

  spectrum: Ember.computed('color-count', function() {
    return new RGBSpectrum(this.get('color-count'));
  }),

  fetchFunction: Ember.computed('spectrum', function () {
    return function (pageOffset, pageSize, stats) {
      let spectrum = new RGBSpectrum(this.get('color-count')).colors;
      let delay = this.get('delay'); //ms
      return new Ember.RSVP.Promise((resolve)=> {
        setTimeout(()=> {
          stats.totalPages =  Math.ceil( spectrum.length / pageSize);
          let recordOffset = pageOffset * pageSize;
          resolve(spectrum.slice(recordOffset, recordOffset + pageSize));
        }, delay);
      });
    }.bind(this);
  })
});
