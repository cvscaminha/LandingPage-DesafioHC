export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const days = this.days < 10 ? "0" + this.days : this.days;
    const hours =
      this.hours % 24 < 10 ? "0" + (this.hours % 24) : this.hours % 24;
    const minutes =
      this.minutes % 60 < 10 ? "0" + (this.minutes % 60) : this.minutes % 60;
    const seconds =
      this.seconds % 60 < 10 ? "0" + (this.seconds % 60) : this.seconds % 60;
    return [days, hours, minutes, seconds];
  }
}
