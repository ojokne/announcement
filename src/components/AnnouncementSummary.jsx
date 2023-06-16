import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const AnnouncementSummary = ({ announcement }) => {
  const navigate = useNavigate();
  const handleAnnouncementClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    navigate(`/radio/announcement/${announcement.id}`, {
      state: announcement,
    });
  };
  return (
    <Box
      component="div"
      onClick={(e) => handleAnnouncementClick(e, announcement)}
    >
      <Paper
        sx={{
          p: 2,
          m: 2,
          transition: "transform 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(0.98)",
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="div">
          <Typography variant="body1" color="secondary" sx={{ fontSize: 18 }}>
            {announcement.name}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" color="secondary">
              UGX {announcement.amount.toLocaleString("en-US")}
            </Typography>
            <CircleIcon sx={{ fontSize: 4, alignSelf: "center" }} />
            <Typography variant="body2" color="secondary">
              {announcement.numberOfTimes}{" "}
              {announcement.numberOfTimes > 1 ? "times" : "time"}
            </Typography>
            <CircleIcon sx={{ fontSize: 4, alignSelf: "center" }} />
            <Typography variant="body2" color="secondary">
              {announcement.date}
            </Typography>
          </Stack>
        </Box>
        <Box component="div">
          <ChevronRightIcon sx={{ fontSize: 28, alignSelf: "center" }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default AnnouncementSummary;
