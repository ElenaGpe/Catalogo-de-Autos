import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Automovil } from './list/models';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { catchError, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/60';
  private autosActionURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  
  constructor(private http: HttpClient, private messagesServices: MessagesService) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=>this.messagesServices.add('Autos obtenidos.'))
    );
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap((result)=>{
        console.log(result);
        this.messagesServices.add(`Auto actualizado (ID ${result.data._id}).`)
      })
    );
  }

  addAutos(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosActionURL, auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap((result)=>{
        console.log(result);
        this.messagesServices.add(`Auto (ID ${result.data._id}) agregado.`)
      })
    );
  }

  deleteAutos(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(()=>this.messagesServices.add('Auto eliminado.'))
    );
  }

  private handleError<T>(operation= 'operation',result?: T){
    return(error: any): Observable<T> =>{
      this.messagesServices.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }
}



