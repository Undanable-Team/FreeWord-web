import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Счета за свет", 2800, 5000, 4890, 8600),
  createData("Счета за газ", 237, 300, 370, 403),
  createData("Счета за горячую воду", 262, 300, 240, 190),
  createData("Счета за лифт", 305, 140, 120, 43),
  createData("Счета за мусор", 356, 160, 190, 309),
];

const CommunalPeople = () => {
  useEffect(() => {
    // Perform any necessary side effects here
  }, []); // Add dependencies if needed

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Сентябрь</TableCell>
              <TableCell align="right">Октябрь</TableCell>
              <TableCell align="right">Ноябрь</TableCell>
              <TableCell align="right">Декабрь</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquam
        reiciendis nihil sunt quam, minus alias, corporis explicabo impedit,
        quis iusto aut modi itaque voluptatem temporibus consectetur aperiam
        veritatis suscipit?
      </p>
    </div>
  );
};

export default CommunalPeople;
