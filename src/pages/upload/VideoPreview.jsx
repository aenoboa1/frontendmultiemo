import {useRef, useState} from "react";
import {CloseOutlined, SmileFilled, VideoCameraFilled} from "@ant-design/icons";
import {Button, Grid, Snackbar} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {Alert} from "@mui/lab";

export const VideoPreview = () => {
    const [videoPreview, setVideoPreview] = useState(null);
    const [Loaded, setLoaded] = useState();
    const [loading, setLoading] = useState(false);
    const filePicekerRef = useRef(null);

    function handleClick() {
        setLoading(true);
    }


    function previewFile(e) {
        // Reading New File (open file Picker Box)
        const reader = new FileReader();
        // Gettting Selected File (user can select multiple but we are choosing only one)
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
        // As the File loaded then set the stage as per the file type
        reader.onload = (readerEvent) => {
            if (selectedFile.type.includes("video")) {
                setVideoPreview(readerEvent.target.result);
            } else {
                setLoaded(false);
            }

        };
    }

    function clearFiles() {
        setVideoPreview(null);
    }

    return (
        <div>

            <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
            >
                <input ref={filePicekerRef} accept="video/*" onChange={previewFile} type="file" hidden/>
                <Button variant="contained" shape="rounded" aria-label="Subir Video"
                        onClick={() => filePicekerRef.current.click()}>
                    <VideoCameraFilled/> Cargar Video
                </Button>
                {(videoPreview) && (
                    <Button className="btn" onClick={clearFiles}>
                        <CloseOutlined/>
                    </Button>
                )}
            </Grid>
            <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
            >
                <div className="preview">
                    {videoPreview != null && <video width="600" controls src={videoPreview}></video>}
                </div>
                {Loaded &&
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                            This is a success message!
                        </Alert>
                    </Snackbar>

                }
            </Grid>

            <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
            >
                <LoadingButton loading={loading} variant="contained" loadingPosition="start"
                               startIcon={<SmileFilled/>} onClick={() => setLoading(true)}>
                    Procesar Emociones
                </LoadingButton>
            </Grid>
        </div>
    );
}