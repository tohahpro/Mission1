{
 
    function formatString(input: string, toUpper?: boolean): string{
        if(toUpper === false){
            return input.toLowerCase();
        }else{
            return input.toUpperCase();
        }        
    }



    function filterByRating(items: { title: string; rating: number }[]): { title: string; 
        rating: number }[]{
            return items.filter(item => item.rating >= 4);
        }
    


    function concatenateArrays<T>(...arrays: T[][]): T[]{
        return [].concat(...arrays);
    }
     
     

    class Vehicle{
        private _make : string;
        private year : number;

        constructor(_make:string, year:number){
            this._make = _make;
            this.year = year
        }

        getInfo(){
            return `"Make: ${this._make}, Year: ${this.year}"`;            
        }
    }

    class Car extends Vehicle{
        private _model : string

        constructor(_make:string, year:number,_model: string){
            super(_make,year)
            this._model=_model
        }

        getModel(){
            return `"Model: ${this._model}"`;
            
        }
    }





    function processValue(value: string | number): number {
        if(typeof value === "string"){
            return value.length;
        }else{
            return value * 2;
        }
    }
    
    

    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null{
        
        if(products.length == 0){
            return null;
        }

        let highest = products[0];     
        for(let i=1; i<products.length;i++){
            if(products[i].price > highest.price){
                highest = products[i];
            }
        }
        return highest;
      }


      

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
      
      function getDayType(day: Day): string {
        if(day === Day.Saturday){
            return 'Weekend'; 
         }      
        else if(day === Day.Sunday){
            return 'Weekend';
        }else{
            return 'Weekday'
        }        
      }



    async function squareAsync(n: number): Promise<number>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(n >= 0){
                    resolve(n*n);
                }else{
                    reject(new Error("Negative number not allowed"))
                }
            }, 1000)
        })
    }

}
