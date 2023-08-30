import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter();

  @Output()
  public onDebounce = new EventEmitter();

  emitValue( value: string) {
    this.onValue.emit( value );
  }

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe( debounceTime(300) )
    .subscribe(value => {
     this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    console.log('destruido'),
    this.debouncerSuscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next( searchTerm );
  }
}
