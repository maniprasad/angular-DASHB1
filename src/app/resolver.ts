import { Injectable } from '@angular/core';


import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class APIResolver implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot) {
     // alert("sdf");
     console.log(route.params); 
     const data = ["mani" , "mdfsdf" ,"asfasf"]
    return 
  }
}