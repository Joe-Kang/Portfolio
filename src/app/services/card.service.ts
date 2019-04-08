import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url = 'https://deckofcardsapi.com/api/deck/';
  deck_id: string;
  card_Drawn: string;

  constructor(private http: HttpClient) {
  }

  newDeck() {
    const url = this.url.concat('new/');
    this.http.get(url).subscribe(data => {
      this.deck_id = data['deck_id'];
      console.log(`New Deck with id: ${this.deck_id}`);
    })
  }

  shuffleDeck() {
    const url = this.url.concat(this.deck_id, '/shuffle/');
    return this.http.get(url).subscribe(data => {
			console.log('​CardService -> shuffleDeck -> data', data)
    })
  }

  drawCard(count: string = "1") {
    const url = this.url.concat(this.deck_id, '/draw/?count=', count);
    return this.http.get(url).subscribe(data => {
      console.log("​CardService -> drawCard -> data", data)
      this.card_Drawn = data['cards'][0].code;
			console.log("​CardService -> drawCard -> this.card_Drawn", this.card_Drawn)

    })
  }

  addToHand(name: string, cards: string[]) {
    let url = this.url.concat(this.deck_id, "/pile/", name, "/add/?cards=");
    // for (let card of cards) {
    //   url = url.concat(card);
    // }
    url = url.concat(this.card_Drawn)
    this.http.get(url).subscribe(data => {
			console.log("​CardService -> addToHand -> data", data)
    })
  }

  showHand(name: string) {
    let url = this.url.concat(this.deck_id, "/pile/", name, "/list");

    this.http.get(url).subscribe(data => {
			console.log("​CardService -> showHand -> data", data)

    //   for (let card of data['piles']['name']['cards']) {
    //     console.log(card)
    //   }
    })
  }
}
