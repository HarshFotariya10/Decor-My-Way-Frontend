// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedDataSubject = new BehaviorSubject<number>(0);
  sharedData$ = this.sharedDataSubject.asObservable();

  setSharedData(categoryID: number) {
    this.sharedDataSubject.next(categoryID);
  }

  private sharedDataString = new BehaviorSubject<String>('');
  sharedDataString$ = this.sharedDataString.asObservable();

  setSharedDataString(StringData: String) {
    this.sharedDataString.next(StringData);
  }
}
