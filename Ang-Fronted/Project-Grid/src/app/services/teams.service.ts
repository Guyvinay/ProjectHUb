import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTeam, Team } from '../modals/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  baseTeamUrl = "http://localhost:8888/api/teams/createTeam";

  constructor(
    private http : HttpClient
  ) { }

  createTeam(team:CreateTeam, token:string) : Observable<any>{
    const headers = new HttpHeaders({
      "Authorization":`Bearer ${token}`
    })
    return this.http.post<any>( this.baseTeamUrl, 
      team, 
      {headers}
      );
  }


}
