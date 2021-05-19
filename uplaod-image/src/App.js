import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    uploadImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecsaV_4BOI84CKqIWnBNOCngE4FQiDF7HlCZRqlylAQQJN3_XVOZwgsN0koqeYIdSmfQ&usqp=CAU",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ uploadImage: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { uploadImage } = this.state;
    return (
      <div className="page">
        <div className="content">
          <h1 className="heading">Upload Your Image</h1>
          <div className="img-holder">
            <img src={uploadImage} alt="" id="img" className="img" />
          </div>
        </div>
        <input
          type="file"
          name="image-upload"
          id="input"
          accept="image/*"
          onChange={this.imageHandler}
        />
        <div className="label">
          <label htmlFor="input" className="image-upload">
            <i className="material-icons">add_photo_alternate</i>
            Choose your photo
          </label>
        </div>
      </div>
    );
  }
}

export default App;
