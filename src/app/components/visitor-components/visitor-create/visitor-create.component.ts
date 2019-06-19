import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-create',
  templateUrl: './visitor-create.component.html',
  styleUrls: ['./visitor-create.component.css']
})
export class VisitorCreateComponent implements OnInit {

  visitorForm: FormGroup;

  constructor(private _visitorService: VisitorService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.visitorForm = this._form.group({
      FirstName: new FormControl,
      LastName: new FormControl
    });
  }

  onSubmit() {
    this._visitorService.createVisitor(this.visitorForm.value).subscribe(() => {
      this._router.navigate(['/visitor']);
    });
  }
}
