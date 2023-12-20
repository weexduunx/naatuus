import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  hidePanelButton: {
    alignSelf: "flex-end",
  },
  
  monthPicker: {
    position: "absolute",
    width: "100%",
    height: 350,
    left: 0,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  monthsContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    flexWrap: "wrap",
    paddingHorizontal: 40,
    paddingBottom: 20,
  },

  monthButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
  },

  activeMonth: {
    borderRadius: 50,
    backgroundColor: "#000",
  },

  activeMonthName: {
    color: "#fff",
  },

  monthName: {
    fontFamily: "Helvetica-Regular",
    fontSize: 30,
    color: "#444",
  },

  "monthName:last-child": {
    marginRight: 0,
  },

});

export default styles;
