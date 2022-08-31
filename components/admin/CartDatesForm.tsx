import { Container, Grid, Input } from "@nextui-org/react";
import { useState } from "react"

export default function CartDatesForm() {
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [openDate, setOpenDate] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [openDateError, setOpenDateError] = useState("");
  const [closeDateError, setCloseDateError] = useState("");

  const today = formatDate(new Date());

  const getMinCloseDate = () => {
    if (!openDate) {
      return "";
    };
    let minDate = new Date(openDate);
    minDate.setDate(minDate.getDate() + 1);
    return formatDate(minDate);
  };

  const submitDates = async () => {
    try {
      await fetch("/api/admin/cart/dates", {
        method: "POST",
        body: JSON.stringify({ openDate, closeDate }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const validate = () => {
    let isValid = true;
    if (!openDate) {
      setOpenDateError("Debe ingresar una fecha de apertura");
      isValid = false;
    }
    if (!closeDate) {
      setCloseDateError("Debe ingresar una fecha de cierre");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (!isValid) {
      return;
    }
    submitDates();
  };

  return (
      <Container>
          <Grid.Container gap={2}>
            <Grid>
              <Input
                type="date"
                label="Fecha de apertura"
                min={today}
                value={openDate}
                onChange={(e) => setOpenDate(e.target.value)}
                helperColor="error"
                helperText={openDateError}
              />
            </Grid>
            <Grid>
              <Input
                type="date"
                label="Fecha de cierre"
                disabled={openDate === ""}
                min={getMinCloseDate()}
                value={closeDate}
                onChange={(e) => setCloseDate(e.target.value)}
                helperColor="error"
                helperText={closeDateError}
              />
            </Grid>
          </Grid.Container>
            <button onClick={handleSubmit}>Confirmar</button>
      </Container>
  );
};