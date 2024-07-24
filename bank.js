class BankAccount{
    constructor(accountNumber,accountName,balance){
        this.accountName=accountName;
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.transactionhistory=[];
    }
    deposit(amount){
        if(amount>0){
            this.balance+=amount;
            this.recordTransaction('deposit',amount);
        }
        else{
            alert("Amount must be more than 0 to deposit");
        }
    }
    withdraw(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount;
            this.recordTransaction("Withdraw",amount);
        }
        else if(amount>this.balance){
            alert("Insufficient Funds");
        }
        else{
            alert("Amount must be positive");
        }
    }
    transfer(amount,toAccount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount;
            toAccount.balance+=amount;
            this.recordTransaction('transfer out',amount,toAccount);
            this.recordTransaction('transfer in',amount,this.accountNumber);
        }
        else if(amount>this.balance){
            alert("Insufficient Funds");
        }
        else{
            alert("Amount must be positive");
        }
    }
    addInterest(rate){
        if(rate>0){
            const interest=this.balance*(rate/100);
            this.balance+=interest;
            this.recordTransaction('interest',interest);
        }
        else{
            alert("Interest rate must be positive");
        }
    }
    getBalance(){
        return this.balance;
    }
    recordTransaction(type,amount,relatedAccount=null){
        const date=new Date();
        this.transactionhistory.push({
            date:date.toISOString(),
            type:type,
            amount:amount,
            relatedAccount:relatedAccount,
            balanceAfterTransaction:this.balance
        });
    }
}
let Accounts=[]
const addAccount=document.getElementById("btn-addnewaccount");
let depositbtn=document.getElementById("btn-deposit");
let withdrawbtn=document.getElementById("btn-withdraw");
let transferbtn=document.getElementById("btn-transfer");
let interestbtn=document.getElementById("btn-addInterest");
let detailsbtn=document.getElementById("btn-accountDetails");
let container=document.getElementById("transaction-history");

function addAccountHandler(){
    const accountName=document.getElementById("input-accountName");
    const accountNumber=document.getElementById("input-accountNumber");
    const accountbalance=document.getElementById("input-balance");
    if(accountName && accountNumber && accountbalance){
        const account=new BankAccount(+accountNumber.value,accountName.value,+accountbalance.value);
        Accounts.push(account);
        console.log(Accounts);
        accountName.value="";
        accountNumber.value="";
        accountbalance.value="";
    }
    else{
        alert("Enter all fields to add")
    }
}


function findAccount(accountnumber){
    let found=false;
    for(let i=0;i<Accounts.length;i++){
        console.log(Accounts[i].accountNumber,accountnumber);
        if(Accounts[i].accountNumber===accountnumber){
            found=true;
            return i;       
        }
    }
    if(!found){
        return -1;
        }

}


function depositHandler(){
    const accountnumber=document.getElementById("input-accountnumber");
    const amount=document.getElementById("input-amountdeposit");
    if(amount.value && accountnumber.value){
        let value=findAccount(+accountnumber.value)
        if(value<0){
            alert("Account Not found");
        }
        else{
            Accounts[value].deposit(+amount.value);
            accountnumber.value="";
            amount.value="";
        }
    }
    else{
        alert("Amount and AccountNumber should not be emplty");
    }
}

function withdrawHandler(){
    const accountnumber=document.getElementById("input-accountnumber");
    const amount=document.getElementById("input-amountwithdraw");
    if(amount.value && accountnumber.value){
        let value=findAccount(+accountnumber.value)
        if(value<0){
            alert("Account Not found");
        }
        else{
            Accounts[value].withdraw(amount.value);
            accountnumber.value="";
            amount.value="";
        }
        
    }
    else{
        alert("Amount and AccountNumber should not be emplty");
    }
}

function transferHandler(){
    const accountnumber=+document.getElementById("input-accountnumber").value;
    const amount=+(document.getElementById("input-transferamount").value);
    const toaccount=+(document.getElementById("input-toaccount").value);
    if(amount && accountnumber && toaccount){
        let value=findAccount(accountnumber)
        if(value<0){
            alert("Account Not found");
        }
        else{
            let index=findAccount(toaccount)
            Accounts[value].transfer(amount,Accounts[index]);
        }
        
    }
    else{
        alert("Amount and AccountNumber should not be emplty");
    }
}


function interestHandler(){
    const accountnumber=+document.getElementById("input-accountnumber").value;
    const rate=+(document.getElementById("input-rate").value);
    if(amount && accountnumber){
        let value=findAccount(accountnumber)
        if(value<0){
            alert("Account Not found");
        }
        else{
            Accounts[value].addInterest(amount,Accounts[index]);
        }
        
    }
    else{
        alert("Account number and rate of interest should not be emplty");
    }
}
function detailsHandler(){
    const accountnumber=+document.getElementById("input-accountnumber").value;
    if(accountnumber){
        let value=findAccount(accountnumber)
        if(value<0){
            alert("Account Not found");
        }
        else{
            container.innerHTML=`<p>Accountant Name : ${Accounts[value].accountName}</p>
            <p> Account Number : ${Accounts[value].accountNumber}</p>
            <p>Balance :${Accounts[value].balance}`;
           console.log(Accounts[value].transactionhistory);
           }
        
        
    }
    else{
        alert("Account Number should not be emplty");
    }
}

addAccount.addEventListener('click',addAccountHandler);
depositbtn.addEventListener('click',depositHandler);
withdrawbtn.addEventListener('click',withdrawHandler);
transferbtn.addEventListener('click',transferHandler);
interestbtn.addEventListener('click',interestHandler);
detailsbtn.addEventListener('click',detailsHandler);