class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    const newSong = new Node(song);

    if (this.length === 0) {
      this.top = newSong;
      this.bottom = newSong;
    } else {
      newSong.next = this.top;
      this.top = newSong;
    }

    this.length++;
    return this;
  }

  playSong() {
    if (this.length === 0) return null;

    const deletedSong = this.top.value;

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    console.log(deletedSong);
    return this;
  }

  getPlaylist() {
    let currentNode = this.top;
    const array = [];

    while (currentNode) {
      array.push(currentNode.value);

      currentNode = currentNode.next;
    }

    console.log(array);
    return array;
  }
}

// TESTS

const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist);

playlist.playSong();
playlist.getPlaylist();

playlist.playSong();
playlist.playSong();

playlist.getPlaylist();
