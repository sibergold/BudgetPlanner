import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sav-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sav-nav.component.html',
  styleUrl: './sav-nav.component.scss'
})
export class SavNavComponent {
isSlideOut=true;
constructor(private router :Router){}

toggleSlideOut():void {
  this.isSlideOut=!this.isSlideOut;
}

onDash() {
  this.router.navigate(['/budget-planner/dashboard']);
}

onProfile() {

  this.router.navigate(['/budget-planner/profile']);
}
onHistory() {

  this.router.navigate(['/budget-planner/history']);
}
onLogout() {

  this.router.navigate(['/budget-planner/login']);
}
}
