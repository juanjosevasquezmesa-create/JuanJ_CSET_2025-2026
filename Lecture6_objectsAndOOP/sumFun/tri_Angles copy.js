class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    returnPoint(){
        return [this.x, this.y];
    }
}

class line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    lineLength(){
        return ((this.point1[0] - this.point2[0])**2) - ((this.point1[1] - this.point2[1])**2);
    }
}

class triangle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    
}
//            console.log(`The area is:  ${(1/2*(point1[0]*(point2[1]-point3[1]) + point2[0]*(point3[1]-point1[1]) + point3[0]*(point1[1]-point2[1])))}`);
