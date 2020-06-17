import React, { Component } from "react";
import axios from "axios";
import url from "./../configs.json";
import Meme from "./meme";
import Button from "./button";
import Header from "./header";
class Main extends Component {
  state = {
    currentMeme: "https://i.imgflip.com/30b1gx.jpg",
    allMemes: [],
    didClick: false,
    positions: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(url.url);
    const { data: memes } = data;
    this.setState({ allMemes: memes.memes });
  }
  handleInputClick = () => {
    console.log("hhj");
    this.setState({ didClick: true });
  };
  getPositions = ({ clientX, clientY }) => {
    if (!this.state.didClick) return;
    console.log(clientX, clientY);
    const positions = [...this.state.positions];
    let position = {};
    position.top = `${clientX}px`;
    position.left = `${clientY - 300}px`;
    positions.push(position);
    this.setState({ positions, didClick: false });
  };
  drop = (e) => {
    e.preventDefault();
    const _mouseY = e.clientY;
    const _mouseX = e.clientX;
    console.log(_mouseX);
    const card_id = e.dataTransfer.getData("card_id");
    if (card_id) {
      const card = document.getElementById(card_id);
      card.style.display = "block";
      card.style.top = `${_mouseY}px`;
      card.style.left = `${_mouseX}px `;
    }
  };
  dragOver = (e) => {
    e.preventDefault();
  };
  handleMemeChange = () => {
    const { allMemes } = this.state;
    const length = this.state.allMemes.length;
    let number = Math.floor(Math.random() * length);
    this.setState({ currentMeme: allMemes[number].url });
  };
  getRandomId = () => {
    const id = `${Math.floor(Math.random() * Math.random() * 100)}`;
    return id;
  };
  render() {
    const { currentMeme: img, positions } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Button
          handleMemeChange={this.handleMemeChange}
          InputClicked={this.handleInputClick}
        />
        <Meme
          positions={positions}
          drop={this.drop}
          dragOver={this.dragOver}
          onClick={this.getPositions}
          RandomId={this.getRandomId()}
          img={img}
        />
      </React.Fragment>
    );
  }
}

export default Main;
