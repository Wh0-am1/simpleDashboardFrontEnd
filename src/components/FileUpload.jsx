import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import axios from "axios";
import { useField } from "formik";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export default function InputFileUpload(props) {
    const [field, meta, helpers] = useField(props);
    const [preview, setPreview] = useState("");
    const [previewImg, setPreviewImg] = useState("");
    return (
        <>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                Upload files
                <VisuallyHiddenInput
                    name={field.name}
                    type="file"
                    onChange={(event) => {
                        const files = Object.values(event.target.files);
                        const Blob = [];
                        if (files.length != 2) return;
                        files.forEach((value, index) => {
                            if (value.type.startsWith("image")) {
                                Blob.push(value);
                                setPreviewImg(URL.createObjectURL(value));
                            } else if (value.type.endsWith("pdf")) {
                                setPreview(URL.createObjectURL(value));
                                Blob.push(value);
                            }
                        });
                        helpers.setValue([...Blob]);
                    }}
                    multiple
                />
                {previewImg && (
                    <img src={previewImg} alt="img" width={"50px"} height={"50px"} />
                )}
                {preview && (
                    <iframe
                        src={preview}
                        width="80%"
                        height="100px"
                        title="PDF Preview"
                    />
                )}
            </Button>
        </>
    );
}
