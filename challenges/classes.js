class CuboidMakerr {
  constructor(properties) {
    this._length = properties.length;
    this._width = properties.width;
    this._height = properties.height;
  }

  volume() {
    return this._length * this._height * this._width;
  };

  surfaceArea() {
    return (
      2 *
      (this._length * this._width +
        this._length * this._height +
        this._width * this._height)
    );
  }
}

const cuboidd = new CuboidMakerr({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidd.volume()); // 100
console.log(cuboidd.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerr {
  volume() {
    return this._length ** 3;
  }

  surfaceArea() {
    return 6 * (this._length ** 2);
  }
}

const cube = new CubeMaker({ length: 5 })

console.log(cube.volume());
console.log(cube.surfaceArea());