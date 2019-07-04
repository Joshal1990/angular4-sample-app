import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})

export class RadioComponent implements OnInit {
	constructor() {}
	
	songTitle: HTMLElement;
	fillBar: HTMLElement;
	audio: any;
	songs: any[];
	poster: any[];
	sngrNmeLst: any[];
	currentSong: number; 
	bgrndImg: any;
	sngrNme: any; 
	
    ngOnInit() {
        this.songs = ["http://southradios.net:9090/ilayarajaradio","Song2.mp3","Song3.mp3"];
		this.poster = ["illayaraja.png","Poster2.jpg","Poster3.jpg"];
		this.sngrNmeLst = ["illayaraja"];
		this.songTitle = document.getElementById('songTitle');
		this.currentSong = 0; // it point to the current song
		
		// creating an object for audio
		this.audio = new Audio();
        window.onload = this.playSong.bind(this);
    }

	playSong() {
		console.log(this.currentSong, this.audio);
		this.audio.src = this.songs[this.currentSong];  //set the source of 0th song
		this.bgrndImg = this.poster[this.currentSong]; // set background image
		this.songTitle = this.sngrNmeLst[this.currentSong];// set the name of the singer in play list.
		this.audio.play();
	}
	playOrPauseSong(){
		//if(this.audio.)
		this.audio;
		console.log('play method invoked!!!');
	}
}
