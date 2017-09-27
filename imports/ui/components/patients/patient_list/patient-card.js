// import React from "react"
// import PropTypes from "prop-types"
// import Grid from "material-ui/Grid"
// import Card, { CardHeader, CardContent } from "material-ui/Card"
// import Typography from "material-ui/Typography"
// import Checkbox from "material-ui/Checkbox"
// import { Link } from "react-router-dom"
// import Button from "material-ui/Button"
// import { withStyles } from "material-ui/styles"

// const styles = theme => ({
//   root: {
//     display: "flex",
//     flex: "1 0 0"
//   },
//   details: {
//     flexDirection: "column"
//   },
//   content: {
//     flex: "1 0 auto"
//   }
// })

// const PatientCard = ({ patient, classes, ...props }) => {
//   return (
//     <Card key={patient._id}>
//       <Grid container direction="row" justify="space-between" align="center">
//         <Grid item xs={12} className={classes.root}>
//           <Checkbox />
//           <Grid className={classes.details}>
//             <Link to={props.url}>
//               <CardContent className={classes.content}>
//                 <Typography type="headline">
//                   {`${patient.first} ${patient.last}`}
//                 </Typography>
//                 <Typography type="subheading">
//                   {`Condition: ${patient.condition}
//           Diagnosis: ${patient.diagnosis}`}
//                 </Typography>
//               </CardContent>
//             </Link>
//           </Grid>
//         </Grid>

//         <div>
//           <Button color="primary" onClick={e => onClick(e, patient._id)}>
//             Remove
//           </Button>
//         </div>
//       </Grid>
//     </Card>
//   )
// }

// const onClick = (e, patientId) => {
//   e.stopPropagation()
//   e.preventDefault()
//   const userId = Meteor.userId()
//   Meteor.call("removePatientFromUser", patientId, userId)
// }

// PatientCard.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(PatientCard)

export default () => {
  return <div>Patient card / Table element here </div>
}
