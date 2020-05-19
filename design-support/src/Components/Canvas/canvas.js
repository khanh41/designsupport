import React, { Component } from 'react';

import './canvas.css';

class canvas extends Component {
  state = {
    startPoint: [0, 0],
    drawing: false,
    drawingStartPoint: [0, 0],
    canvas: null,
    context: null
  }

  componentDidMount() {
    let canvas = document.getElementById('canvas');
    canvas.width = 800;
    canvas.height = 450;
    const context = canvas.getContext('2d');

    const handleMouseDown = (event) => {
      this.setState({
        drawing: true
      })
      this.setState({
        startPoint: getPointOfCanvas(event)
      })
    }

    const handleMouseUp = () => {
      this.setState({
        drawing: false,
        startPoint: [0, 0]
      });
    }

    const handleMouseMove = (event) => {
      if (!this.state.drawing) return
      const nextPoint = getPointOfCanvas(event)
      this.state.context.beginPath()
      this.state.context.moveTo(...this.state.startPoint)
      this.state.context.lineTo(...nextPoint)
      this.state.context.stroke()
      this.state.context.closePath()
      // B sẽ trở thành điểm bắt đầu
      this.setState({
        startPoint: [...nextPoint]
      })
    }

    const getPointOfCanvas = (event) => {
      // xác định toạ độ của canvas
      const { x, y } = canvas.getBoundingClientRect()
      const { pageX, pageY } = event
      return [pageX - x, pageY - y]
    }

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    this.setState({
      canvas: canvas,
      context: context
    })
  }

  render() {
    const nextStepToDesign = () => {
      let img = new Image();
      img.src = this.state.canvas.toDataURL('../../static/draw.jpg');

      document.body.appendChild(img);
      this.props.history.push('/recognize');
    }
    return (
      <div className="container Canvas">
        <canvas id="canvas" className=" canvas-draw"></canvas>
        <button onClick={nextStepToDesign} className="btn-success">Click to Continue</button>
      </div>
    );
  }
}

export default canvas;