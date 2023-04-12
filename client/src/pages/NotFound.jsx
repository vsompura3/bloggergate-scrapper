import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="isolate flex items-center justify-center">
        <h2 className="py-32 text-3xl font-bold sm:py-40 md:py-48 md:text-5xl lg:py-64 lg:text-7xl">
          404 Not Found
        </h2>
      </div>
    );
  }
}

export default NotFound;
