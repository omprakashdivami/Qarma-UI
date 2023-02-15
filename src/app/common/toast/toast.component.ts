import { Component,Input } from '@angular/core';
import { toast } from '../Interfaces/interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() toastData:toast[]=[{
    image: '',
    status: '',
    message: ''
  }]
}
