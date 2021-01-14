import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../home/home.entity';

@Component({
  selector: 'app-player-right',
  templateUrl: './player-right.component.html',
  styleUrls: ['./player-right.component.scss']
})
export class PlayerRightComponent implements OnInit {
  // search_list:Array<Player>
  playerList:Array<Player>
  page:number = 1

  @Input('playerList') search_list:Array<Player>;
  @Input('selected_count') selected_count:number;

  @Output('output_data') eventOutput = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  keyUpSearch(value:string){
    if(!this.playerList){
      this.playerList = Object(this.search_list)
    }
    this.search_list = this.playerList.filter(i=>i.name.toLowerCase().includes(value.toLowerCase()))
  }

  onselectchange(item:Player){
    let data = {}
    if(item.selected){
      data["type"] = "add"
      data["item"] = item;
    }
    else{
      data["type"] = "remove"
      data["id"] = item.id
    }
    this.eventOutput.emit(data)
    if(!this.playerList){
      this.playerList = Object(this.search_list)
    }
    let indx = this.playerList.findIndex(i=>i.id == item.id)
    this.playerList[indx] = item
    localStorage.setItem('player_list', JSON.stringify(this.playerList))
  }
}
