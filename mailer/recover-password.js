// const nodemailer = require("nodemailer");

// const smtpTransport = require("nodemailer-smtp-transport");

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.panteramining.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@panteramining.com",
//       pass: "panteramining1@1",
//     },
//   }),
// );

// let create_mail_options = (userInfo) => {
//   return (mailOptions = {
//     from: "support@panteramining.com",
//     // from:"michelleannschlloser@outlook.com",
//     to: userInfo.reciever_mail,
//     subject: `PASSWORD RECOVERY REQUEST`,
//     //   text:"just wanna know if this works",
//     html: `
 

//  <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link
//   href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
//   rel="stylesheet"
// />
// <main    style="
//     font-family: 'Nunito', sans-serif;
//     font-family: 'Roboto', sans-serif;
//     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
//     width: 100%;
//     background-size: cover;
//   "
// >
 

 
//     <div class="head-txt">
// <h1 style="text-align: center; font-size: 16px; color: #825ee4">
//         PANTERAMINING.COM
//       </h1>
//             <h3 style="font-size: 18px; text-align: center;">ACCOUNT RECOVERY</h3>
//     </div>

//     <p >
//       Dear ${userInfo.first_name} ${userInfo.last_name},<br> your request to reset your account password has been recieved.<br>
 
//  <br>     <a
//         href="${userInfo.reset_link}"
//         style="
//           color: #fff;
//           background-color: #825ee4;
//           border-color: #825ee4;
//           text-decoration: none;
//           padding: 5px;
//           border-radius: 2px;
//         "
//         >RESET PASSWORD</a
//       >
//        <br><br>
//             or follow the link below to reset your password if the button does not work
//     </p>

//      <p >
//      ${userInfo.reset_link}
//      </p>

//     <p >
//       For your protection, if you did not request a new password  do not take any action regarding to this email
//     </p>
// <br>
//  <h1
//       style="
//         font-size: 18px;
//         text-align: center;
//         background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
//         color: #fff;
//       "
//     >
//       PANTERAMINING.COM
//     </h1>
//     <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
//       Disclaimer: this message was automatically generated via pantera mining
//       secured channel,please do not reply to this message all correspondence
//       should be addressed to panteramining.com or your relationship officer
//     </p>
//   </div>
 
// </main>
//  `,
//   });
// };
// module.exports = { create_mail_options, transporter };
// // transporter.sendMail(mailOptions, (err, info) => {
// //   if (err)
// //     return res
// //       .status(400)
// //       .json({ error: true, errMessage: `an error occured: ${err.message}` });
// //   // console.log(info)
// //   return res.status(200).json({ error: false, message: "message sent" });
// //   // console.log("message sent",info)
// // });

// // //   if (err)
// // //     return { error: true, errMessage: `an error occured: ${err.message}` };
// // //   // console.log(info)
// // //   return { error: false, message: "message sent" };
// // // });
// // };








const nodemailer = require("nodemailer");

const smtpTransport = require("nodemailer-smtp-transport");

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "maibiz",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 465,
//     auth: {
//       user: "supporbiz",
//       pass: "benefitsgloballtd1@1",
//     },
//   }),
// );

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,

//   auth: {
//     user: "panteramining642@gmail.com",
//     // pass: "desolidboy1",
//     pass: "cvqydopvaddyfnfi",
//     // secure:false,
//   },
// });

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever_mail,
    subject: `PASSWORD RECOVERY REQUEST`,
    //   text:"just wanna know if this works",
    html: `
 

 <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main    style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
>
 

 
    <div class="head-txt">
<h1 style="text-align: center; font-size: 16px; color: #825ee4">
       Benefits Global Limited
      </h1>
            <h3 style="font-size: 18px; text-align: center;">ACCOUNT RECOVERY</h3>
    </div>

    <p >
      Dear ${userInfo.first_name} ${userInfo.last_name},<br> your request to reset your account password has been recieved.<br>
 
 <br>     <a
        href="${userInfo.reset_link}"
        style="
          color: #fff;
          background-color: #825ee4;
          border-color: #825ee4;
          text-decoration: none;
          padding: 5px;
          border-radius: 2px;
        "
        >RESET PASSWORD</a
      >
       <br><br>
            or follow the link below to reset your password if the button does not work
    </p>

     <p >
     ${userInfo.reset_link}
     </p>

    <p >
      For your protection, if you did not request a new password  do not take any action regarding to this email
    </p>
<br>
 <h1
      style="
        font-size: 18px;
        text-align: center;
        background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
        color: #fff;
      "
    >
      Benefits Global Limited
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via benefitsgloballtd
      secured channel,please do not reply to this message all correspondence
      should be addressed to benefitsgloballtd.biz or your relationship officer
    </p>
  </div>
 
</main>
 `,
  });
};
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
