export const colors = {
  "prussian-blue": "#12263a",
  "maximum-blue-green": "#06bcc1",
  "opal": "#c5d8d1",
  "isabelline": "#f4edea",
  "light-orange": "#f4d1ae",
};

const styles = {
  home: {
    page: {
        backgroundColor: colors["maximum-blue-green"],
        width: "100%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-between",
        alignItems:"center"
    },
    header: {
        backgroundColor: colors.isabelline,
        height: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row",
        text: {
            color: colors["prussian-blue"],
            marginTop:"5%",
            fontSize: 25,
        },
    },
    body:{
        
    }
  },
  window:{
        width: "60%",
        aspectRatio:1,
        backgroundColor: colors["prussian-blue"],
        borderRadius:5,
        marginTop: 20,
        valueText:{
            color: colors.isabelline,
            fontSize:100,
        },
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        arrowContainer:{
          width: "60%",
        },
        diffText: {
          color: colors.isabelline,
        }
  }
};

export default styles;

