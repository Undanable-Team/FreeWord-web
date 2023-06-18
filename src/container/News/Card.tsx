import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

interface DataItem {
  title: string;
  description: string;
  date: string;
  img: {
    url: string;
    alt: string;
  };
}

interface MultiActionAreaCardProps {
  url: string;
  alt: string;
  title: string;
  description: string;
  date: string;
}

const MultiActionAreaCard: React.FC<MultiActionAreaCardProps> = ({
  url,
  alt,
  title,
  description,
  date,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ width: 450 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" height="140" image={url} alt={alt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            Подробнее
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography>{description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MultiActionAreaCard;
