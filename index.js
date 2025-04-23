const select=document.querySelector("select");
const btn=document.querySelector("button");
const mainBalance=document.getElementById('total');
const totalDeposit=document.getElementById('deposite');
const totalWithdraw=document.getElementById('withdraw')
const amount=document.getElementById('amount');
const list=document.getElementById('list')

const history=document.getElementById('his')
const table=document.querySelector('table')



btn.addEventListener("click",()=>{
    const inputAmount=parseInt(amount.value)
    const method=select.value.toUpperCase();
    
    if(select.value==='deposite'){
        const total=parseInt(mainBalance.innerText)
        const deposite=parseInt(totalDeposit.innerText)
        mainBalance.innerText=total+inputAmount;
        totalDeposit.innerText=deposite+inputAmount;
    }else{
        const total=parseInt(mainBalance.innerText)
        const withdraw=parseInt(totalWithdraw.innerText)
        if(total<inputAmount){
            alert("Insufficient balance")
            return;
        }
        mainBalance.innerText=total-inputAmount;
        totalWithdraw.innerText=withdraw+inputAmount;
    };

    const tr=document.createElement('tr');
    
    tr.classList.add("m-2");
    
    tr.innerHTML=`
    <td class='text-center p-3'>${method}</td>
    <td class='text-center p-3'>${inputAmount}</td>
    <td class='text-center p-3'>${new Date().toLocaleString()}</td>
    <td class='text-center p-3'>
        <button  class='remove-btn bg-red-500 text-white p-1 rounded'>Remove</button>
    </td>
    `

    list.appendChild(tr);

    tr.querySelector('.remove-btn').addEventListener('click',()=>{
        tr.remove()
    })

    amount.value = 0
    
    
});



table.style.tableLayout='auto'
table.style.borderWidth='1px'
table.style.borderColor='black'
table.style.minWidth='100%'


history.style.marginTop='20px'
history.style.overflowX='auto'
history.style.overflowY='scroll'
history.style.maxHeight='200px'
