

// create cube using size
// size = 3
function createCube(size) {

  const OPENCUBE = "/"
  const DEGLOSE = "\\"
  const LAYAOUT_3D = "_"
  let top = [], down = []
  // `${(OPENCUBE+DEGLOSE).repeat(3)+(LAYAOUT_3D+DEGLOSE).repeat(3)}`

  for (let index = 1; index <= size; index++) {
    top.push(`${(" ").repeat(size - index) + (OPENCUBE + DEGLOSE).repeat(index) + (LAYAOUT_3D + DEGLOSE).repeat(size)}`)
    down.push(`${(" ").repeat(index - 1) + (DEGLOSE + OPENCUBE).repeat(size + 1 - index) + (LAYAOUT_3D + OPENCUBE).repeat(size)}`)
  }

  return top.concat(down).join('\n')
}
/*
 Example form cube 3x3x3
'  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/'

*/
