import { Badge, Box, IconButton, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useCallback, useEffect, useState } from "react";
import { Accept, FileRejection, useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
interface UploadFieProps {
  file: File | string | null;
  label?: string;
  maxSize?: number;
  isVideoDisplay?: boolean;
  isLoading?: boolean;
  acceptType?: Accept;
  errorMesssage?: string;
  onChange: (args: File) => void;
  onRemove: () => void;
  isDisable?: boolean;
}

const BoxDropZone = styled("div")(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  backgroundColor: grey[500],
  "&:hover": {
    opacity: 0.8,
  },
}));

function UploadFile({
  file,
  label = "Drop file here or Click to upload.",
  maxSize = 2097152,
  isVideoDisplay = false,
  isLoading = false,
  acceptType = { "image/*": [] },
  errorMesssage = "Error to upload file.",
  onChange,
  onRemove,
  isDisable,
}: UploadFieProps) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    setErrorMsg(errorMesssage);
  }, [errorMesssage]);

  const onDropAccepted = useCallback(
    (acceptedFile: File[], onChange: (args: File) => any) => {
      if (!Array.isArray(acceptedFile) || acceptedFile.length === 0) {
        return;
      }
      setErrorMsg(null);
      onChange(acceptedFile[0]);
    },
    []
  );

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    if (!Array.isArray(fileRejections) || fileRejections.length === 0) {
      return;
    }
    setErrorMsg(fileRejections[0].errors[0].code);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: (acceptedFiles) => onDropAccepted(acceptedFiles, onChange),
    onDropRejected: (fileRejections) => onDropRejected(fileRejections),
    multiple: false,
    maxSize,
    accept: acceptType,
    disabled: isLoading || isDisable,
  });
  return (
    <Box>
      <Box
        display="flex"
        alignItems="cebter"
        justifyContent="center"
        flexDirection="column"
        borderRadius="12px"
      >
        {!file ? (
          <Box>
            <BoxDropZone
              {...getRootProps()}
              sx={{
                ...(errorMsg && {
                  borderColor: "error.main",
                }),
              }}
            >
              <input {...getInputProps()} />
              <Box>
                <CloudUploadIcon />
                <Typography variant="body2">{label}</Typography>
              </Box>
            </BoxDropZone>
          </Box>
        ) : (
          <Badge
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              <IconButton
                onClick={() => {
                  onRemove();
                }}
              >
                <CancelIcon />
              </IconButton>
            }
          >
            {typeof file === "string" &&
              (isVideoDisplay ? (
                <video
                  width="330px"
                  autoPlay
                  loop
                  controls
                  controlsList="nodownload"
                  playsInline
                >
                  <source src={file} type="video/np4" />
                </video>
              ) : (
                <Box
                  component="img"
                  src={file}
                  borderRadius="12px"
                  sx={{ objectFit: "cover" }}
                />
              ))}
            {typeof file !== "string" &&
              (file.type.includes("video") ? (
                <video
                  width="330px"
                  autoPlay
                  loop
                  controls
                  controlsList="nodownload"
                  playsInline
                >
                  <source src={URL.createObjectURL(file)} type="video/np4" />
                </video>
              ) : (
                <Box
                  component="img"
                  src={URL.createObjectURL(file)}
                  borderRadius="12px"
                  sx={{ objectFit: "cover" }}
                />
              ))}
          </Badge>
        )}
        {errorMsg && (
          <Typography variant="caption" color="error.main">
            {errorMsg}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default UploadFile;
