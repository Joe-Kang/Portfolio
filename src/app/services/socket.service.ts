import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  logStatus: boolean;
  messages: string[];

  constructor(private socket: Socket) {
    this.logStatus = false;
  }

  setUsername(username: string) {
    this.socket.emit('add user', username);
  }

  sendMessage(message: string) {
    this.socket.emit('new message', message);
  }

  getMessages() {
    return new Observable((observer) => {
      this.socket.on('new message', data => {
        observer.next(data);
      });
    });
  }

  newUser() {
    return new Observable((observer) => {
      this.socket.on('new user', data => {
        this.messages = data.messages;
        observer.next(data);
      });
    });
  }
}
