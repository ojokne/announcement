import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
  Font,
} from "@react-pdf/renderer";

import logo from "../../assets/kakebe-logo.png";
import QuickSand from "../../assets/fonts/Quicksand-Regular.ttf";

// Register font
Font.register({
  family: "Quicksand",
  src: QuickSand,
});

const styles = StyleSheet.create({
  body: {
    padding: 50,
    fontSize: 10,
    fontFamily: "Quicksand",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: 1,
    borderColor: "#a1a1a1",
    margin: 10,
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  logo: {
    width: 30,
    borderRadius: "50%",
    marginRight: 4,
  },

  title: {
    color: "#f54254",
    fontSize: 18,
  },
  headerLead: {
    color: "#424242",
    fontSize: 8,
  },

  container: {
    marginLeft: 15,
    marginTop: 10,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 8,
  },
  footerText: {
    fontSize: 8,
  },
});

// Create Document Component
const AnnouncementPDF = ({ announcement }) => {
  return (
    <Document title="Announcement " author="EchocastUg" subject="Announcement">
      <Page style={styles.body}>
        {/* header of the page */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Image src={logo} style={styles.logo} />
            <Text style={styles.title}>Kakebe Technologies</Text>
          </View>
          <View style={styles.flexContainer}>
            <Text style={styles.headerLead}>P.O Box 330021, Lira City</Text>
            <Text style={styles.headerLead}>Plot 43, Obote Avenue</Text>
            <Text style={styles.headerLead}>
              service@kakebe.com | +256 777676206
            </Text>
          </View>
        </View>

        {/* person's details */}
        <View style={styles.container}>
          <Text style={{ paddingBottom: 5 }}>{announcement.clientName}</Text>
          <Text>{announcement.clientContact}</Text>
        </View>

        {/* announcement */}
        <View style={styles.container}>
          <Text>{announcement.message}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            This document was generated online from{" "}
            <Link src="echocastug.com">echocastug.com</Link>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default AnnouncementPDF;
