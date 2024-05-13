{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // using setter
        set deposit(amount: number) {
            this._balance = this.balance + amount;
        }

        //using manual function
        // public addDeposit(amount: number) {
        //   this._balance = this._balance + amount;
        // }


        // using getter
        get balance() {
            return this._balance;
        }

        //using manual function
        // public getBalance() {
        //   return this._balance;
        // }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);

    // goribManusherAccount.addDeposit(20); // function call korte hsse , it will not overwrite the amount
    goribManusherAccount.deposit = 50; // if we use setter it will not overwrite the amount


    // const myBalance = goribManusherAccount.getBalance(); // function call korte hsse
    const myBalance = goribManusherAccount.balance; // property er mto kore call hocche
    console.log(myBalance);

    //
}