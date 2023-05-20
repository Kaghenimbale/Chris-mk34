function drawLine(x1, y1, x2, y2) {
  console.log(`Draw line from ${x1}, ${y1} to ${x2}, ${y2}`);
}

function drawHTree(x, y, length, depth) {
  const stack = [];
  stack.push({ x, y, length, depth });

  while (stack.length > 0) {
    const { x, y, length, depth } = stack.pop();

    if (depth === 0) {
      continue;
    }
    const halfLength = length / 2;
    const xStart = x + halfLength;
    const xEnd = x - halfLength;
    const yStart = y + halfLength;
    const yEnd = y - halfLength;

    drawLine(xStart, y, xEnd, y); // draw horizontal line

    // draw two vertical lines
    drawLine(xStart, yStart, xStart, yEnd);
    drawLine(xEnd, yStart, xEnd, yEnd);

    const newDepth = depth - 1;

    stack.push(
      { x: xStart, y: yStart, length: halfLength, depth: newDepth }, //left upper
      { x: xStart, y: yEnd, length: halfLength, depth: newDepth }, // left lower
      { x: xEnd, y: yStart, length: halfLength, depth: newDepth },
      { x: xEnd, y: yEnd, length: halfLength, depth: newDepth },
    );
  }
}

drawHTree(100, 100, 100, 1);

// function drawLine(x1, y1, x2, y2) {
//   console.log(`Draw line from ${x1}, ${y1} to ${x2}, ${y2}`);
// }

// function drawHTree(x, y, length, depth) {
//   if (depth === 0) {
//     return;
//   }

//   const halfLength = length / 2;
//   const xStart = x + halfLength;
//   const xEnd = x - halfLength;
//   const yStart = y + halfLength;
//   const yEnd = y - halfLength;

//   drawLine(xStart, y, xEnd, y); // draw horizontal line

//   // draw two vertical lines
//   drawLine(xStart, yStart, xStart, yEnd);
//   drawLine(xEnd, yStart, xEnd, yEnd);

//   const newDepth = depth - 1;

//   drawHTree(xStart, yStart, halfLength, newDepth);
//   drawHTree(xStart, yEnd, halfLength, newDepth);
//   drawHTree(xEnd, yStart, halfLength, newDepth);
//   drawHTree(xEnd, yEnd, halfLength, newDepth);
// }

// drawHTree(100, 100, 100, 1);
