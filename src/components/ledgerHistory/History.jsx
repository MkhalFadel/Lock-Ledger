import styles from './history.module.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'
import { MONTHS } from '../../utils/utility';
import { fetchLedger } from '../../API/ledger';

export default function History({isMobile, currentUser, transactions, setTransactions})
{
   const date = new Date();
   const m = date.getMonth();
   const y = date.getFullYear();
   
   const [mode, setMode] = useState("Monthly");
   const [month, setMonth] = useState(MONTHS[m]);
   const [year, setYear] = useState(y);
   const [labels, setLabels] = useState([]);

   const monthIndex = MONTHS.indexOf(month);
   const monthFormated = (monthIndex >= 10 || monthIndex === 9) ? String(monthIndex + 1) : "0" + (monthIndex + 1)

   useEffect(() => {
         async function loadLedgerData()
         {
            try
            {
               const userLedger = await fetchLedger(currentUser.id);
               userLedger ? setTransactions(userLedger.sort((a, b) => b.date.localeCompare(a.date))) : setTransactions([]);
            }
            catch(err)
            {
               console.log(err);
            }
         }
   
         loadLedgerData();
      }, [])

   
   useEffect(() => {
      const daysInMonth = new Date(year, MONTHS.indexOf(month) + 1, 0).getDate();
      if(mode === 'Monthly') 
      {
         const daysArr = [];
         for (let i = 1; i <= daysInMonth; i++)
         {
            i < 10 ? daysArr.push("0"+ i) : daysArr.push(String(i));
         }
         setLabels(daysArr);
      }
      else setLabels(MONTHS);

   }, [mode, month])

   function sortMonthlyTransactions(type)
   {
      const filtered = transactions.filter(t => t.type === (type === 'income' ? 'Income' : 'Expenses') && (t.date.slice("").split("-")[1] === monthFormated));
      const transactionsDatesFiltered = filtered.map(t => t.date.slice(8));
      
      const totalArr = [];

      for (let i = 0; i < labels.length; i++)
      {
         let total = 0;
         for (let j = 0; j < filtered.length; j++)
         {
            if(labels[i] === transactionsDatesFiltered[j])
            {
               total += Number(filtered[j].amount);
            }
         }
         totalArr.push(total);
      }

      return totalArr;
   }

   function sortYearlyTransactions(type)
   {
      const filtered = transactions.filter(t => t.type === (type === 'income' ? 'Income' : 'Expenses') && (t.date.split("-")[0] === String(year)));
      const transactionsDatesFiltered = filtered.map(t => t.date.slice(5, 7));
      
      const totalArr = [];

      for(let i = 0; i < labels.length; i++)
      {
         let total = 0;
         for(let j = 0; j < filtered.length; j++)
         {
            if(labels[i] === MONTHS[transactionsDatesFiltered[j] - 1])
               total += Number(filtered[j].amount);
         }
         totalArr.push(total);
      }

      return totalArr;
   }

   function getYearsList(start, end)
   {
      const years = [];
      for(let i = start; i <= end; i++)
      {
         years.push(i);
      }
      return years;
   }
   
   const yearsList = getYearsList(2015, 2025)

   function calculateTotals()
   {
      let totals = {totalIncome: 0, totalExpenses: 0, totalRemaining: 0};

      for(let t of transactions)
      {
         const [tYear, tMonth] = t.date.split("-");
         
         const matches = (mode === 'Monthly' && (tMonth === monthFormated && tYear === String(year))) || (mode === 'Yearly' && tYear === String(year))

         if(!matches) continue;
         
         if(t.type === 'Income')
            totals.totalIncome += Number(t.amount);
         else
         totals.totalExpenses += Number(t.amount);
      }

      totals.totalRemaining = totals.totalIncome - totals.totalExpenses;
      return totals;
   }

   const totals = calculateTotals();

   const options = {
      responsive: true,
      maintainAspectRatio: false, // allow it to stretch
   };

   function displayTransactions()
   {
      let filteredTransactions = [];

      if(mode === 'Monthly')
         filteredTransactions = transactions.filter(t => t.date.split("-")[1] === monthFormated && t.date.split("-")[0] == String(year)   );
      else 
         filteredTransactions = transactions.filter(t => t.date.split("-")[0] == String(year));

      return filteredTransactions.map(transaction => (
               <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.title}</td>
                        <td>{transaction.type}</td>
                        <td>${transaction.amount}</td>
                  </tr>
               )
            )
   }

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>{mode === "Monthly" ? "Monthly Report" : "Yearly Report"}</h2>
            <div className={styles.optionsContainer}>
               <select value={year} onChange={e => setYear(e.target.value)} className={styles.options}>
                  {yearsList.map((y, i) => (
                     <option key={i} value={y}>{y}</option>
                  ))}
               </select>
               
               <select value={month} onChange={e => setMonth(e.target.value)} className={styles.options} disabled={mode != 'Monthly'}>
                  {MONTHS.map((m, i)=> (
                     <option key={i} value={m}>{m}</option>
                  ))}
               </select>
               
               <select value={mode} onChange={e => setMode(e.target.value)} className={styles.options}>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
               </select>
            </div>
         </div>
         <div className={styles.report}>
            <div className={styles.income}>
               <p>Total Income</p>
               <h4>${totals.totalIncome}</h4>
            </div>
            <div className={styles.expenses}>
               <p>Total Expenses</p>
               <h4>${totals.totalExpenses}</h4>
            </div>
            <div className={styles.remaining}>
               <p>Total Remaining</p>
               <h4>${totals.totalRemaining}</h4>
            </div>
         </div>
         <div className={styles.chartReport}>
            <Bar options={options} data={{
               labels: labels,
               datasets: [
                  {
                     label: "Income",
                     data: mode === 'Monthly' ? sortMonthlyTransactions('income') : sortYearlyTransactions('income'),
                     backgroundColor: "#038d6a",
                     barThickness: isMobile ? 7 : 25
                  },
                  {
                     label: "Expenses",
                     data: mode === 'Monthly' ? sortMonthlyTransactions('expenses') : sortYearlyTransactions('expenses'),
                     backgroundColor: "#c41818",
                     barThickness: isMobile ? 7 : 25

                  }
               ]
            }} />
         </div>
         <h2>Detailed BreackDown</h2>
         <div className={styles.tableContainer}>
            <table className={styles.table}>
               <thead>
                  <tr>
                     <th>Date</th>   
                     <th>Title</th>  
                     <th>Type</th> 
                     <th>Amount</th>
                  </tr>
               </thead>
               <tbody>
                  {displayTransactions()}
               </tbody>
            </table>
         </div>
      </section>
   )
}