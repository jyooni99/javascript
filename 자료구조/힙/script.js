class MaxBinaryHeap {
  constructor() {
    this.values = [,];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const childNode = this.values[idx];

    while (idx > 1) {
      let parentIdx = Math.floor(idx / 2);
      let parentNode = this.values[parentIdx];

      if (childNode > parentNode) {
        [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  extractMax() {
    let max = this.values[1];
    let last = this.values.pop();
    if(this.values.length > 1){
      this.values[1] = last;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 1;
    let element = this.values[idx];
    let length = this.values.length;

    while (true) {
      let leftIdx = 2 * idx;
      let rightIdx = 2 * idx + 1;
      let left, right;
      let swap = null;

      if (leftIdx < length) {
        left = this.values[leftIdx];
        if (left > element) {
          swap = leftIdx;
        }
      }

      if(rightIdx < length){
        right = this.values[rightIdx];
        if((swap === null && right > element) || (swap !== null && right > left)){
          swap = rightIdx;
        }
      }

      if(swap === null) break;

      this.values[idx] = this.values[swap];
      idx = swap;
    }
    this.values[idx] = element;
  }
}