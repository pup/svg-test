import * as d3 from 'd3';

function renderTree(data) {
  const treeData = d3.hierarchy(data);
  console.log('======>>>>>>>>')
  console.log(treeData)
}

export default renderTree;