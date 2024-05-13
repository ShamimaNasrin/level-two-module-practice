{
    // access modifiers
    class BankAccount {
        public readonly id: number; // accessible from everyone
        public name: string;
        private _balance: number; // only accessible inside this class
        protected userInfo: string; // only accessible to this class and its child classes

        constructor(id: number, name: string, balance: number, userInfo: string) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            this.userInfo = userInfo;
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        public getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this.userInfo = 'Student';
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20, 'age');
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);

    //
}
