// showClientByNo, addFeedback
import Feedback from "../model/feedback.js";

export function showClientByNo(req, res) {
  const { name, phone } = req.query;

  Feedback.find({ phoneNumber: phone })
    .then((data) => {
      // console.log(data.length);
      if (data.length === 0) 
      {
        res.status(200).send({
          sentByUs: false,
        });
      } 
      else 
      {
        const obj = data[0];
        if (obj.rating == "") {
          res.status(200).send({
            sentByUs: true,
            rated: false,
          });
        } else {
          res.status(200).send({
            sentByUs: true,
            rated: true,
          });
        }
      }
    })
    .catch((err) => {
      res.status(500).send(`Server Issue ${err}`);
       console.log(`Server Issue ${err}`);
    });
}
export function addFeedback(req, res) 
{
  const {name, phoneNumber, rating, comment}=req.body;
  Feedback.updateOne({phoneNumber},{ $set: {rating, comment}})
  .then((response)=>
    {
      if(response.modifiedCount>0)
        {
          res.status(201).send({
            modified:true,
          });
        }
        else
        {
          res.status(400).send({
            modified:false,
          });
        }
    })
  .catch((err)=>
    {
      console.log('Server Problem');
    });
}
