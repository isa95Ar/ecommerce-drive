import { Button, Container, Grid, Input, Loading, Text } from "@nextui-org/react";
import { FC, useState } from "react"

type status = {
  status: string,
  openDate: string,
  closeDate: string
}

type props = {
  setEditing(status: boolean): void
  setCurrentStatus(status: status): void;
}

const CartDatesForm:FC<props> = ({setEditing, setCurrentStatus}) => {
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [openDate, setOpenDate] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [openDateError, setOpenDateError] = useState("");
  const [closeDateError, setCloseDateError] = useState("");
  const [fetching, setFetching] = useState({error: null, loading: false, done: false});

  const today = formatDate(new Date());

  const handleOpenDateChange = (e) => {
    const newDate = e.target.value;
    setOpenDateError("");
    setCloseDateError("");
    setOpenDate(newDate);
    let newCloseDate = new Date(newDate);
    if (newDate) {
      newCloseDate.setDate(newCloseDate.getDate() + 1);
      setCloseDate(formatDate(newCloseDate));
    }
  };

  const handleCloseDateChange = (e) => {
    setCloseDateError("");
    setCloseDate(e.target.value);
  };

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
      setFetching({error: null, done: false, loading: true});

      const response = await fetch("/api/admin/cart/dates", {
        method: "POST",
        body: JSON.stringify({ openDate, closeDate }),
      });
      const newStatus = await response.json();

      setCurrentStatus(newStatus);

      setFetching({error: null, loading: false, done: true});
      setEditing(false);
    } catch (e) {
      setFetching({
        error: "Ocurrió un error enviando las fechas",
        loading: false,
        done: true
      });
      console.log(e);
    }
  };

  const validate = () => {
    setOpenDateError("");
    setCloseDateError("");

    let isValid = true;
    if (!openDate) {
      setOpenDateError("Debe ingresar una fecha de apertura");
      isValid = false;
    }
    if (!closeDate) {
      setCloseDateError("Debe ingresar una fecha de cierre");
      isValid = false;
    }

    if ((openDate && closeDate) && (new Date(closeDate) <= new Date(openDate))) {
      setCloseDateError("La fecha de cierre debe ser mayor que la de apertura");
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
          <Grid.Container gap={3} justify="center">
            <Grid>
              <Input
                type="date"
                label="Nueva fecha de apertura"
                min={today}
                value={openDate}
                onChange={handleOpenDateChange}
              />
              <Text color="error">{openDateError}</Text>
            </Grid>
            <Grid>
              <Input
                type="date"
                label="Nueva fecha de cierre"
                disabled={openDate === ""}
                min={getMinCloseDate()}
                value={closeDate}
                onChange={handleCloseDateChange}
              />
              <Text color="error">{closeDateError}</Text>
            </Grid>
          </Grid.Container>
          <Button
            onClick={() => setEditing(false)}
            className={fetching.loading ? "button-total-disabled" : "button-cancel"}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            className={fetching.loading ? "button-total-disabled" : "button-total"}
          >
            Confirmar
          </Button>
          <Grid.Container gap={2} direction="column" justify="center">
            {fetching.loading && (
              <Loading color="warning"></Loading>
            )}
            {(fetching.done && fetching.error) && (
                <Text>{fetching.error}</Text>
              )
            }
          </Grid.Container>
      </Container>
  );
};

export default CartDatesForm;