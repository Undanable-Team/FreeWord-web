import React, { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilledInput,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import style from "./style.module.sass";
import Image from "next/image";
import { sendReport } from "@/api";

interface ModalProps {
  children: ReactNode | string;
  onClose: () => void;
  open: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, open }) => {
  const [category, setCategory] = useState("");
  const [reports, setReports] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const handleReportsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReports(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sendReports = () => {
      sendReport({
        category,
        reports,
        description,
        media: resp[0],
      });
    };

    if (!file) {
      // Handle error condition, file is required
      return;
    }

    const form = new FormData();
    form.append("files", file);

    // Call the necessary API functions here
    // uploadFile(form).then((resp: any) =>
    //   sendReport({
    //     category,
    //     reports,
    //     description,
    //     media: resp[0],
    //   })
    // );
  };

  return (
    <Dialog onClose={onClose} maxWidth="xs" fullWidth open={open}>
      <DialogTitle style={{ textAlign: "center" }}>{children}</DialogTitle>
      <DialogContent>
        <form className={style.form} onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Куда жалобу отправить
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "reports",
                id: "reports",
              }}
              value={category}
              onChange={handleChange}
            >
              <option>Гос.служба</option>
              <option>ГКНБ</option>
              <option>МВД</option>
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="Custom-input">Тема Жалобы</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={description}
              onChange={handleSubjectChange}
            />
            <FormHelperText id="my-helper-text">
              Пример:[Мусор на улице]
            </FormHelperText>
          </FormControl>
          <div className={style.Reports}>
            Описания Жалобы
            <textarea
              className={style.textarea}
              value={reports}
              onChange={handleReportsChange}
            />
          </div>
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              width={350}
              height={150}
              alt="random"
              className={style.image}
            />
          )}
          <FilledInput
            fullWidth
            type="file"
            placeholder="Доказательства 'Видео , Фото' фиксация"
            onChange={handleFileChange}
          />
          <DialogActions>
            <Button onClick={onClose}>Отмена</Button>
            <Button className={style.btn} onClick={setReports} type="submit">
              Отправить Жалобу
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
