import React from 'react';

import "../scss/uploadPicture.scss";

function UploadPicture() {
    return (
        <div className="upload-picture">
            <div className="upload__info">
                <div className="picture-info">
                <h1>Adrian Stefan</h1>
                <p>Rm. Valcea, Romania</p>
                <p>4:32PM (GMT-4)</p>
                </div>
                <img className="upload__img" width={140} height={140} src="/img/adrian_stefan.png" alt="uploaded picture" />
            </div>
            <hr className="upload-hr"></hr>
            <div className="upload-buttons">
                <button className="btn btn__upload">UPLOAD PICTURE</button>
                <button className="btn btn__remove">REMOVE PICTURE</button>
            </div>
        </div>
    )
}

export default UploadPicture;
