import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../home/home.entity';

@Component({
  selector: 'app-player-left',
  templateUrl: './player-left.component.html',
  styleUrls: ['./player-left.component.scss']
})
export class PlayerLeftComponent implements OnInit {

  @Input('selected_player')  selected_list:Array<Player>;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  start(){
    localStorage.setItem("selected_list",JSON.stringify(this.selected_list))
    this.route.navigate(['/bet'])
  }

}
