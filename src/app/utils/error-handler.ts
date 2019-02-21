import {Observable, of} from 'rxjs';

export class ErrorHandler {


  protected handlerError<T>(operation = 'operation', result?: T) {
    // 错误处理函数
    return (error: any): Observable<T> => {

      console.log(error);

      return of(result as T);
    };
  }
}


export interface Row {
  list: [];
  total?: number;
}
