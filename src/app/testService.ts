import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable } from "rxjs";

// export class ResultData {
//   name: string;
// }

@Injectable()
export class TestService {
  private outputSubject: BehaviorSubject<any> = new BehaviorSubject(null); 

  output : Observable<any> = this.outputSubject.asObservable();

  send(data: any){
    console.log(data);
    this.outputSubject.next(data);
  }

}

