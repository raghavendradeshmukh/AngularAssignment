import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }
 
  public NAME_PATTERN='^[a-zA-Z]+$';
  public NUMBER_PATTERN='^[0-9]*$';
  public DEFAULT_PAGESIZEOPTION=[5, 10, 25, 100];
}
