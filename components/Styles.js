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
    },
    header: {
        backgroundColor: colors["prussian-blue"],
        height: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        text: {
            color: colors.isabelline,
            marginTop:"5%",
            fontSize:"120%",
        },
    }
  },
};

export default styles;

