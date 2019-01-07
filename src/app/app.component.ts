import { Component } from '@angular/core';
import { Opening } from './models/opening.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openings: Opening[] = [];
  constructor() {
    var jsondata = [
     {
       "Name": "Smith-Morra Gambit",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 d4 cxd4 3 c3 ",
       "Games Found": 194,
       "Win": 42.8,
       "Draw": 21.6,
       "Loss": 35.6,
       "Difference": 7.2,
       "Percentage Popularity": 1.429940296
     },
     {
       "Name": "Alapin (2 ...Nf6)",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 c3 Nf6 3 e5",
       "Games Found": 138,
       "Win": 39.9,
       "Draw": 26.8,
       "Loss": 33.3,
       "Difference": 6.6,
       "Percentage Popularity": 1.017174025
     },
     {
       "Name": "Alapin (2 ...d5)",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 c3 d5 3 exd5",
       "Games Found": 169,
       "Win": 38.5,
       "Draw": 29.5,
       "Loss": 32,
       "Difference": 6.5,
       "Percentage Popularity": 1.24566964
     },
     {
       "Name": "Grand Prix Attack (2 ... Nc6)",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nc3 Nc6 3 f4",
       "Games Found": 146,
       "Win": 42.5,
       "Draw": 26.7,
       "Loss": 30.8,
       "Difference": 11.7,
       "Percentage Popularity": 1.076140635
     },
     {
       "Name": "Closed Sicilian (2 ... Nc6)",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nc3 Nc6 3 g3",
       "Games Found": 142,
       "Win": 38,
       "Draw": 28.9,
       "Loss": 33.1,
       "Difference": 4.9,
       "Percentage Popularity": 1.04665733
     },
     {
       "Name": "Open Sicilian, Hyper-Accelerated Dragon",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nf3 g6 3 d4",
       "Games Found": 169,
       "Win": 35.5,
       "Draw": 21.9,
       "Loss": 42.6,
       "Difference": -7.1,
       "Percentage Popularity": 1.24566964
     },
     {
       "Name": "Open Sicilian (2 ... e6)",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nf3 e6 3 d4",
       "Games Found": 1062,
       "Win": 39.2,
       "Draw": 22.9,
       "Loss": 37.9,
       "Difference": 1.3,
       "Percentage Popularity": 7.827817498
     },
     {
       "Name": "Open Sicilian (2 ... Nc6)",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nf3 Nc6 3 d4",
       "Games Found": 1039,
       "Win": 41,
       "Draw": 23.6,
       "Loss": 35.4,
       "Difference": 5.6,
       "Percentage Popularity": 7.658288494
     },
     {
       "Name": "Rossolimo",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nf3 Nc6 3 Bb5",
       "Games Found": 176,
       "Win": 38.6,
       "Draw": 25,
       "Loss": 36.4,
       "Difference": 2.2,
       "Percentage Popularity": 1.297265423
     },
     {
       "Name": "Open Sicilian, Moscow Variation",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nf3 d6 3 Bb5+",
       "Games Found": 134,
       "Win": 38.1,
       "Draw": 26.1,
       "Loss": 35.8,
       "Difference": 2.3,
       "Percentage Popularity": 0.9876907201
     },
     {
       "Name": "Delayed Alapin",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nf3 d6 3 c3",
       "Games Found": 102,
       "Win": 43.1,
       "Draw": 20.6,
       "Loss": 36.3,
       "Difference": 6.8,
       "Percentage Popularity": 0.7518242795
     },
     {
       "Name": "Open Sicilian (2 ... d6)",
       "Category": "Sicilian",
       "Moves": "1 e4 c5 2 Nf3 d6 3 d4",
       "Games Found": 1597,
       "Win": 42.1,
       "Draw": 20.4,
       "Loss": 37.6,
       "Difference": 4.5,
       "Percentage Popularity": 11.77120955
     },
     {
       "Name": "Modern Defense (3 Nf3)",
       "Category": "Modern/Pirc",
       "Moves": "1 e4 g6 2 d4 Bg7 3 Nf3",
       "Games Found": 116,
       "Win": 34.5,
       "Draw": 16.4,
       "Loss": 49.1,
       "Difference": -14.6,
       "Percentage Popularity": 0.8550158473
     },
     {
       "Name": "Modern Defense (3 Nc3)",
       "Category": "Modern/Pirc",
       "Moves": "1 e4 g6 2 d4 Bg7 3 Nc3",
       "Games Found": 112,
       "Win": 43.8,
       "Draw": 21.4,
       "Loss": 34.8,
       "Difference": 9,
       "Percentage Popularity": 0.8255325422
     },
     {
       "Name": "Pirc Defense",
       "Category": "Modern/Pirc",
       "Moves": "1 e4 d6 2 d4 Nf6 3 Nc3",
       "Games Found": 511,
       "Win": 39.9,
       "Draw": 25.6,
       "Loss": 34.4,
       "Difference": 5.5,
       "Percentage Popularity": 3.766492224
     },
     {
       "Name": "Scandinavian, Modern Variation",
       "Category": "Scandinavian",
       "Moves": "1 e4 d5 2 exd5 Nf6 3 d4",
       "Games Found": 128,
       "Win": 38.3,
       "Draw": 24.2,
       "Loss": 37.5,
       "Difference": 0.8,
       "Percentage Popularity": 0.9434657625
     },
     {
       "Name": "Scandinavian, Mieses-Kotroc Variation",
       "Category": "Scandinavian",
       "Moves": "1 e4 d5 2 exd5 Qxd5 3 Nc3",
       "Games Found": 573,
       "Win": 40.8,
       "Draw": 30,
       "Loss": 29.1,
       "Difference": 11.7,
       "Percentage Popularity": 4.223483452
     },
     {
       "Name": "Caro-Kann Two Knights",
       "Category": "Caro-Kann",
       "Moves": "1e4 c6 2 Nf3 d5 3 Nc3",
       "Games Found": 101,
       "Win": 36.6,
       "Draw": 25.7,
       "Loss": 37.6,
       "Difference": -1,
       "Percentage Popularity": 0.7444534532
     },
     {
       "Name": "Caro-Kann Main Line",
       "Category": "Caro-Kann",
       "Moves": "1e4 c6 2 d4 d5 3 Nc3",
       "Games Found": 396,
       "Win": 37.4,
       "Draw": 27.5,
       "Loss": 35.1,
       "Difference": 2.3,
       "Percentage Popularity": 2.918847203
     },
     {
       "Name": "Caro-Kann Exchange Variation",
       "Category": "Caro-Kann",
       "Moves": "1e4 c6 2 d4 d5 3 exd5",
       "Games Found": 420,
       "Win": 38.1,
       "Draw": 29,
       "Loss": 32.9,
       "Difference": 5.2,
       "Percentage Popularity": 3.095747033
     },
     {
       "Name": "Caro-Kann Advance Variation",
       "Category": "Caro-Kann",
       "Moves": "1e4 c6 2d4 d5 3 e5",
       "Games Found": 254,
       "Win": 37.4,
       "Draw": 28.3,
       "Loss": 34.3,
       "Difference": 3.1,
       "Percentage Popularity": 1.872189872
     },
     {
       "Name": "French Defense, Normal Variation",
       "Category": "French",
       "Moves": "1 e4 e6 2 d4 d5 3 Nc3",
       "Games Found": 614,
       "Win": 37.5,
       "Draw": 24.9,
       "Loss": 37.6,
       "Difference": -0.1,
       "Percentage Popularity": 4.52568733
     },
     {
       "Name": "French Defense, Exchange Variation",
       "Category": "French",
       "Moves": "1 e4 e6 2 d4 d5 3 exd5",
       "Games Found": 476,
       "Win": 30.7,
       "Draw": 30.9,
       "Loss": 38.4,
       "Difference": -7.7,
       "Percentage Popularity": 3.508513304
     },
     {
       "Name": "French Defense, Advance Variation",
       "Category": "French",
       "Moves": "1 e4 e6 2 d4 d5 3 e5",
       "Games Found": 474,
       "Win": 39.2,
       "Draw": 17.9,
       "Loss": 42.8,
       "Difference": -3.6,
       "Percentage Popularity": 3.493771652
     },
     {
       "Name": "French Defense, Tarrasch Variation",
       "Category": "French",
       "Moves": "1 e4 e6 2 d4 d5 3 Nd2",
       "Games Found": 457,
       "Win": 43.5,
       "Draw": 25.4,
       "Loss": 31.1,
       "Difference": 12.4,
       "Percentage Popularity": 3.368467605
     },
     {
       "Name": "Philidor Defense",
       "Category": "Open",
       "Moves": "1 e4 e5 2 Nf3 d6 3 d4",
       "Games Found": 146,
       "Win": 47.3,
       "Draw": 24.7,
       "Loss": 28.1,
       "Difference": 19.2,
       "Percentage Popularity": 1.076140635
     },
     {
       "Name": "Petroff Defense, 3 Knights Variation",
       "Category": "Open",
       "Moves": "1 e4 e5 2 Nf3 Nf6 3 Nc3",
       "Games Found": 161,
       "Win": 41.6,
       "Draw": 19.3,
       "Loss": 25.9,
       "Difference": 15.7,
       "Percentage Popularity": 1.186703029
     },
     {
       "Name": "Petroff Defense, Main Line",
       "Category": "Open",
       "Moves": "1 e4 e5 2 Nf3 Nf6 3 Nxe5",
       "Games Found": 197,
       "Win": 44.7,
       "Draw": 29.4,
       "Loss": 25.9,
       "Difference": 18.8,
       "Percentage Popularity": 1.452052775
     },
     {
       "Name": "Four Knights Game",
       "Category": "Open",
       "Moves": "1 e4 e5 2 Nf3 Nc6 3 Nc3",
       "Games Found": 228,
       "Win": 38.2,
       "Draw": 31.1,
       "Loss": 30.7,
       "Difference": 7.5,
       "Percentage Popularity": 1.680548389
     },
     {
       "Name": "Scotch Game",
       "Category": "Open",
       "Moves": "1 e4 e5 2 Nf3 Nc6 3 d4",
       "Games Found": 687,
       "Win": 46.7,
       "Draw": 22.2,
       "Loss": 31,
       "Difference": 15.7,
       "Percentage Popularity": 5.063757647
     },
     {
       "Name": "Italian Game",
       "Category": "Open",
       "Moves": "1 e4 e5 2 Nf3 Nc6 3 Bc4",
       "Games Found": 1149,
       "Win": 42.9,
       "Draw": 22,
       "Loss": 35.1,
       "Difference": 7.8,
       "Percentage Popularity": 8.469079384
     },
     {
       "Name": "Ruy Lopez",
       "Category": "Open",
       "Moves": "1 e4 e5 2 Nf3 Nc6 3 Bb5",
       "Games Found": 1299,
       "Win": 43.9,
       "Draw": 24.3,
       "Loss": 31.8,
       "Difference": 12.1,
       "Percentage Popularity": 9.574703324
     }
   ];
    for(var i in jsondata) {
      Opening opening = new Opening(jsondata[i]["Name"], jsondata[i]["Category"], jsondata[i]["Moves"], jsondata[i]["Games Found"],  jsondata[i]["Win"], jsondata[i]["Draw"], jsondata[i]["Loss"]);
      this.kegs.push(opening);
    };
  };
}
