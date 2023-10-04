import express from "express";
import pacienteRoutes from "./routes/pacienteRoutes";
import secretariaRoutes from "./routes/secretariaRoutes";
import consultaRoutes from "./routes/consultaRoutes";
import agendaRoutes from "./routes/agendaRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/pacientes", pacienteRoutes);
app.use("/secretarias", secretariaRoutes);
app.use("/consultas", consultaRoutes);
app.use("/agendas", agendaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
