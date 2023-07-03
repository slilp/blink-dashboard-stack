import { Badge, Box, IconButton, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useCallback, useEffect, useState } from "react";
import { Accept, FileRejection, useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
interface UploadFieProps {
  file: File | string | null;
  label?: string;
  uploadLabel?: string;
  maxSize?: number;
  isVideoDisplay?: boolean;
  isLoading?: boolean;
  acceptType?: Accept;
  errorMesssage?: string;
  onChange: (args: File) => void;
  onRemove: () => void;
  isDisable?: boolean;
}

const BoxDropZone = styled(Box)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  height: "150px",
  width: "150px",
  justifyContent: "center",
  borderRadius: "12px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    opacity: 0.8,
  },
}));

function UploadFile({
  file,
  label = "Drop file here or Click to upload.",
  uploadLabel = "Upload here",
  maxSize = 2097152,
  isVideoDisplay = false,
  isLoading = false,
  acceptType = { "image/*": [] },
  errorMesssage,
  onChange,
  onRemove,
  isDisable,
}: UploadFieProps) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    if (errorMesssage) setErrorMsg(errorMesssage);
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
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ gap: "4px" }}
                color="#000"
              >
                <CloudUploadIcon />
                <Typography variant="body2" textAlign="center">
                  {uploadLabel}
                </Typography>
              </Box>
            </BoxDropZone>
            <br />
            <Typography variant="body2" textAlign="center">
              {label}
            </Typography>
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
                  height="200px"
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
                  height="200px"
                  sx={{ objectFit: "cover" }}
                />
              ))}
            {typeof file !== "string" &&
              (file.type.includes("video") ? (
                <video
                  height="200px"
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
                  height="200px"
                  sx={{ objectFit: "cover" }}
                />
              ))}
          </Badge>
        )}
        {errorMsg && (
          <Typography variant="caption" textAlign="center" color="error.main">
            {errorMsg}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default UploadFile;
