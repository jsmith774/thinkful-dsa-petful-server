const LinkedList = require('../linkedList/LinkedList');

class Queue {
  constructor() {
    //!    this.array = [];
    this.list = new LinkedList();
  }

  enqueue(data) {
    // Add item to que.
    //!   this.array.push(data);
    this.list.insertLast(data);
  }

  dequeue() {
    // Remove and return next item in queue.
    //! ARRAY IMPLE
    /*
    if (this.array.length > 0) {
       return this.array.shift();
    }
     return null;
    */

    //get head to return
    const firstVal = this.list.head;
    //remove head (making next item new head)
    if (firstVal !== null) {
      this.list.remove(firstVal.value);
    }

    return firstVal;
  }

  show() {
    // Return the next item in the queue.
    //! ARRAY IMPL
    /*
    if (this.array.length > 0) {
      return this.array[0];
    }
    return null;
    */

    return this.list.head;
  }

  all() {
    // Return all items in the queue.
    //! return this.array;
    return this.list.toArray();
  }
}

module.exports = Queue;
