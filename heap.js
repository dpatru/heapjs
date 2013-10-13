function floor(x, y) { return Math.floor(x, y); }
function max(x, y) { return Math.max(x, y); }
function min(x, y) { return Math.min(x, y); }
function swap(arr, x, y) { var t = arr[x]; arr[x] = arr[y]; arr[y] = t; }

function heapify(arr, cmp) {
  if (!cmp) throw "missing cmp";
  var len = arr.length;
  for (i = floor(len/2); 0 <= i; i--) {
    heapshift(arr, cmp, i);
  }
  return arr;
}
function heapshift(arr, cmp, i){
  if (!cmp) throw "missing cmp";
  var len = arr.length;
  var x; // holds index to swap
  while (i <= floor(len/2)) {
    var left = 2*i+1, right = left + 1;
    x = right < len && 0 < cmp(arr[left], arr[right])
                             ? right
                             : left < len
                             ? left: null;
    if (x && 0 < cmp(arr[i], arr[x])) {
      swap(arr, i, x);
      i = x;
    }
    else break;
  }
}
function heappop(arr, cmp) {
  if (!cmp) throw "missing cmp";
  var len = arr.length;
  if (!len) throw "empty heap";
  if (len == 1){
    return arr.shift();
  }
  var x = arr[0];
  arr[0] = arr.pop();
  heapshift(arr, cmp, 0);
  return x;
}
function heappush(arr, x, cmp) {
  if (!cmp) throw "missing cmp";
  arr.push(x);
  var i = arr.length-1;
  while (i > 0) {
    var parent = floor((i-1) / 2);
    if (0 < cmp(arr[parent], arr[i])) {
      swap(arr, parent, i);
      i = parent;
    }
    else break;
  }
  return arr;
}
function Heap(cmp) {
  this.cmp = cmp || function(a, b) {return a - b;};
  this.arr = [];
}

Heap.prototype = {
  heapify: function(){ return heapify(this.arr, this.cmp); },
  push: function(x) { return heappush(this.arr, x, this.cmp); },
  pop: function() { return heappop(this.arr, this.cmp); }
}


// test
function testheap() {
  var arr = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  var h = new Heap;
  arr.forEach(function(x) {h.push(x);});
  console.log(h);
  console.log(h.pop(),h.pop(),h.pop(),h.pop(),h.pop(),
              h.pop(),h.pop(),h.pop(),h.pop(),h.pop(),
              h.pop(),h.pop(),h.pop(),h.pop(),h.pop());
  try {h.pop();}
  catch(e) { console.log(e); }
  console.log("done with object testing");

  function testcmp (x, y){return x-y;}
  console.log(
    heapify(arr, testcmp));
  console.log(
    heappush(arr, 16, testcmp));
  console.log(
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp),
    heappop(arr, testcmp)
  );
}
