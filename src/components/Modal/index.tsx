import { Button, FormHelperText, Input, NativeSelect } from "@mui/material";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import { FilledInput } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { ReactNode, ChangeEvent, FormEvent } from "react";
import style from "./style.module.sass";
import Image from "next/image";
import { sendReport, uploadFile } from "@/api";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [category, setCategory] = React.useState<string>("");
  const [reports, setReports] = React.useState<string>("");
  const [file, setFile] = React.useState<File | null>(null);
  const [description, setDescription] = React.useState<string>("");

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
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      // Handle error condition, file is required
      return;
    }

    const form = new FormData();
    form.append("files", file);

    uploadFile(form).then((resp: any) =>
      sendReport({
        category,
        reports,
        description,
        media: resp[0],
      })
    );
  };

  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.title}>{children}</h2>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Куда жалобу отправить
            </InputLabel>
            <NativeSelect
              defaultValue={30}
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
            <FormHelperText id="my-helper-text">Пример:[dasd]</FormHelperText>
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
              width={400}
              alt="random"
              height={150}
            />
          )}
          <FilledInput
            fullWidth
            type="file"
            placeholder="Доказательства 'Видео , Фото' фиксация"
            onChange={handleFileChange}
          />
          <Button className={style.btn} type="submit">
            Отправить Жалобу
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
