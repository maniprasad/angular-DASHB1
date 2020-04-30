import { Component , Input , Output , EventEmitter , OnInit , ViewChild, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { HttpClient} from "@angular/common/http"
import { Observable, of} from "rxjs";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { TestService  } from "../testService"
import { SubscriptionLike as ISubscription } from "rxjs";
import { Title }     from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
    selector:"description",
    templateUrl:"./thortemplate.html",
    styleUrls:["./thor.css"],
    //encapsulation:ViewEncapsulation.Native
})

export class description {
    @Output() messageToEmit = new EventEmitter<string>();
    messageToSendC: string = "Hello Parent !";
    displayedColumns = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<any>;
    @ViewChild('MatPaginator', {static: true}) paginator: MatPaginator;
   // @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild('MatSort', {static: true}) sort: MatPaginator;
    sub: any;
    name: string;
  entiryUser: boolean;
  entiryIP: boolean;
  viewMode: string;
  squareOf2:any;
//data: any[];
    //@ViewChild(MatSort) sort: MatSort;
  
constructor(private route :ActivatedRoute , private http: HttpClient  , private ts : TestService , private titleService: Title ){
    this.route.params.subscribe( params => console.log(params) );
    this.titleService.setTitle( "yello" );
}


sendMessageToParent(message: string) {
    this.messageToEmit.emit(message)
  }

  ngOnInit(){
    this.sub = this.ts.output.subscribe(v => {
        if(v) {
          this.name = v.name;
        }
      })
    console.log(this.route.snapshot)
        this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe((item:any) =>{ 
        console.log(item);
        this.dataSource = new MatTableDataSource(item.data);
        });
 // this.entiryUser = true ;
this.entiryUser = false;
this.viewMode = "map";
//this.entiryIP = false;  

 this.squareOf2 = of(1, 2, 3, 4, 5,6)
  .pipe(
    filter((num) => num % 2 === 0),
    map(num => num * num)
  );
this.squareOf2.subscribe( (num) => console.log(num));

  }
  ngdestory(){
    this.squareOf2.unsubscribe();
  }
  ngAfterViewInit() {
  //  this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;
  }

}

// export interface UserData {
//     id: string;
//     name: string;
//     progress: string;
//     color: string;
//   }
  