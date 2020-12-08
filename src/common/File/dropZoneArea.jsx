import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.props.setData(null, files)
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <DropzoneArea
        filesLimit={1}
        acceptedFiles={['image/*']}
        onChange={this.handleChange.bind(this)}
        />
    )
  }
}

export default DropzoneAreaExample;