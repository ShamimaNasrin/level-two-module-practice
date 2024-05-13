{
    //static(ekhane memory poriborton hoyna)
    class Counter {

        // without static
        count1: number = 0;
        withoutStaticCountIncrement() {
            return (this.count1 = this.count1 + 1);
        }
        withoutStaticCountDecrement() {
            return (this.count1 = this.count1 - 1);
        }

        // with static
        static count2: number = 0;
        withStaticCountIncrement() {
            return (Counter.count2 = Counter.count2 + 1); //when you use a static value you have to use className. instead of this.
        }
        withStaticCountDecrement() {
            return (Counter.count2 = Counter.count2 - 1);
        }

        //With static methods
        static count3: number = 0;
        static Increment() {
            return (Counter.count2 = Counter.count2 + 1);
        }

    }

    const instance1 = new Counter();
    const count1 = instance1.withoutStaticCountIncrement();
    console.log(count1); // jodi count ta static na hoy tahole ekhane count er value bere 1 hobe abar instance2 teo alada kore count er value 1 hobe that means different memory use hobe 

    const instance2 = new Counter();
    const count2 = instance2.withoutStaticCountIncrement();
    console.log(count2); // static use korle instance1 e count er value 1 hobe, instance2 te 2 hobe, that means same memory use hobe


    const instance3 = new Counter();
    const count3 = instance3.withoutStaticCountIncrement();
    console.log(count3); // value 1 hobe

    const instance4 = new Counter();
    const count4 = instance4.withoutStaticCountIncrement();
    console.log(count4); // value 2 hobe, that means same memory use hobe


    //Call static method
    console.log(Counter.Increment()); // we dont even need to create instance for a static method call


}