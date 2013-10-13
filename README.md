heapjs
======

This is a simple heap. To use: 

    h = new Heap(function compare (a, b) { return a - b; });
    h.push(15);
    h.push(14);
    h.push(13);
    h.push(12);
    h.push(11);
    
    a = [h.pop(), h.pop(), h.pop(), h.pop(), h.pop()] 
    // a = [11, 12, 13, 14, 15]
    
    
