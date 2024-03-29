// const Investment = require("../model/investment");

// const select_investment_end_time = (req) => {
//   if (req.body.return_time == "daily_return") {
//     // let currentdate = new Date();
//     // currentdate.setDate(currentdate.getDate() + 1);
//     // let datetime = `${currentdate.getFullYear()}-${
//     //   currentdate.getMonth() + 1
//     // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//     // return datetime;
//     let date = new Date();
//     date.setDate(date.getDate() + 1);
//     let end_date = date.getTime();
//     return end_date;
//   } else {
//     // let currentdate = new Date();
//     // currentdate.setDate(currentdate.getDate() + 7);
//     // let datetime = `${currentdate.getFullYear()}-${
//     //   currentdate.getMonth() + 1
//     // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//     // return datetime;

//     let date = new Date();
//     date.setDate(date.getDate() + 7);
//     let end_date = date.getTime();
//     return end_date;
//   }
// };

// const create_investment = async (req) => {
//   let currentdate = new Date();
//   let datetime = `${currentdate.getFullYear()}-${
//     currentdate.getMonth() + 1
//   }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//   let ref = Math.floor(Math.random() * 1000);
//   console.log("end time", select_investment_end_time(req));

//   const investment = await new Investment({
//     user: req.body.user,
//     transaction_date: datetime,
//     refrence_number: `Ref#${++ref} `,
//     amount: req.body.investment_amount,
//     return_time: req.body.return_time,
//     pending_profit: req.body.profit,
//     investment_plan: req.body.investment_plan,
//     investment_end_date: select_investment_end_time(req),
//   });
//   await investment.save();
//   return investment;
// };
// module.exports = create_investment;














const Investment = require("../model/investment");


const select_investment_end_time = async (req) => {
  try {
    // const package = await Investment_package.findOne({
    //   package_name: req.body.investment_plan,
    // });
    // if (!package)
    //   throw new Error(
    //     "there was an error with the investment plan you selected",
    //   );
    //  {
    //   return res.status(400).json({
    //     error: true,
    //     errMessage: "",
    //   });

    switch (req.body.investment_plan) {
      case "Silver Plan":
        let date = new Date();
        date.setDate(date.getDate() + 3);
        let end_date = date.getTime();
        console.log("expires after 3 days");
        return end_date;

        break;

      case "Gold Plan":
        let date2 = new Date();
        date2.setDate(date2.getDate() + 5);
        let end_date2 = date2.getTime();
        console.log("expires after 5 days");

        return end_date2;
        break;

      case "VIP Plan":
        let date3 = new Date();
        date3.setDate(date3.getDate() + 10);
        let end_date3 = date3.getTime();
        console.log("expires after 10 days");

        return end_date3;

      case "Promo Plan":
        let date4 = new Date();
        date3.setDate(date3.getDate() + 15);
        let end_date4 = date4.getTime();
        console.log("expires after 15 days");

        return end_date3;

      default:
        let def_date = new Date();
        def_date.setDate(date.getDate() + 3);
        let def_end_date = date.getTime();
        console.log("expires after 3 days");

        return def_end_date;
        break;
    }
  } catch (error) {
    console.log("caught error");
    return { error: true, errMessage: error.message };
  }


};

const create_investment = async (req, res) => {
  // console.log(res)
  try {
    const return_t = select_investment_end_time(req);
    if (return_t.error)
      throw new Error({ error: true, errMessage: return_t.errMessage });

    let currentdate = new Date();
    let datetime = `${currentdate.getFullYear()}-${
      currentdate.getMonth() + 1
    }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
    let ref = Math.floor(Math.random() * 1000);
    console.log("end time", await select_investment_end_time(req));

    const investment = await new Investment({
      user: req.body.user,
      transaction_date: datetime,
      refrence_number: `Ref#${++ref} `,
      amount: req.body.investment_amount,
      completion_time: req.body.completion_time,
      // return_time: req.body.return_time,
      pending_profit: parseInt(req.body.profit),
      investment_plan: req.body.investment_plan,
      investment_end_date: await select_investment_end_time(req),
    });
    await investment.save();
    return investment;
  } catch (error) {
    return { error: true, errMessage: error.message };
  }
};
module.exports = create_investment;
