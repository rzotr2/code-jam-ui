import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../services/data-services/data.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalUploadComponent} from "./components/modal/modal-upload.component";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit, OnDestroy{
  public subscriptions = new Subscription();

  constructor(
    public dataService: DataService,
    private bsModalRef: BsModalRef,
    private bsModalService: BsModalService
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.dataService.loadAll(null, 9).subscribe(),
    );
  }

  public delete(id: string): void {
    this.subscriptions.add(
      this.dataService.delete(id).subscribe(),
    );
  }

  public showModal(): void {
    this.bsModalService.show(ModalUploadComponent, {class: 'model-xl'});
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
