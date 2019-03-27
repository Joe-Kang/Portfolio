import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface Experience {
  company: string;
  position: string;
  timeframe: string;
}

export interface Education {
  link: string;
  image: string;
  school: string;
  timeframe: string;
}

export interface Favorite {
  link: string;
  tooltip: string;
  icon: string;
}

export interface Basic {
  tooltip: string;
  icon: string;
  text: string;
}

const EXPERIENCE_DATA: Experience[] = [
  { company: "Hyland", position: "Developer 1", timeframe: "10/18 - Present" },
  { company: "Zero to Internship", position: "Instructor", timeframe: "06/18-07/18" },
  { company: "Zion Academy", position: "Instructor", timeframe: "01/18-10/18" },
  { company: "CIG", position: "Quality Assurance Engineer", timeframe: "02/16-07/16" },
]

const EDUCATION_DATA: Education[] = [
  { link: "https://www.codingdojo.com/",image: "assets/img/coding_dojo.png", school: "Coding Dojo", timeframe: "10/17-02/18"},
  { link: "https://www.pacific.edu/", image: "assets/img/uop.svg", school: "University of the Pacific", timeframe: "09/13-06/17"},
  { link: "https://leland.sjusd.org/", image: "assets/img/leland.png", school: "Leland High School", timeframe: "08/09-05/13"},
]

const FAVORITE_DATA: Favorite[] = [
  { link: "https://www.rottentomatoes.com/m/prestige/", tooltip: "The Prestige", icon: "theaters", },
  { link: "https://na.leagueoflegends.com/en/game-info/", tooltip: "League of Legends", icon: "videogame_asset" },
  { link: "https://www.youtube.com/watch?v=Gs069dndIYk", tooltip: "September", icon: "music_note" },
  { link: "https://www.peets.com/menu/handcrafted-cold-brew/black-tie", tooltip: "Black Tie", icon: "local_cafe" },
  { link: "http://www.roundtablepizza.com/rtp/", tooltip: "Round Table", icon: "local_pizza" },
  { link: "http://www.in-n-out.com/", tooltip: "In-N-Out", icon: "restaurant_menu" }
]

const BASIC_DATA: Basic[] = [
  { tooltip: "Birthday", icon: "cake", text: "October 26, 1994" },
  { tooltip: "Current Location", icon: "person_pin_circle", text: "Cleveland, Ohio" },
  { tooltip: "Phone Number", icon: "contact_phone", text: "(408)623-3675" },
  { tooltip: "Email", icon: "contact_mail", text: "jihunjkang@gmail.com" }
]

@Component({
  selector: 'app-profile',
  animations: [
    trigger('slideUp', [
      state('slide', style({
        opacity: 1
      })),
      state('disappear', style({
        opacity: 0,
        bottom: '-50px'
      })),
      transition('slide => disappear', [
        animate('0.25s')
      ]),
      transition('disappear => slide', [
        animate('0.25s')
      ])
    ]),
    trigger('slideRight', [
      state('slide', style({
        opacity: 1
      })),
      state('disappear', style({
        opacity: 0,
        left: '-50px'
      })),
      transition('slide => disappear', [
        animate('0.25s')
      ]),
      transition('disappear => slide', [
        animate('0.25s')
      ]),
    ]),
    trigger('slideLeft', [
      state('slide', style({
        opacity: 1
      })),
      state('disappear', style({
        opacity: 0,
        right: '-50px'
      })),
      transition('slide => disappear', [
        animate('0.25s')
      ]),
      transition('disappear => slide', [
        animate('0.25s')
      ]),
    ]),
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isVisible = false;
  experienceCol: string[] = ['Company', 'Position', 'Timeframe'];
  experienceDataSource = EXPERIENCE_DATA;
  educationDataSource = EDUCATION_DATA;
  favoriteDataSource = FAVORITE_DATA;
  basicDataSource = BASIC_DATA;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.isVisible = true);
  }

}
