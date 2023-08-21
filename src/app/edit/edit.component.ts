import { createInjectableType } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  string 
  
  ) {} 
 
  onSave(): void {
    // Implement save logic here
    // You can access edited data using this.data
    this.dialogRef.close();
    console.log("saved");
  }
 
  onCancel(): void {
    this.dialogRef.close();
  }
 }


