import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PaidIcon from "@mui/icons-material/Paid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SummarizeAnnouncement = () => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/client/create-announcement");
  };
  return (
    <Box
      component="div"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Paper elevation={1} style={{ padding: "20px", width: "90%" }}>
        <Stack direction="row" spacing={0} display="flex" alignItems="center">
          <PaidIcon />
          <Typography variant="p" component="p" fontSize="16px" padding={1}>
            Payment
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          spacing={0}
          marginBottom={1}
          marginTop={2}
          paddingBottom={2}
        >
          <Typography variant="p" component="p" fontSize="16px">
            UGX 5,000
          </Typography>
          <Typography variant="p" component="p" fontSize="10px">
            Amount
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0} display="flex" alignItems="center">
          <PersonIcon />
          <Typography variant="p" component="p" fontSize="16px" padding={1}>
            Personal Details
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="column" spacing={0} marginBottom={1} marginTop={2}>
          <Typography variant="p" component="p" fontSize="16px">
            James
          </Typography>
          <Typography variant="p" component="p" fontSize="10px">
            Name
          </Typography>
        </Stack>
        <Stack direction="column" spacing={0} marginBottom={2}>
          <Typography variant="p" component="p" fontSize="16px">
            0771234567
          </Typography>
          <Typography variant="p" component="p" fontSize="10px">
            Phone Number
          </Typography>
        </Stack>
        <Stack direction="column" spacing={0} marginBottom={2}>
          <Typography variant="p" component="p" fontSize="16px">
            ojokne@gmail.com
          </Typography>
          <Typography variant="p" component="p" fontSize="10px">
            Email
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={0}
          marginBottom={2}
          paddingBottom={2}
          paddingTop={2}
        >
          <Stack direction="row" spacing={0} display="flex" alignItems="center">
            <EmailIcon />
            <Typography variant="p" component="p" fontSize="16px" padding={1}>
              Message
            </Typography>
          </Stack>
          <Divider />
          <Typography
            variant="p"
            component="p"
            fontSize="16px"
            textAlign="justify"
            marginTop={2}
            style={{ lineHeight: "1.5" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id commodi
            aspernatur provident quibusdam doloribus ipsa dignissimos quas
            optio! Autem nulla voluptates delectus iusto totam saepe ullam
            tempore incidunt eveniet, rem quaerat nostrum pariatur enim! Quaerat
            numquam suscipit cum alias nam ea possimus, quidem mollitia, quas
            itaque voluptatum inventore ducimus quam at non id autem iste
            ratione blanditiis! Quae similique pariatur voluptates veritatis
            mollitia illo et dolorum laudantium autem esse doloribus omnis
            distinctio quis, tenetur molestiae sit inventore optio repellat
            earum aperiam. Numquam cupiditate molestiae, eveniet eos et ipsam?
            Soluta expedita corporis voluptates dicta ex aliquid vero velit rem
            cumque consectetur?
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={0}
          marginBottom={2}
          paddingBottom={2}
        >
          <Typography variant="p" component="p" fontSize="16px">
            Unity FM 97.7
          </Typography>
          <Typography variant="p" component="p" fontSize="10px">
            Radio Station
          </Typography>
        </Stack>
        <Box component="div" display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
            onClick={(e) => handleEdit(e)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={() => console.log("Clicked")}
          >
            Proceed to Payment
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SummarizeAnnouncement;
