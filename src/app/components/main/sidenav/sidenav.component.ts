import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  showsubsidenav2:boolean=false;
  constructor() { }
  mainsidenavs=[
    {
      option:"Home",
      icon:"<span class='material-icons'>home</span>"
    },
    {
      option:"Explore",
      icon:"<span class='material-icons'>explore</span>"
    },
    {
      option:"Subscriptions",
      icon:"<span class='material-icons'> subscriptions</span>"
    },
  ]
  subsidenav1=[
    {
      option:"Library",
      icon:'<span class="material-icons">video_library </span>'
    },
    {
      option:"History",
      icon:'<span class="material-icons">history </span>'
    },
    {
      option:"Your Videos",
      icon:'<span class="material-icons">slideshow </span>'
    },
    {
      option:"Watch Later",
      icon:'<span class="material-icons">watch_later </span>'
    },
    {
      option:"Clips",
      icon:'<span class="material-icons">content_cut </span>'
    }
  ]
  subsidenav2=[
    {
      option:"Liked videos",
      icon:'<span class="material-icons">thumb_up </span>'
    },
    {
      option:"Study",
      icon:'<span class="material-icons">playlist_play </span>'
    },
    {
      option:"Computer science",
      icon:'<span class="material-icons">playlist_play </span>'
    },
    {
      option:"Technical",
      icon:'<span class="material-icons">playlist_play </span>'
    },
    {
      option:"Fashion",
      icon:'<span class="material-icons">playlist_play </span>'
    },
    {
      option:"Comedy",
      icon:'<span class="material-icons">playlist_play </span>'
    },
    {
      option:"Concept",
      icon:'<span class="material-icons">playlist_play </span>'
    },
  ]
  ngOnInit(): void {
  }

  subscriptions=[
    {
      option:"Gpmuthu Official",
      icon:"gpmuthu"
    },
    {
      option:"LiveOverflow",
      icon:"live"
    },
    {
      option:"Views Of Rithik",
      icon:"view"
    },
    {
      option:"Ashwin",
      icon:"ashwin"
    },
    {
      option:"Kevin Powell",
      icon:"kevi"
    },
    {
      option:"MrBeast",
      icon:"mrbe"
    },
    {
      option:"Chennai Super Kings",
      icon:"chen"
    },
    {
      option:"Ben Awad",
      icon:"bena"
    },
    {
      option:"Hussein Nasser",
      icon:"huss"
    },
    {
      option:"GP Express",
      icon:"gpex"
    },
    {
      option:"Irfan's view",
      icon:"irfa"
    },
    {
      option:"GP bro",
      icon:"gpbr"
    },
    {
      option:"Temple Monkeys",
      icon:"temp"
    },
    {
      option:"Parithabangal",
      icon:"pari"
    },
    {
      option:"Rowdy Baby Surya",
      icon:"rowd"
    },
    {
      option:"Google Cloud Tech",
      icon:"goog"
    },
    {
      option:"Unbox Therapy",
      icon:"unbo"
    },
    {
      option:"Code with tkssharma",
      icon:"code"
    },
    {
      option:"Karthik Surya",
      icon:"karth"
    },
    {
      option:"PewDiePie",
      icon:"pewd"
    },
    {
      option:"freeCodeCamp.org",
      icon:"free"
    },
    {
      option:"Okay Samurai",
      icon:"okay"
    },
    {
      option:"Izzo",
      icon:"izzo"
    },
    {
      option:"Data Engineering",
      icon:"data"
    },
    {
      option:"Makkal Needhi Maiam",
      icon:"makk"
    },

    {
      option:"Allan Preetham",
      icon:"alla"
    },
    {
      option:"Irfan Baqui",
      icon:"irfa"
    },
    {
      option:"Ginger Monkey Studios",
      icon:"ging"
    },

    {
      option:"Farah Hawa",
      icon:"fara"
    },
    {
      option:"Kathir Edits",
      icon:"kath"
    },
    {
      option:"Jon Calhoun",
      icon:"john"
    },
    {
      option:"Fully Filmy",
      icon:"full"
    },
  ]
  sub2toggle(){
    this.showsubsidenav2=!this.showsubsidenav2
  }
}



