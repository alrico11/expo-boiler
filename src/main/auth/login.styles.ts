import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height:49,
    fontWeight:400,
    fontSize:14,
    lineHeight:16.94,
    borderBlockStartColor:"#FFD366",
    borderRadius: 8,
    backgroundColor: "#FFF8E5",
    borderColor: "#FFD366",
    borderWidth: 1,
    marginBottom: 12,
    padding: 15,
  },
  forgotPass:{
    flex:1,
    textAlign:'right',    
    marginHorizontal:8,
    marginBottom:16,
  }
});
