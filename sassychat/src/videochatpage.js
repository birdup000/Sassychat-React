import React, { Component } from 'react';
import { Peer, Socket } from 'peer.js';
import { getUserMedia, MediaStream } from 'browser-media-stream';
import { createRoom, joinRoom } from 'socket.io';

class VideoChat extends Component {
  state = {
    roomId: null,
    users: [],
    currentUser: null,
    currentStream: null,
  };

  constructor() {
    super();
    this.peer = new Peer();
    this.socket = new Socket();
    this.socket.on('connect', () => {
      console.log('Connected to socket');
    });

    this.socket.on('createRoom', (data) => {
      console.log('Created room');
      this.roomId = data.roomId;
    });

    this.socket.on('joinRoom', (data) => {
      console.log('Joined room');
      this.users = data.users;
      this.currentUser = data.currentUser;
      this.currentStream = data.currentStream;
    });
  }

  startVideo() {
    const stream = getUserMedia({
      audio: true,
      video: true,
    });
    if (stream) {
      this.currentStream = stream;
    } else {
      console.log('Error getting media stream');
      return;
    }
  }

  render() {
    return (
      <div>
        {this.users.map(user => (
          <div key={user.id}>
            <video autoplay muted={true} src={user.stream.url} />
            <h2>{user.name}</h2>
          </div>
        ))}
        <div>
          <video autoplay muted={true} src={this.currentStream.url} />
          <h2>Yourself</h2>
        </div>
        <button onClick={() => this.startVideo()}>Start Video</button>
      </div>
    );
  }
}

export default VideoChat;
