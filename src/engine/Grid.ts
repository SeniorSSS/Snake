import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;
  apples = [
    new Cell(33, 22),
    new Cell(35, 22),
    new Cell(37, 22),
    new Cell(39, 22),
    new Cell(41, 22)
  ];

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {
    this.apples.push(new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)));
  }


  isAppleInside(cell: Cell): boolean {
    return this.apples.find(apple => apple.x === cell.x && apple.y === cell.y) !== undefined;
  }

  removeApple(cell: Cell): void {
    // this.apples = this.apples.filter(apple => apple.x !== cell.x && apple.y !== cell.y)
    //const aple = this.apples.find(apple => apple.x === cell.x && apple.y === cell.y)!
    //const i = this.apples.indexOf(aple)
    //this.apples.slice(i, 1);

    // const newApples = this.apples.filter(a => a.x !== cell.x && a.y !== cell.y);
    /*
     var index = 0;
     for (var i=0;i<this.apples.length;i++) {
       if (this.apples[i] === cell) {
         index = i;
         break;
       }
     }
     */

    /*
    const aboli = this.getApples();
    //aboli.filter(a => a.x === 32 && a.y === 22);
   aboli.splice(1,1);
   const i = aboli.indexOf(cell);
   aboli.forEach(apple => {
     console.log("x=" + apple.x + "y=" + apple.y + " ");
   });
   console.log("===============")
   console.log("x=" + cell.x + "y" + cell.y + "index=" + i);
   */

   /*
    var i;
    for (i = 0; i < this.getApples().length; i++) {
      if (this.apples[i].x === cell.x && this.apples[i].y === cell.y) {
        break;
      }
    }
*/
var i = this.apples.findIndex(a => a.x === cell.x&&a.y===cell.y);
    this.apples.splice(i, 1);

    if (this.apples.length===0){
    this.seed();
  }


  }

  isDone(): boolean {
    return false;
  }

  getApples(): Cell[] {
    /*
    console.log("===============");
    this.apples.forEach(apple => {
      console.log("x=" + apple.x + "y=" + apple.y + " ");
    });
    console.log("===============")
    */
    return this.apples;

  }
}
