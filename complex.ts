class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number){
        this.re = re;
        this.im = im;
    }

    add(complex2:Complex) {
        let re=this.re + complex2.re;
        let im=this.im + complex2.im;

        return new Complex(re,im);
    }

    substract(complex2:Complex) {
        let re=this.re - complex2.re;
        let im=this.im - complex2.im;

        return new Complex(re,im);
    }

    toString() {
        console.log(this.re,this.im);
    }
}


let a=new Complex(5,2);
let b=new Complex(7,3);
let c=a.add(b);

c.toString();

//tsc Complex.ts
//node Complex.js