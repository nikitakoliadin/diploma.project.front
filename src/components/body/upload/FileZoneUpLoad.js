import React from 'react';
import Dropzone from 'react-dropzone'
import classes from './FileZoneUpLoad.module.css'
import ButtonSendRequest from "../buttons/SendHttp";

class FileZoneUpLoad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
            files: []
        }
    }
    onDropHandler(files) {
        let file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let base64Data = reader.result;
            let dataToSend = base64Data.slice(base64Data.indexOf(",") + 1);
            this.setState({
                selectedFiles: dataToSend,
                files: files
            });
            // console.log(this.state.selectedFiles);
            console.log();
        };
    }

    render() {
        const files = this.state.files.map(file => (
            <p className={classes.files} key={file.name}>
                {file.name} - {file.size} bytes
            </p>
        ));
        return (
            <div>
                <Dropzone onDrop={acceptedFiles => this.onDropHandler(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div className={classes.content} {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p >Drop some files here, or click to select files</p>
                                <ul>{files}</ul>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <ButtonSendRequest reqData={this.state.selectedFiles}/>
            </div>
        )
    }
}

export default FileZoneUpLoad;