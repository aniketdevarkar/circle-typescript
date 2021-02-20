class circle{
    
    radius: number ;
    color: string ;
    constructor(radius:number=1.0,color:string="red"){
        
        this.radius = radius;
        this.color = color;
      
    }
    getRadius():number{
        return this.radius
    }
    setRadius(radius:number):void{
        this.radius = radius;
    }
    getColor():string{
        return this.color
    }
    setColor(color:string):void{
        this.color = color;
    }
    toString():string{
    return `radius = ${this.radius} color = ${this.color}`;
    }
    getArea():number{
        let area = Math.PI * this.radius*this.radius;
        return parseFloat(area.toFixed(2)); 
    }
    getCircumference():number{
        let circumference = 2* Math.PI * this.radius;
        return parseFloat(circumference.toFixed(2)); 
    }

}
let newCircle = new circle();

console.log(newCircle.getColor(),newCircle.getRadius(),newCircle.getArea());
console.log(newCircle.toString());
newCircle.setColor('blue');
newCircle.setRadius(2.0);
console.log(newCircle.getColor(),newCircle.getRadius(),newCircle.getArea(),newCircle.getCircumference());