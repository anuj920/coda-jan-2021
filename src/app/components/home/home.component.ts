import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from './home.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playerList:Array<Player> = [];
  selectedPlayer:Array<Player> = [];
  msg_ser: any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getPlayerList()
    this.selectedPlayer = localStorage.getItem("selected_list") ? JSON.parse(localStorage.getItem("selected_list")) : []
  }


  getPlayerList(){
    this.playerList = JSON.parse(localStorage.getItem('player_list'))
    if(!this.playerList || !this.playerList.length){
      let url =  `https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json`
      this.api.get(url).subscribe(res=>{
        if(res && res.length>0){
          this.playerList = []
          for (let index = 0; index < res.length; index++) {
            const element = res[index];
            let item = new Player();
            item.price = parseInt(element["Price"])
            item.id = index+1
            item.dp = element["Profile Image"]
            item.name = element["Name"]
            item.bet = parseInt(element["Bet"])
            this.playerList.push(item)
          }
          localStorage.setItem('player_list', JSON.stringify(this.playerList))
        }
      },
      err=>{
        console.log(err)
      })
    }
  }

  updateSelectedList(event){
    if(event.type == "add"){
      this.selectedPlayer.push(event.item)
    }
    if(event.type == "remove"){
      this.selectedPlayer = this.selectedPlayer.filter(i=> i.id != event.id)
    }
  }
}
