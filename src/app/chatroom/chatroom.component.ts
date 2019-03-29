import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, OnDestroy, AfterContentChecked } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, OnDestroy, AfterViewChecked, AfterContentChecked {

  @ViewChild('log') messageLog: ElementRef;
  @ViewChild('username') usernameInput: ElementRef;
  @ViewChild('msg') messageInput: ElementRef;
  logStatus: boolean;
  usernames: string;
  message: string;
  messages: string[] = [];
  getMessageSub: any;
  getUsersSub: any;

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.logStatus = this.socketService.logStatus;
    this.messages = this.socketService.messages;

    this.getUsersSub = this.socketService
    .newUser()
    .subscribe((data: {log: string}) => {
      this.messages = this.socketService.messages;
      this.messages.push(data.log);
    });
    this.getMessageSub = this.socketService
      .getMessages()
      .subscribe((data: string) => {
        this.messages.push(data);
      });
  }

  ngAfterViewChecked(): void {
    this.messageLog.nativeElement.scrollTop = this.messageLog.nativeElement.scrollHeight;
  }

  ngAfterContentChecked(): void {
    if (!this.logStatus) {
      this.usernameInput.nativeElement.focus();
    } else {
      this.messageInput.nativeElement.focus();
    }
  }

  setUsername(username: string) {
    if (!username) {
      username = 'user';
    }
    this.logStatus = !this.logStatus;
    this.socketService.logStatus = this.logStatus;
    this.socketService.setUsername(username);
  }

  sendMessage(message: string) {
    if (message) {
      this.socketService.sendMessage(message);
    }
    this.message = '';
  }

  ngOnDestroy(): void {
   this.getMessageSub.unsubscribe();
   this.getUsersSub.unsubscribe();
  }
}
