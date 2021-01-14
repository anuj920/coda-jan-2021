import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../home/home.entity';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit, OnDestroy {
  opposeBet:number;
  selected_list:Array<Player>;


  constructor() { }

  ngOnInit(): void {
    this.selected_list = JSON.parse(localStorage.getItem("selected_list"))
    this.opposeBet = this.getRndInteger(1,9)
    this.matchBet()
  }

  ngOnDestroy(): void {
    let player:Array<Player> = JSON.parse(localStorage.getItem("player_list"))
    this.selected_list.forEach(el=>{
      let ind = player.findIndex(i=>i.id == el.id)
      console.log(ind)
      player[ind] = el
      console.log(player[ind])
    })
    console.log(player)
    localStorage.setItem('player_list', JSON.stringify(player))
    localStorage.setItem('selected_list', JSON.stringify(this.selected_list))
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  refreshBet(){
    this.opposeBet =  this.getRndInteger(1,9)
    this.matchBet()
  }

  matchBet(){
    this.selected_list.forEach(ele=>{
      if(ele.bet == this.opposeBet){
        let aa = ele.price * 2
        ele.price = aa
        console.log(aa)
        console.log(ele)
      }
    })
  }
}
