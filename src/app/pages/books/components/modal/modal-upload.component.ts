import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../../services/data-services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalUploadComponent implements OnDestroy {
  public subscriptions = new Subscription();

  constructor(
    public bsModalRef: BsModalRef,
    public dataService: DataService
  ) {
  }

  public uploadBookForm = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    cover: new FormControl(''),
    description: new FormControl('')
  })

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    const formData = this.uploadBookForm.getRawValue();

    this.subscriptions.add(this.dataService.create(formData).subscribe(() => this.bsModalRef.hide()));
  }


  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
