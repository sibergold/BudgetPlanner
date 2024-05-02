import { Component } from '@angular/core';
import { SavNavComponent } from "../sav-nav/sav-nav.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
    selector: 'app-history',
    standalone: true,
    templateUrl: './history.component.html',
    styleUrl: './history.component.scss',
    imports: [SavNavComponent,ReactiveFormsModule,CommonModule,MatIconModule]
})
export class HistoryComponent {
todoForm: any;
selectedMonth: string;
expenses:{ month:string,expenseAmount:number}[]=[
{ month:'January',expenseAmount:1500 },
{ month:'February',expenseAmount:2000 },
{ month:'March',expenseAmount:1800 },
];
monthSelected: boolean=false;
januaryExpense: any[]=[
 { expenseType:'Recharge', expenseAmount:1500},
 {expenseType:'Light Bills',expenseAmount:500}
];
februaryExpense: any[]=[
  { expenseType:'Essentails', expenseAmount:200},
  {expenseType:'Light Bills',expenseAmount:400}
 ];
 marchExpense: any[]=[
  { expenseType:'Recharge', expenseAmount:1100},
  {expenseType:'Essentails',expenseAmount:250}
 ];
  constructor(private fb:FormBuilder, private router:Router){
    this.selectedMonth=new Date().toLocaleString('default',{month:'long'})
  }

  ngOnInit():void {
    this.todoForm=this.fb.group({
      month:['',Validators.required],
      expenseType:['',Validators.required],
      expenseAmount:['',Validators.required],
    });
  }

  onSubmitExpense()
  {
    if(this.todoForm.valid)
      {
        const newExpense=this.todoForm.value;
        this.getFilteredExpenses().push(newExpense);
        this.todoForm.reset();
      }
  }

onChangeExpense(event:any)
{
  this.selectedMonth=event.target.value;
  this.monthSelected=true;
  this.getFilteredExpenses();
}

getFilteredExpenses()
{
  switch(this.selectedMonth)
  {
    case 'January':
      return this.januaryExpense;
      case 'February':
      return this.februaryExpense;
      case 'March':
      return this.marchExpense;
      default:
      return [];
  }
}
calculateTotalExpense(month:string):number
{
  return this.getFilteredExpenses().reduce((acc,curr)=>acc + curr.expenseAmount,0)
}
onSave()
{
  if(this.todoForm.valid)
    {
      this.todoForm.reset({month:this.selectedMonth});
      this.getFilteredExpenses();
    }
}
saveForm()
{
  console.log("Form saved");
}
onBack()
{
  this.router.navigate(['/budget-planner/dashboard']);
}
}
