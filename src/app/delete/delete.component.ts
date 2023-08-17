import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cardname: string }
  
  ) {}
 
  onConfirm(): void {
    this.dialogRef.close(true);
    console.log("deltd");
  
  }
 
  onCancel(): void {
    this.dialogRef.close(false);
    console.log("cancelled");
  }

}
function button(click: any) {
  throw new Error('Function not implemented.');
}

