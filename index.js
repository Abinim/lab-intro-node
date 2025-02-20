class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let index = 0;

    while (index < this.length && this.items[index] < item) {
      index++;
    }

    this.items.splice(index, 0, item);

    this.length++;

    return this.items;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[this.length - 1];
  }
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[0];
  }
  sum() {
    return this.items.reduce((acc, item) => acc + item, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
