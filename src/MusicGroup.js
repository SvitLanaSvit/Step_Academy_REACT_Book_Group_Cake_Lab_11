import React from 'react';

class Group extends React.Component {
    title = 'Scorpions';
    photoUrl = 'https://media1.jpc.de/image/w600/front/0/4050538159431.jpg';
    bandMembers = ['Klaus Meine - Lead vocals', 'Rudolf Schenker - Rhythm guitar, backing vocals', 'Matthias Jabs - Lead guitar, backing vocals', 'Pawel Maciwoda - Bass guitar, backing vocals', 'Mikkey Dee - Drums'];
    albums = ['Fly to the Rainbow (1974)', 'In Trance (1975)', 'Virgin Killer (1976)', 'Taken by Force (1977)', 'Animal Magnetism (1980)', 'Blackout (1982)', 'Love at First Sting (1984)', 'Savage Amusement (1988)', 'Crazy World (1990)', 'Face the Heat (1993)', 'Unbreakable (2004)', 'Sting in the Tail (2010)'];
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <img src={this.photoUrl} alt={this.title} className='photoGroup'/>
        <h2>Band Members:</h2>
        <ul>
          {this.bandMembers.map(member => (
            <li key={member}>{member}</li>
          ))}
        </ul>
        <h2>Albums:</h2>
        <ul>
          {this.albums.map(album => (
            <li key={album}>{album}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Group;